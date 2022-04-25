<template>
  <div>
    <div id="map"></div>
  </div>
</template>
<script>
import ReconnectingWebSocket from 'reconnecting-websocket'
import { getID } from '@/utils/auth'
import { mapGetters } from 'vuex'
import { getItem } from "@/utils/storage";

const SERVER_URLS = {
  'dev': 'ws://localhost',
  'cn': 'wss://cn.cdnbye.com',
  'hk': 'wss://hk.swarmcloud.net',
  'us': 'wss://tracker.hdtvcloud.com',
}
const MAX_LINES = 7000
const FLY_TYPE2COLOR = {
  0: '#B22222',     // fastpath
  1: '#33ff33',     // SameIp
  2: '#33ff33',     // SameAsn
  3: '#1C86EE',     // SameCountry
  4: '#FFD700',     // SameContinent
  5: '#FF7F00',     // SameAbrLevel
  6: '#B22222',     // SameChannel
  7: '#A020F0',     // VodPosFirst
}

export default {
  name: 'GeoFly',
  data() {
    return {
      scene: null,
      ws: null,
      flyLineTimer: null,
      resizing: false,
      resizingTimer: null,
    };
  },
  computed: {
    ...mapGetters([
      'profile',
      'language',
    ]),
  },
  mounted() {
    const loc = getItem('loc')
    if (this.profile.token) {
      this.initScene(loc)
    } else {
      this.$store.dispatch('getProfile').then(() => {
        this.initScene(loc)
      })
    }
  },
  methods: {
    initScene(loc) {
      let serverUrl = `${SERVER_URLS[loc]}/flyline?uid=${getID()}&token=${this.profile.token}`
      const scene = new L7.Scene({
        id: 'map',
        logoVisible: false,
        map: new L7.Mapbox({
          pitch: 0,
          style: 'dark',
          zoom: 2,
          token: 'pk.eyJ1IjoiY2RuYnllIiwiYSI6ImNsMHE3ZmRxNDI3ZXczbHFrYm82Z2MyODEifQ.RTPyCND8dTNtHudmaQolwQ',
        })
      });
      this.scene = scene;
      const language = new MapboxLanguage({
        defaultLanguage: this.language === 'en' ? 'en' : 'zh-Hant',
      });
      scene.map.addControl(language)
      let flag = false;
      let flydata = [];
      const flyLine = new L7.LineLayer({ blend: 'normal' })
          .size(0.8)
          .shape('greatcircle')
          .color('color')
          .animate({
            enable: true,
            interval: 0.3,
            trailLength: 0.2,
            duration: 3.5
          })
          .style({
            opacity: 0.6
          });
      const renderData = () => {
        if (flag && !this.resizing) {
          // console.warn(`setData size ${flydata.length}`)
          flyLine.setData(flydata, {
            parser: {
              type: 'json',
              x: 'lon1',
              y: 'lat1',
              x1: 'lon2',
              y1: 'lat2',
            }
          })
          flag = false
        }
      }
      const startTimer = (timeout) => {
        this.flyLineTimer = setTimeout(() => {
          renderData()
          const size = flydata.length
          // console.warn(`startTimer ${timeout} size ${size}`)
          if (size < 100) {
            startTimer(200)
          } else if (size < 500) {
            startTimer(1000)
          } else if (size < 1000) {
            startTimer(3000)
          } else {
            startTimer(10000)
          }
        }, timeout)
      }

      startTimer(200)

      scene.on('loaded', () => {
        scene.addLayer(flyLine);

        const wsOptions = {
          // debug: true,
          maxRetries: 5,
          minReconnectionDelay: 5000, // 生成15到40秒的随机数
          maxReconnectionDelay: 60*1000,
        };
        let ws = new ReconnectingWebSocket(serverUrl, undefined, wsOptions);
        this.ws = ws;
        ws.addEventListener('open', () => {
          // console.info(`ws ${SERVER_URL} connection opened`);
        })
        ws.addEventListener('message', (e) => {
          let data = e.data;
          let msg
          try {
            msg = JSON.parse(data);
          } catch (e) {
            alert(data)
            return
          }
          const coords = this.convert(msg)
          flydata.push(...coords)
          if (flydata.length > MAX_LINES) {
            flydata = flydata.slice(-MAX_LINES)
          }
          flag = true
        })
      });
      this.setupListener()
    },
    convert(msg) {
      // console.log(msg)
      const coords = [];               // [ {lon, lat, color} ]
      let { from, to } = msg
      if (!from || !to) return coords
      if (to.length === 0) return coords
      // if (to.length >= 5) {
      //   to = to.slice(0, 4)
      // }
      to.forEach(item => {
        if (!item.typ) item.typ = 0
        coords.push({
          lat1: from.lat,
          lon1: from.lon,
          lat2: item.lat,
          lon2: item.lon,
          color: FLY_TYPE2COLOR[item.typ] || '#B22222',
        })
      })
      return coords
    },
    setupListener() {
      const { scene } = this
      scene.on('movestart', () => {this.handleResizing()}); // 地图平移开始时触发
      scene.on('zoomchange', () => {this.handleResizing()}); // 地图缩放级别更改后触发
      scene.on('zoomstart', () => {this.handleResizing()}); // 缩放开始时触发
      scene.on('dragging', () => {this.handleResizing()}); // 拖拽地图过程中触发
    },
    handleResizing() {
      // console.warn(`handleResizing`)
      if (this.resizingTimer) return
      this.resizing = true
      this.resizingTimer = setTimeout(() => {
        this.resizing = false
        this.resizingTimer = null
      }, 2000)
    }
  },
  beforeDestroy() {
    clearTimeout(this.flyLineTimer)
    clearTimeout(this.resizingTimer)
    if (this.scene) {
      this.scene.destroy();
    }
    if (this.ws) {
      this.ws.close(1000, 'normal close');
    }
  }
};
</script>
<style lang="scss">
#map {

}
</style>

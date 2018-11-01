<template>
  <div :class="className" :style="{height:height,width:width}"/>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import { debounce } from '@/utils'
import '../../../node_modules/echarts/map/js/china.js'

export default {
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '900px'
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    // chartData: {
    //   type: Object,
    //   required: true
    // }
  },
  data() {
    return {
      chart: null,
      data: {}
    }
  },
  // watch: {
  //   chartData: {
  //     deep: true,
  //     handler(val) {
  //       this.data = val
  //       this.setOptions()
  //     }
  //   }
  // },
  mounted() {
    this.initChart()
    if (this.autoResize) {
      this.__resizeHandler = debounce(() => {
        if (this.chart) {
          this.chart.resize()
        }
      }, 100)
      window.addEventListener('resize', this.__resizeHandler)
    }

    // 监听侧边栏的变化
    const sidebarElm = document.getElementsByClassName('sidebar-container')[0]
    sidebarElm.addEventListener('transitionend', this.sidebarResizeHandler)
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    if (this.autoResize) {
      window.removeEventListener('resize', this.__resizeHandler)
    }

    const sidebarElm = document.getElementsByClassName('sidebar-container')[0]
    sidebarElm.removeEventListener('transitionend', this.sidebarResizeHandler)

    this.chart.dispose()
    this.chart = null
  },
  methods: {
    sidebarResizeHandler(e) {
      if (e.propertyName === 'width') {
        this.__resizeHandler()
      }
    },
    setOptions() {
      this.chart.setOption({
        // visualMap: {
        //   min: 0,
        //   max: 2500,
        //   left: 'left',
        //   top: 'bottom',
        //   text:['高','低'],           // 文本，默认为数值文本
        //   calculable : true
        // },
        
        visualMap: {
          type: 'piecewise',
          pieces: [
            {gt: 1500},            // (1500, Infinity]
            {gt: 1000, lte: 1500},  // (900, 1500]
            {gt: 300, lte: 1000},  // (310, 1000]
            {gt: 200, lte: 300},   // (200, 300]
            {gt: 50, lte: 200, label: '50 到 200（自定义label）'},       // (10, 200]
            {lt: 50}                 // (-Infinity, 5)
          ]
        },
        geo: {
          map: 'china',
          roam: true,
          scaleLimit: {
            min: 0.5,
            max: 3
          }
        },
        tooltip: {
          trigger: 'item'
        },
        series: {
          name: 'aaa',
          type: 'map',
          mapType: 'china',
          zoom: 5,
          geoIndex: 0,
          data: [
            {name: '北京',value: Math.round(Math.random()*800)},
            {name: '天津',value: Math.round(Math.random()*1000)},
            {name: '上海',value: Math.round(Math.random()*1000)},
            {name: '重庆',value: Math.round(Math.random()*1000)},
            {name: '河北',value: Math.round(Math.random()*10000)},
            {name: '河南',value: Math.round(Math.random()*1000)},
            {name: '云南',value: Math.round(Math.random()*800)},
            {name: '辽宁',value: Math.round(Math.random()*1000)},
            {name: '黑龙江',value: Math.round(Math.random()*1000)},
            {name: '湖南',value: Math.round(Math.random()*1000)},
            {name: '安徽',value: Math.round(Math.random()*1000)},
            {name: '山东',value: Math.round(Math.random()*10000)},
            {name: '新疆',value: Math.round(Math.random()*1000)},
            {name: '江苏',value: Math.round(Math.random()*1000)},
            {name: '浙江',value: Math.round(Math.random()*1000)},
            {name: '江西',value: Math.round(Math.random()*1000)},
            {name: '湖北',value: Math.round(Math.random()*800)},
            {name: '广西',value: Math.round(Math.random()*1000)},
            {name: '甘肃',value: Math.round(Math.random()*10000)},
            {name: '山西',value: Math.round(Math.random()*1000)},
            {name: '内蒙古',value: Math.round(Math.random()*1000)},
            {name: '陕西',value: Math.round(Math.random()*1000)},
            {name: '吉林',value: Math.round(Math.random()*1000)},
            {name: '福建',value: Math.round(Math.random()*1000)},
            {name: '贵州',value: Math.round(Math.random()*10000)},
            {name: '广东',value: Math.round(Math.random()*1000)},
            {name: '青海',value: Math.round(Math.random()*1000)},
            {name: '西藏',value: Math.round(Math.random()*1000)},
            {name: '四川',value: Math.round(Math.random()*1000)},
            {name: '宁夏',value: Math.round(Math.random()*1000)},
            {name: '海南',value: Math.round(Math.random()*10000)},
            {name: '台湾',value: Math.round(Math.random()*1000)},
            {name: '香港',value: Math.round(Math.random()*1000)},
            {name: '澳门',value: Math.round(Math.random()*10000)}
          ]
        }
      })
    },
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions()
    }
  }
}
</script>

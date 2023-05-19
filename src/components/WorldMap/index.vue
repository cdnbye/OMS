<template>
  <div :class="className" :style="{height:height,width:width}"/>
</template>

<script>
let echarts = require('echarts/lib/echarts')
require('echarts/theme/macarons') // echarts theme
import { debounce } from '@/utils'
import '../../../node_modules/echarts/map/js/world.js'

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
      default: 'calc(100vh - 84px)'
      // default: '900px'
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    countryData: {
      type: Array,
      required: true
    },
    total: {
      type: Number,
      required: false
    }
  },
  data() {
    return {
      chart: null,
      world_data: [],
      max: 0,
    }
  },
  watch: {
    countryData: {
      deep: true,
      handler(val) {
          // console.warn(`countryData ${JSON.stringify(val)}`)
        if (!val) return
        val.forEach(item => {
            if (this.max < item.value) this.max = item.value
        })
        this.world_data = val
        this.setOptions()
      }
    }
  },
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
    sidebarElm && sidebarElm.removeEventListener('transitionend', this.sidebarResizeHandler)

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
      let max = this.max ? this.max : 0
      const _this = this
      this.chart.setOption({
        visualMap: {
          min: 0,
          max: max,
          left: 'left',
          top: 'bottom',
          text: ['High', 'Low'],
          calculable : true,
          color: ['red', '#E2E2E2']
        },
        backgroundColor: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 1,
          y2: 1,
          colorStops: [{
            offset: 0, color: '#0f2c70' // 0% 处的颜色
          }, {
            offset: 1, color: '#091732' // 100% 处的颜色
          }],
          globalCoord: false // 缺省为 false
        },
        // tooltip: {
        //   trigger: 'item'
        // },
        geo: {
          map: 'world',
          show: true,
          roam: true,
          label: {
            normal: {
              show: true,
              color: 'auto'
              // color: '#fff'
            },
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            // emphasis: {
            //   color: "rgba(37, 43, 61, .5)" //hover背景
            // }
            // normal: {
            //   areaColor: '#091632',
            //   borderColor: '#1773c3',
            //   shadowColor: '#1773c3',
            //   shadowBlur: 20
            // }
          },
          scaleLimit: {
            min: 0.5,
            max: 10
          }
        },
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                const data = params.data
                // console.warn(JSON.stringify(params))
                // console.warn(params.data.value)
                let desc = ''
                if(data && data.value > 0) {
                    desc = data.name + ' : ' + data.value + '<br />' + 'Percent: ' + (params.value / _this.total * 100).toFixed(2) + '%'
                }
                return desc
            }
        },
        series: {
          // name: 'Realtime Online',
          type: 'map',
          mapType: 'world',
          zoom: 5,
          geoIndex: 0,
          data: this.world_data
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

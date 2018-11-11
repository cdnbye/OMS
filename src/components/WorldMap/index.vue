<template>
  <div :class="className" :style="{height:height,width:width}"/>
</template>

<script>
import echarts from 'echarts'
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
    }
  },
  data() {
    return {
      chart: null,
      world_data: []
    }
  },
  watch: {
    countryData: {
      deep: true,
      handler(val) {
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
        visualMap: {
          min: 0,
          max: 2500,
          left: 'left',
          top: 'bottom',
          text:['高','低'],           // 文本，默认为数值文本
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
        tooltip: {
          trigger: 'item'
        },
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
        series: {
          name: '实时在线人数',
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

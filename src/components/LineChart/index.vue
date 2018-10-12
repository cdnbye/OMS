<template>
  <div :class="className" :style="{height:height,width:width}"/>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import { debounce } from '@/utils'

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
      default: '350px'
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object,
      required: true
    },
    option: {
      type: Object,
      required: true,
      default: {}
    }
  },
  data() {
    return {
      chart: null,
      optionData: {
        xData: [],
        unit: ''
      },
      data: {}
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.data = val
        this.setOptions()
      }
    },
    option: {
      deep: true,
      handler(val) {
        this.optionData = val
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
      const series = []
      const legend = []
      const colors = ['#FF005A', '#3888fa']
      Object.keys(this.data).forEach((item, index) => {
        legend.push(item)
        series.push({
          name: item,
          itemStyle: {
            normal: {
              color: colors[index],
              lineStyle: {
                color: colors[index],
                width: 2
              }
            }
          },
          smooth: true,
          type: 'line',
          data: this.data[item],
          animationDuration: 2800,
          animationEasing: 'cubicInOut'
        })
      })
      this.chart.setOption({
        xAxis: {
          data: this.optionData.xData,
          boundaryGap: false,
          axisLabel: {
            formatter: function(value) {
              return value.split(" ").join("\n");
            }
          },
          axisTick: {
            show: false
          }
        },
        grid: {
          left: 10,
          right: 30,
          bottom: 20,
          top: 30,
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
          },
          textStyle:{
        　　align: 'left'
        　},
          padding: [5, 10]
        },
        yAxis: {
          name: this.optionData.unit ? `${this.optionData.yName}(${this.optionData.unit})` : `${this.optionData.yName}`,
          axisTick: {
            show: false
          }
        },
        legend: {
          data: legend,
        },
        series
        // series: [{
        // //   name: 'expected',
        //   itemStyle: {
        //     normal: {
        //       color: '#FF005A',
        //       lineStyle: {
        //         color: '#FF005A',
        //         width: 2
        //       }
        //     }
        //   },
        //   smooth: true,
        //   type: 'line',
        //   data: expectedData,
        //   animationDuration: 2800,
        //   animationEasing: 'cubicInOut'
        // },
        // {
        // //   name: 'actual',
        //   smooth: true,
        //   type: 'line',
        //   itemStyle: {
        //     normal: {
        //       color: '#3888fa',
        //       lineStyle: {
        //         color: '#3888fa',
        //         width: 2
        //       },
        //       areaStyle: {
        //         color: '#f3f8ff'
        //       }
        //     }
        //   },
        //   data: actualData,
        //   animationDuration: 2800,
        //   animationEasing: 'quadraticOut'
        // }]
      })
    },
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions(this.chartData)
    }
  }
}
</script>

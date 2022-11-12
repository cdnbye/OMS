<template>
  <div :class="className" :style="{height:height,width:width}"/>
</template>

<script>
let echarts = require('echarts/lib/echarts')
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
    secondChartData: {
      type: Object,
      required: false
    },
    option: {
      type: Object,
      required: true
    },
    showSecondYAxis: {
      type: Boolean,
    }
  },
  data() {
    return {
      chart: null,
      optionData: {
        xData: [],
        unit: ''
      },
      data: {},
      secondData: {}
    }
  },
  watch: {
    secondChartData: {
      deep: true,
      handler(val) {
        this.secondData = val
        this.setOptions()
      }
    },
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
    if (sidebarElm) sidebarElm.removeEventListener('transitionend', this.sidebarResizeHandler)

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
      const colors = ['#3888fa', '#FF005A']
      Object.keys(this.data).forEach((item, index) => {
        legend.push(item)
        series.push({
          name: item,
          markPoint: {
            data: [
              {type: 'max', name: '最大值'},
              {type: 'min', name: '最小值'}
            ]
          },
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
      Object.keys(this.secondData).forEach((item, index) => {
        legend.push(item)
        series.push({
          name: item,
          markPoint: {
            data: [
              {type: 'max', name: '最大值'},
              {type: 'min', name: '最小值'}
            ]
          },
          yAxisIndex: 1,
          smooth: true,
          type: 'line',
          data: this.secondData[item],
          animationDuration: 2800,
          animationEasing: 'cubicInOut'
        })
      })
      const options = {
        xAxis: {
          data: this.optionData.xData,
          boundaryGap: false,
          axisLabel: {
            formatter: function(value) {
              if(value) {
                return value.split(" ").join("\n");
              }
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
          padding: [5, 10],
          axisPointer: {
            type: 'cross'
          },
          textStyle: {
            align: 'left'
          }
        },
        yAxis: [
          {
            name: this.optionData.unit ? `${this.optionData.yName}(${this.optionData.unit})` : `${this.optionData.yName}`,
            axisTick: {
              show: false
            },
          },
        ],
        legend: {
          data: legend
        },
        series
      }
      if (this.showSecondYAxis) {
        options.yAxis.push({
          name: 'P2P Ratio',
          max: 100,
          min: 0,
          axisTick: {
            show: false
          },
          position: 'right',
          axisLabel: {
            formatter: '{value} %'
          }
        })
      }
      this.chart.setOption(options)
    },
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions()
    }
  }
}
</script>

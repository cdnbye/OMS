<template>
  <div class="app-container">
    <DataPicker :date="date" :radio="radio" :hour="false" :day="false" @selectChange="selectChange" @dataChange="dataChange">
    </DataPicker>
    <LineChart :chart-data="lineChartData" :option="option" />
  </div>
</template>

<script>
import moment from 'moment'
import DataPicker from '@/components/DataPicker'
import LineChart from '@/components/LineChart'
import { fetchP2PTraffic, fetchHttpTraffic } from '@/api/historyData'

export default {
  name: 'P2pRatio',
  components: {
    DataPicker,
    LineChart
  },
  data() {
    return {
      lineChartData: {
        P2P分享率: []
      },
      date: [moment().startOf('day').subtract(1, 'week'), moment().startOf('day')],
      radio: 'week',
      httpData: [],
      p2pData: [],
      option: {
        xData: [],
        unit: '%',
        yName: 'P2P分享率'
      }
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    dataChange(date) {
      this.getData(this.getTimeStamp(date[0]), this.getTimeStamp(date[1]))
    },
    getData(start = this.getTimeStamp(this.date[0]), end = this.getTimeStamp(this.date[1])) {
      this.httpData = []
      this.p2pData = []
      this.option.xData = []
      this.lineChartData.P2P分享率 = []
      fetchP2PTraffic(start, end).then(res => {
        this.p2pData = res.data.list
        this.formatData()
      })
      fetchHttpTraffic(start, end).then(res => {
        this.httpData = res.data.list
        this.formatData()
      })
    },
    formatData() {
      if(this.httpData.length > 0 && this.p2pData.length > 0) {
        this.p2pData.forEach((item, index) => {
          this.option.xData.push(moment(item.ts * 1000).format('MM-DD'))
          const value = (item.value / (item.value + this.httpData[index].value) * 100).toFixed(2)
          if(item.value + this.httpData[index].value === 0) {
            this.lineChartData.P2P分享率.push(0)
          } else {
            this.lineChartData.P2P分享率.push(value)
          }
        })
      }
    },
    selectChange(val) {
      switch (val) {
        case 'hour':
          this.getData(this.getTimeStamp(moment().subtract(1, 'hour')), this.getTimeStamp(moment()))
          break;
        case 'day':
          this.getData(this.getTimeStamp(moment().subtract(1, 'day')), this.getTimeStamp(moment()))
          break;
        case 'week':
          this.getData(this.getTimeStamp(moment().startOf('day').subtract(1, 'week')), this.getTimeStamp(moment().startOf('day')))
          break;
        case 'month':
          this.getData(this.getTimeStamp(moment().startOf('day').subtract(1, 'month')), this.getTimeStamp(moment().startOf('day')))
          break;
        default:
          break;
      }
    },
    getTimeStamp(date) {
      return moment(date).format('X')
    }
  }
}
</script>

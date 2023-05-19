<template>
  <div class="app-container">
    <DataPicker :date="date" :radio="radio" @selectChange="selectChange" @dataChange="dataChange">
    </DataPicker>
    <LineChart :chart-data="bandwidthData" :second-chart-data="ratioData" :showSecondYAxis=true :option="option" />
  </div>
</template>

<script>
import moment from 'moment'
import DataPicker from '@/components/DataPicker'
import LineChart from '@/components/LineChart'
import { formatTraffic, getTrafficNum } from '@/utils/format'
import { fetchP2PTraffic, fetchHttpTraffic, fetchShareTraffic } from '@/api/historyData'

/*
 已改成显示流量
 */

export default {
  name: 'Traffic',
  components: {
    DataPicker,
    LineChart
  },
  data() {
    return {
      date: [moment().startOf('day').subtract(1, 'week'), moment().startOf('day')],
      radio: 'week',
      bandwidthData: {
        p2p: [],
        http: [],
        share: [],
      },
      ratioData: {
        ratio: [],
      },
      option: {
        xData: [],
        unit: '',
        yName: '流量',
      },
    }
  },
  created() {
    this.getData()
  },
  methods: {
    dataChange(date) {
      this.getData(this.getTimeStamp(date[0]), this.getTimeStamp(date[1]))
    },
    getData(start = this.getTimeStamp(this.date[0]), end = this.getTimeStamp(this.date[1]), gran) {
      Promise.all([fetchHttpTraffic(start, end, gran), fetchP2PTraffic(start, end, gran), fetchShareTraffic(start, end, gran)])
      .then((result) => {
        this.formatHttpData(result[0], gran)
        this.formatP2pData(result[1], gran)
        this.formatShareData(result[2], gran)
        this.formatRatioData(result[0].data.list, result[1].data.list)
      })
    },
    selectChange(val) {
      switch (val) {
        case 'hour':
          this.getData(this.getTimeStamp(moment().subtract(1, 'hour')), this.getTimeStamp(moment()), 5)
          break;
        case 'day':
          this.getData(this.getTimeStamp(moment().subtract(1, 'day')), this.getTimeStamp(moment()), 5)
          break;
        case 'week':
          this.getData(this.getTimeStamp(moment().startOf('day').subtract(1, 'week')), this.getTimeStamp(moment().startOf('day')), 1440)
          break;
        case 'month':
          this.getData(this.getTimeStamp(moment().startOf('day').subtract(1, 'month')), this.getTimeStamp(moment().startOf('day')), 1440)
          break;
        default:
          break;
      }
    },
    formatP2pData(res) {
      const data = res.data.list
      this.bandwidthData.p2p = []
      data.forEach(item => {
        this.bandwidthData.p2p.push(getTrafficNum(item.value, this.option.unit))
      })
    },
    formatShareData(res) {
      const data = res.data.list
      this.bandwidthData.share = []
      data.forEach(item => {
        this.bandwidthData.share.push(getTrafficNum(item.value, this.option.unit))
      })
    },
    formatRatioData(httpList, p2pList) {
      this.ratioData.ratio = []
      p2pList.forEach((item, index) => {
        const ratio = item.value > 0 && httpList[index] ? item.value/(item.value + httpList[index].value) : 0
        this.ratioData.ratio.push(Number((ratio*100).toFixed(1)))
      })
    },
    formatHttpData(res, gran) {
      const data = res.data.list
      const trafficValue = [...res.data.list]
      trafficValue.sort(function(a, b) {
        return a.value - b.value
      })
      this.option.unit = this.option.unit ? this.option.unit : formatTraffic(trafficValue[(trafficValue.length - 1)].value).unit
      this.option.xData = []
      this.bandwidthData.http = []
      data.forEach(item => {
        let format = gran === 5 ? 'HH:mm' : 'MM-DD'
        this.option.xData.push(moment(item.ts * 1000).format(format))
        this.bandwidthData.http.push(getTrafficNum(item.value, this.option.unit))
      })
    },
    getTimeStamp(date) {
      return moment(date).unix()
    }
  }
}
</script>

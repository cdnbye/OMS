<template>
  <div class="container">
    <el-form :inline="true">
      <el-form-item :xs="10" :sm="6" :lg="4">
        <el-date-picker
          placeholder="开始日期"
          type="date"
          v-model="startDate"
        />
      </el-form-item>
      <el-form-item :xs="10" :sm="6" :lg="4">      
        <el-date-picker
          placeholder="结束日期"
          type="date"
          v-model="endDate"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit">确定</el-button>
      </el-form-item>
    </el-form>
    <LineChart :chart-data="bandwidthData" :option="option" />
  </div>
</template>

<script>
import moment from 'moment'
import LineChart from '@/components/LineChart'
import { getGran } from '@/utils/caculate'
import { formatTraffic, formatTrafficUnit } from '@/utils/format'
import { fetchP2PTraffic, fetchHttpTraffic } from '@/api/historyData'

export default {
  name: 'Bandwidth',
  components: {
    LineChart
  },
  data() {
    return {
      // lineChartData: {
      //   expectedData: [100, 120, 161, 134, 105, 160, 165],
      //   actualData: [120, 82, 91, 154, 162, 140, 145]
      // },
      bandwidthData: {
        p2p: [],
        http: []
      },
      startDate: moment().startOf('week'),
      endDate: moment(),
      option: {
        xData: [],
        unit: '',
        yName: '带宽'
      }
    }
  },
  mounted() {
    this.getP2PTraffic(this.getTimeStamp(this.startDate), this.getTimeStamp(this.endDate), getGran(this.startDate, this.endDate))
    this.getHttpTraffic(this.getTimeStamp(this.startDate), this.getTimeStamp(this.endDate), getGran(this.startDate, this.endDate))
  },
  methods: {
    formatData(res) {
      const data = res.data.list
      const trafficValue = [...res.data.list]
      trafficValue.sort(function(a, b) {
        return b.alue - a.vavlue > 0
      })
      this.option.unit = this.option.unit ? this.option.unit : formatTrafficUnit(trafficValue[(trafficValue.length - 1)].value)
      this.option.xData = []
      this.bandwidthData.p2p = []
      data.forEach(item => {
        this.option.xData.push(moment(item.ts * 1000).format('MM-DD HH:mm'))
        this.bandwidthData.p2p.push(formatTraffic(item.value, this.option.unit))
      })
    },
    formatHttpData(res) {
      const data = res.data.list
      const trafficValue = [...res.data.list]
      trafficValue.sort(function(a, b) {
        return b.alue - a.vavlue > 0
      })
      this.option.unit = this.option.unit ? this.option.unit : formatTrafficUnit(trafficValue[(trafficValue.length - 1)].value)
      this.option.xData = []
      this.bandwidthData.http = []
      data.forEach(item => {
        this.option.xData.push(moment(item.ts * 1000).format('MM-DD HH:mm'))
        this.bandwidthData.http.push(formatTraffic(item.value, this.option.unit))
      })
    },
    getTimeStamp(date) {
      return moment(date).format('X')
    },
    getP2PTraffic(start, end, gran) {
      fetchP2PTraffic(start, end, gran).then(res => {
        this.formatData(res)
      })
    },
    getHttpTraffic(start, end, gran) {
      fetchHttpTraffic(start, end, gran).then(res => {
        this.formatHttpData(res)
      })
    },
    handleSubmit() {
      this.getP2PTraffic(this.getTimeStamp(this.startDate), this.getTimeStamp(this.endDate), getGran(this.startDate, this.endDate))
      this.getHttpTraffic(this.getTimeStamp(this.startDate), this.getTimeStamp(this.endDate), getGran(this.startDate, this.endDate))
    }
  }
}
</script>

<style scoped>
  .container {
    padding: 50px 20px;
  }
</style>

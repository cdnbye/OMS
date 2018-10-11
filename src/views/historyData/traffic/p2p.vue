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
    <LineChart :chart-data="trafficData" :option="option" />
  </div>
</template>

<script>
import moment from 'moment'
import { fetchP2PTraffic, fetchHttpTraffic } from '@/api/historyData'
import LineChart from '@/components/LineChart'
import { formatTraffic, formatTrafficUnit } from '@/utils/format'

export default {
  name: 'P2P',
  components: {
    LineChart
  },
  data() {
    return {
      lineChartData: {
        expectedData: [100, 120, 161, 134, 105, 160, 165],
        actualData: [120, 82, 91, 154, 162, 140, 145]
      },
      trafficData: {
        p2p: [],
        http: []
      },
      startDate: moment().startOf('week'),
      endDate: moment(),
      option: {
        xData: [],
        legend: ['P2P', 'Http'],
        unit: 'kb'
      }
    }
  },
  mounted() {
    this.getP2PTraffic(this.getTimeStamp(this.startDate), this.getTimeStamp(this.endDate), this.getGran())
    this.fetchHttpTraffic(this.getTimeStamp(this.startDate), this.getTimeStamp(this.endDate), this.getGran())
  },
  methods: {
    formatData(res) {
      const data = res.data.list
      const trafficValue = [...res.data.list]
      trafficValue.sort(function(a, b) {
        return b.alue - a.vavlue > 0
      })
      this.option.unit = formatTrafficUnit(trafficValue[(trafficValue.length - 1)].value)
      this.option.xData = []
      this.trafficData.p2p = []
      data.forEach(item => {
        this.option.xData.push(moment(item.ts * 1000).format('MM-DD HH:mm'))
        this.trafficData.p2p.push(formatTraffic(item.value, this.option.unit))
      })
    },
    formatHttpData(res) {
      const data = res.data.list
      const trafficValue = [...res.data.list]
      trafficValue.sort(function(a, b) {
        return b.alue - a.vavlue > 0
      })
      this.option.unit = formatTrafficUnit(trafficValue[(trafficValue.length - 1)].value)
      this.option.xData = []
      this.trafficData.http = []
      data.forEach(item => {
        this.option.xData.push(moment(item.ts * 1000).format('MM-DD HH:mm'))
        this.trafficData.http.push(formatTraffic(item.value, this.option.unit))
      })
    },
    getTimeStamp(date) {
      return moment(date).format('X')
    },
    getGran() {
      let gran = 5
      const start = moment(this.startDate)
      const end = moment(this.endDate)
      const temp = end.diff(start, 'days')
      const hour = 60
      const day = 1440
      const week = 1440 * 7
      const month = 1440 * 30
      if(temp >= 210) {
        gran = month
      } else if(temp >= 60) {
        gran = week
      } else if(temp >= 7) {
        gran = day
      } else if(temp >= 3) {
        gran = hour
      }
      return gran
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
      this.getP2PTraffic(this.getTimeStamp(this.startDate), this.getTimeStamp(this.endDate), this.getGran())
      this.getHttpTraffic(this.getTimeStamp(this.startDate), this.getTimeStamp(this.endDate), this.getGran())
    }
  }
}
</script>

<style scoped>
  .container {
    padding: 50px 20px;
  }
</style>

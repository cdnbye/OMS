<template>
  <div class="container">
    <el-form :inline="true">
      <el-form-item :xs="10" :sm="6" :lg="4">
        <el-radio-group v-model="radio" @change="selectChange">
          <el-radio-button label="hour">1小时内</el-radio-button>
          <el-radio-button label="day">24小时内</el-radio-button>
          <el-radio-button label="week">7天</el-radio-button>
          <el-radio-button label="month">30天</el-radio-button>
        </el-radio-group>
      </el-form-item>
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
      radio: '',
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
      },
      time: 'MM-DD HH:mm'
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData(start = this.getTimeStamp(this.startDate), end = this.getTimeStamp(this.endDate)) {
      this.getTime()
      fetchP2PTraffic(start, end).then(res => {
        this.formatData(res)
      })
      fetchHttpTraffic(start, end).then(res => {
        this.formatHttpData(res)
      })
    },
    selectChange(val) {
      switch (val) {
        case 'hour':
          this.time = 'MM-DD HH:mm'
          this.getData(this.getTimeStamp(moment().subtract(1, 'hour')), this.getTimeStamp(moment()))
          break;
        case 'day':
          this.time = 'MM-DD HH:mm'
          this.getData(this.getTimeStamp(moment().subtract(1, 'day')), this.getTimeStamp(moment()))
          break;
        case 'week':
          this.time = 'MM-DD'
          this.getData(this.getTimeStamp(moment().subtract(1, 'week')), this.getTimeStamp(moment()))
          break;
        case 'month':
          this.time = 'MM-DD'
          this.getData(this.getTimeStamp(moment().subtract(1, 'month')), this.getTimeStamp(moment()))
          break;
        default:
          break;
      }
    },
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
        this.option.xData.push(moment(item.ts * 1000).format(this.time))
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
        this.option.xData.push(moment(item.ts * 1000).format(this.time))
        this.bandwidthData.http.push(formatTraffic(item.value, this.option.unit))
      })
    },
    getTimeStamp(date) {
      return moment(date).format('X')
    },
    handleSubmit() {
      this.getData()
    },
    getTime() {
      const { startDate, endDate } = this
      const days = moment(endDate).diff(moment(startDate), 'days')
      if(days > 3) {
        this.time = 'MM-DD'
      }
    }
  }
}
</script>

<style scoped>
  .container {
    padding: 50px 20px;
  }
</style>

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
    <LineChart :chart-data="onlineData" :option="option" />
  </div>
</template>

<script>
import moment from 'moment'
import { fetchNum } from '@/api/historyData'
import LineChart from '@/components/LineChart'

export default {
  name: 'Online',
  components: {
    LineChart
  },
  data() {
    return {
      radio: '',      
      onlineData: {
        online: []
      },
      startDate: moment().startOf('week'),
      endDate: moment(),
      option: {
        xData: [],
        yName: '在线人数',
      },
      time: 'MM-DD HH:mm'      
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
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
    getTime() {
      const { startDate, endDate } = this
      const days = moment(endDate).diff(moment(startDate), 'days')
      if(days > 3) {
        this.time = 'MM-DD'
      }
    },
    formatData(res) {
      const data = res.data.list
      this.option.xData = []
      this.onlineData.online = []
      data.forEach(item => {
        this.option.xData.push(moment(item.ts * 1000).format(this.time))
        this.onlineData.online.push(item.value)
      })
    },
    getTimeStamp(date) {
      return moment(date).format('X')
    },
    getData(start = this.getTimeStamp(this.startDate), end = this.getTimeStamp(this.endDate)) {
      fetchNum(start, end).then(res => {
        this.formatData(res)
      })
    },
    handleSubmit() {
      this.getData()
    }
  }
}
</script>

<style scoped>
  .container {
    padding: 50px 20px;
  }
</style>

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
    <LineChart :chart-data="lineChartData" />
  </div>
</template>

<script>
import moment,{ isMoment } from 'moment'
import { fetchP2PTraffic, fetchP2PBandwidth } from '@/api/historyData'
import LineChart from './components/LineChart'

export default {
  name: 'Test',
  components: {
    LineChart
  },
  data() {
    return {
      lineChartData: {
        expectedData: [100, 120, 161, 134, 105, 160, 165],
        actualData: [120, 82, 91, 154, 162, 140, 145]
      },
      startDate: moment(),
      endDate: moment(),
    }
  },
  mounted() {
    this.getP2PTraffic(moment().startOf('month').format('X'), moment().format('X'), 5)
    this.getP2PBandwidth()
  },
  methods: {
    dateChange(time) {
     if (time) {
     var date = new Date(Date.parse(time));
     var newDate = date.getFullYear() + "-" + (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + "-" + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
      return newDate ;
         }
    }, 
    getP2PTraffic(start, end, gran) {
      fetchP2PTraffic(start, end, gran).then(res => {
        console.log(res)
      })
    },
    getP2PBandwidth() {
      fetchP2PBandwidth(2018, 9).then(res => {
        console.log(res)
      })
    },
    handleSubmit() {

    }
    // startDateChange(val) {
    //   console.log(moment(val).format('X'))
    //   console.log(moment(this.startDate).format('X'))
    // },
    // endDateChange(val) {
    //   console.log(moment(val).format('X'))
    // },
  }
}
</script>

<style scoped>
  .container {
    padding: 50px 20px;
  }
</style>

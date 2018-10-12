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
    <LineChart :chart-data="onlineData" :option="option" />
  </div>
</template>

<script>
import moment from 'moment'
import LineChart from '@/components/LineChart'
import { fetchNum } from '@/api/historyData'
import { getGran } from '@/utils/caculate'
import { formatTraffic, formatTrafficUnit } from '@/utils/format'

export default {
  name: 'Online',
  components: {
    LineChart
  },
  data() {
    return {
      onlineData: {
        online: []
      },
      startDate: moment().startOf('week'),
      endDate: moment(),
      option: {
        xData: [],
        yName: '在线人数',
      }
    }
  },
  mounted() {
    this.getOnlineNum(this.getTimeStamp(this.startDate), this.getTimeStamp(this.endDate), getGran(this.startDate, this.endDate))
  },
  methods: {
    formatData(res) {
      const data = res.data.list
      this.option.xData = []
      this.onlineData.online = []
      data.forEach(item => {
        this.option.xData.push(moment(item.ts * 1000).format('MM-DD HH:mm'))
        this.onlineData.online.push(item.value)
      })
    },
    getTimeStamp(date) {
      return moment(date).format('X')
    },
    getOnlineNum(start, end, gran) {
      fetchNum(start, end, gran).then(res => {
        this.formatData(res)
      })
    },
    handleSubmit() {
      this.getOnlineNum(this.getTimeStamp(this.startDate), this.getTimeStamp(this.endDate), getGran(this.startDate, this.endDate))
    }
  }
}
</script>

<style scoped>
  .container {
    padding: 50px 20px;
  }
</style>

<template>
  <div class="app-container">
    <el-form :inline="true">
      <el-form-item :xs="10" :sm="6" :lg="4">
        <el-radio-group v-model="radio" @change="selectChange">
          <el-radio-button label="hour">{{ $t('historyData.hour')}}</el-radio-button>
          <el-radio-button label="day">{{ $t('historyData.day')}}</el-radio-button>
          <el-radio-button label="week">{{ $t('historyData.week')}}</el-radio-button>
          <el-radio-button label="month">{{ $t('historyData.month')}}</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item :xs="10" :sm="6" :lg="4">
        <el-date-picker
          v-model="date"
          @change="dataChange"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
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
      date: [moment().subtract(1, 'hour'), moment()],
      radio: 'hour',      
      onlineData: {
        online: []
      },
      option: {
        xData: [],
        yName: '在线人数',
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
    selectChange(val) {
      switch (val) {
        case 'hour':
          this.getData(this.getTimeStamp(moment().subtract(1, 'hour')), this.getTimeStamp(moment()))
          break;
        case 'day':
          this.getData(this.getTimeStamp(moment().subtract(1, 'day')), this.getTimeStamp(moment()))
          break;
        case 'week':
          this.getData(this.getTimeStamp(moment().subtract(1, 'week')), this.getTimeStamp(moment()))
          break;
        case 'month':
          this.getData(this.getTimeStamp(moment().subtract(1, 'month')), this.getTimeStamp(moment()))
          break;
        default:
          break;
      }
    },
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
    getData(start = this.getTimeStamp(this.date[0]), end = this.getTimeStamp(this.date[1])) {
      fetchNum(start, end).then(res => {
        this.formatData(res)
      })
    }
  }
}
</script>

<template>
  <div class="app-container">
    <DataPicker :date="date" :radio="radio" @selectChange="selectChange" @dataChange="dataChange">
    </DataPicker>
    <LineChart :chart-data="onlineData" :option="option" />
  </div>
</template>

<script>
import moment from 'moment'
import { fetchNum } from '@/api/historyData'
import DataPicker from '@/components/DataPicker'
import LineChart from '@/components/LineChart'

export default {
  name: 'Online',
  components: {
    DataPicker,
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
      return moment(date).unix()
    },
    getData(start = this.getTimeStamp(this.date[0]), end = this.getTimeStamp(this.date[1])) {
      fetchNum(start, end).then(res => {
        this.formatData(res)
      })
    }
  }
}
</script>

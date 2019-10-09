<template>
  <div class="app-container">
    <el-form :inline="true">
      <el-form-item :xs="10" :sm="6" :lg="4">
        <el-radio-group v-model="radio" @change="selectChange">
          <!--<el-radio-button label="hour">{{ $t('historyData.hour')}}</el-radio-button>-->
          <!--<el-radio-button label="day">{{ $t('historyData.day')}}</el-radio-button>-->
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
    <LineChart :chart-data="bandwidthData" :option="option" />
  </div>
</template>

<script>
import moment from 'moment'
import LineChart from '@/components/LineChart'
import { formatTraffic, getTrafficNum } from '@/utils/format'
import { fetchP2PTraffic, fetchHttpTraffic } from '@/api/historyData'

/*
 已改成显示流量
 */

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
      date: [moment().startOf('day').subtract(1, 'week'), moment().startOf('day')],
      radio: 'week',
      bandwidthData: {
        p2p: [],
        http: []
      },
      option: {
        xData: [],
        unit: '',
        yName: '流量'
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
      fetchHttpTraffic(start, end).then(res => {
        this.formatHttpData(res)
        fetchP2PTraffic(start, end).then(res => {
            this.formatData(res)
        })
      })
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
    formatData(res) {
      const data = res.data.list
      this.option.xData = []
      this.bandwidthData.p2p = []
      data.forEach(item => {
        this.option.xData.push(moment(item.ts * 1000).format('MM-DD'))
        this.bandwidthData.p2p.push(getTrafficNum(item.value, this.option.unit))
      })
    },
    formatHttpData(res) {
      const data = res.data.list
      const trafficValue = [...res.data.list]
      trafficValue.sort(function(a, b) {
          return a.value - b.value
      })
      this.option.unit = this.option.unit ? this.option.unit : formatTraffic(trafficValue[(trafficValue.length - 1)].value).unit
      this.option.xData = []
      this.bandwidthData.http = []
      data.forEach(item => {
        this.option.xData.push(moment(item.ts * 1000).format('MM-DD'))
        this.bandwidthData.http.push(getTrafficNum(item.value, this.option.unit))
      })
    },
    getTimeStamp(date) {
      return moment(date).format('X')
    }
  }
}
</script>

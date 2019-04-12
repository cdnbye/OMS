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
    <LineChart :chart-data="lineChartData" :option="option" />
    <NoBindTip />
  </div>
</template>

<script>
import moment from 'moment'
import NoBindTip from '@/components/NoBindTip'
import LineChart from '@/components/LineChart'
import { fetchP2PTraffic } from '@/api/user/historyData'
import { mapGetters } from 'vuex'
import { formatTraffic } from '@/utils/format'

export default {
  name: 'Bandwidth',
  components: {
    LineChart,
    NoBindTip
  },
  data() {
    return {
      lineChartData: {
        P2P: []
      },
      date: [moment().subtract(1, 'hour'), moment()],
      radio: 'hour',
      p2pData: [],
      option: {
        xData: [],
        unit: '%',
        yName: 'P2P'
      }
    }
  },
  computed: {
    ...mapGetters([
      'userDomain',
      'currentDomain'
    ])
  },
  mounted() {
    if(this.currentDomain.id) {
      this.getData()
    }
  },
  methods: {
    dataChange(date) {
      this.getData(this.getTimeStamp(date[0]), this.getTimeStamp(date[1]))
    },
    getData(start = this.getTimeStamp(this.date[0]), end = this.getTimeStamp(this.date[1])) {
      this.p2pData = []
      this.option.xData = []
      this.lineChartData.P2P = []
      fetchP2PTraffic(this.currentDomain.uid, this.currentDomain.id, start, end).then(res => {
        res.data.list.forEach((item, index) => {
          this.option.xData.push(moment(item.ts * 1000).format('MM-DD HH:mm'))
          const traffic = formatTraffic(item.value)
          this.option.unit = traffic.unit
          this.lineChartData.P2P.push(traffic.num)
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
          this.getData(this.getTimeStamp(moment().subtract(1, 'week')), this.getTimeStamp(moment()))
          break;
        case 'month':
          this.getData(this.getTimeStamp(moment().subtract(1, 'month')), this.getTimeStamp(moment()))
          break;
        default:
          break;
      }
    },
    getTimeStamp(date) {
      return moment(date).format('X')
    }
  }
}
</script>

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
    <LineChart :chart-data="lineChartData" :option="option" />
    <NoBindTip />
  </div>
</template>

<script>
import moment from 'moment'
import NoBindTip from '@/components/NoBindTip'
import LineChart from '@/components/LineChart'
import { fetchP2PTraffic, fetchHttpTraffic } from '@/api/user/historyData'
import { mapGetters } from 'vuex'
import { formatTraffic, getTrafficNum } from '@/utils/format'

export default {
  name: 'Bandwidth',
  components: {
    LineChart,
    NoBindTip
  },
  data() {
    return {
      lineChartData: {
        P2P: [],
        HTTP: [],
      },
      date: [moment().startOf('day').subtract(1, 'week'), moment().startOf('day')],
      radio: 'week',
      // p2pData: [],
      option: {
        xData: [],
        unit: '%',
        yName: 'Traffic'
      }
    }
  },
  computed: {
    ...mapGetters([
      'userDomain',
      'currentDomain'
    ]),
    displayDay() {
        return this.radio === 'week' || this.radio === 'month'
    }
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
      // this.p2pData = []
      this.option.xData = []
      this.lineChartData.P2P = []
      this.lineChartData.HTTP = []
      let gran = 5    // 显示粒度5分钟
      if (this.displayDay) {
          gran = 1440     // 显示粒度一天
      }
      fetchHttpTraffic(this.currentDomain.uid, this.currentDomain.id, start, end, gran).then(res => {
          const trafficValue = [...res.data.list]
          trafficValue.sort(function(a, b) {
              return b.value - a.value > 0
          })
          this.option.unit = formatTraffic(trafficValue[(trafficValue.length - 1)].value).unit
          fetchP2PTraffic(this.currentDomain.uid, this.currentDomain.id, start, end, gran).then(res => {
              res.data.list.forEach((item, index) => {
                  this.lineChartData.P2P.push(getTrafficNum(item.value, this.option.unit))
              })

          })
          res.data.list.forEach((item, index) => {
              if (this.displayDay) {
                  this.option.xData.push(moment(item.ts * 1000).format('MM-DD'))
              } else {
                  this.option.xData.push(moment(item.ts * 1000).format('MM-DD HH:mm'))
              }
              this.lineChartData.HTTP.push(getTrafficNum(item.value, this.option.unit))
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
    getTimeStamp(date) {
      return moment(date).format('X')
    }
  }
}
</script>

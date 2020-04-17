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
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date">
        </el-date-picker>
      </el-form-item>
    </el-form>
    <LineChart :chart-data="lineChartData" :option="option" />
    <NoBindTip />
    <el-button type="primary" style="float: left">
      <json-excel
              :fetch = "dataForExcel"
              type    = "csv"
              :name    = "excelName">
        Export Excel
      </json-excel>
    </el-button>
  </div>
</template>

<script>
import moment from 'moment'
import NoBindTip from '@/components/NoBindTip'
import LineChart from '@/components/LineChart'
import { fetchP2PTraffic, fetchHttpTraffic } from '@/api/user/historyData'
import { mapGetters } from 'vuex'
import { formatTraffic, getTrafficNum } from '@/utils/format'
import JsonExcel from 'vue-json-excel'

export default {
  name: 'Bandwidth',
  components: {
    LineChart,
    NoBindTip,
    JsonExcel
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
      },
      excelName: '',
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
        if (!date) return
        console.warn(`date[0] ${date[0]} date[1] ${date[1]}`)
        this.date[0] = date[0]
        this.date[1] = date[1]
      this.getData(this.getTimeStamp(this.date[0]), this.getTimeStamp(this.date[1]))
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
          let trafficValue = [...res.data.list].sort((a, b) => {
              return a.value - b.value
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
        this.date[1] = moment()
      switch (val) {
        case 'hour':
            this.date[0] = moment().subtract(1, 'hour')
            // this.date[1] = moment()
          this.getData(this.getTimeStamp(this.date[0]), this.getTimeStamp(this.date[1]))
          break;
        case 'day':
            this.date[0] = moment().subtract(1, 'day')
            // this.date[1] = moment()
          this.getData(this.getTimeStamp(this.date[0]), this.getTimeStamp(this.date[1]))
          break;
        case 'week':
            this.date[0] = moment().startOf('day').subtract(1, 'week')
            // this.date[1] = moment().startOf('day')
          this.getData(this.getTimeStamp(this.date[0]), this.getTimeStamp(this.date[1]))
          break;
        case 'month':
            this.date[0] = moment().startOf('day').subtract(1, 'month')
            // this.date[1] = moment().startOf('day')
          this.getData(this.getTimeStamp(this.date[0]), this.getTimeStamp(this.date[1]))
          break;
        default:
          break;
      }
    },
    getTimeStamp(date) {
      return moment(date).format('X')
    },

    async dataForExcel() {
        let res = await fetchP2PTraffic(this.currentDomain.uid, this.currentDomain.id, this.getTimeStamp(this.date[0]), this.getTimeStamp(this.date[1]), 1440)
        const data = res.data.list
        let peakArr = []
        let sum = 0;
        let column = "Traffic("+this.option.unit+")"
        data.forEach((item, index) => {
            let day = moment(item.ts * 1000).format('MM-DD')
            let peak = getTrafficNum(item.value, this.option.unit)
            sum += parseFloat(peak)
            peakArr.push({"Date":day, [column]:peak})
        })
        console.warn(peakArr)
        let average = (sum/peakArr.length).toFixed(2)
        peakArr.push({"Date":"Avg", [column]:average})
        this.excelName = `${this.currentDomain.domain} Traffic Statistics.csv`
        return peakArr
    }
  }
}
</script>

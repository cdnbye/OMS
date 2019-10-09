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
    <NoBindTip />
    <el-button type="primary" style="float: left">
      <json-excel
              :fetch = "dataForExcel"
              type    = "csv"
              name    = "日峰月均.xls">
        导出上个月日峰月均Excel
      </json-excel>
    </el-button>
  </div>
</template>

<script>
import moment from 'moment'
import { fetchNum } from '@/api/user/historyData'
import LineChart from '@/components/LineChart'
import NoBindTip from '@/components/NoBindTip'
import { mapGetters } from 'vuex'
import JsonExcel from 'vue-json-excel'

export default {
  name: 'Online',
  components: {
    LineChart,
    NoBindTip,
    JsonExcel,
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
      },
      // dataForExcel: [],
    }
  },
  computed: {
    ...mapGetters([
      'currentDomain'
    ]),
  },
  mounted() {
    if(this.currentDomain.id) {
      this.getData()
    }
    // this.test();
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
      fetchNum(this.currentDomain.uid, this.currentDomain.id, start, end).then(res => {
        this.formatData(res)
      })
    },
    async dataForExcel() {
        let nowdays = new Date();
        let year = nowdays.getFullYear();
        let month = nowdays.getMonth();
        let lastMonth, lastYear;
        if(month === 0){
            lastMonth = 12
            lastYear = year-1;
        } else {
            lastMonth = month-1
            lastYear = year;
        }
        // 获取上个月第一天
        var firstdate = new Date(lastYear, lastMonth, 1);
        // 获取本月第一天
        var enddate = new Date(year, month, 1);
        let res = await fetchNum(this.currentDomain.uid, this.currentDomain.id, this.getTimeStamp(firstdate), this.getTimeStamp(enddate)-1)
        const data = res.data.list
        let peakMap = new Map()
        data.forEach(item => {
            // 算出每天的峰值
            let day = moment(item.ts * 1000).format('MM-DD')
            let peak = peakMap.get(day)
            if (!peak || peak < item.value) {
                peakMap.set(day, item.value)
            }
        })

        let peakArr = []
        let sum = 0;
        for (let [day, peak] of peakMap.entries()) {
            peakArr.push({"日期":day, "日峰值":peak})
            sum += peak
        }
        // console.warn(peakArr)
        let average = Math.round(sum/peakArr.length)
        peakArr.push({"日期":"平均值", "日峰值":average})
        return peakArr
    }
  }
}
</script>

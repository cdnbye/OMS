<template>
  <div class="app-container">
<!--    <el-tag style="font-weight: bold;; font-size: medium; margin: 0px 10px; float: left"-->
<!--            effect="dark"-->
<!--            :type="currentDomain.domain ? 'success' : 'danger'">-->
<!--      <span style="color: #99a9bf">{{$t('domainTable.current')}}</span>{{ currentDomain.domain ? currentDomain.domain : $t('domainTable.none') }}-->
<!--    </el-tag>-->
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
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date">
        </el-date-picker>
      </el-form-item>
    </el-form>
    <LineChart :chart-data="onlineData" :option="option" />
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
        yName: 'online',
      },
      excelName: '',
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
  watch: {
    currentDomain: function () {
      this.getData()
    }
  },
  methods: {
    dataChange(date) {
        // console.warn(`date[0] ${date[0]} date[1] ${date[1]}`)
        if (!date) return
        this.date[0] = date[0]
        this.date[1] = date[1]
      this.getData(this.getTimeStamp(this.date[0]), this.getTimeStamp(this.date[1]))
    },
    selectChange(val) {
      this.date[1] = moment()
      switch (val) {
        case 'hour':
            this.date[0] = moment().subtract(1, 'hour')
          this.getData(this.getTimeStamp(this.date[0]), this.getTimeStamp(this.date[1]))
          break;
        case 'day':
            this.date[0] = moment().subtract(1, 'day')
          this.getData(this.getTimeStamp(this.date[0]), this.getTimeStamp(this.date[1]))
          break;
        case 'week':
            this.date[0] = moment().subtract(1, 'week')
          this.getData(this.getTimeStamp(this.date[0]), this.getTimeStamp(this.date[1]))
          break;
        case 'month':
            this.date[0] = moment().subtract(1, 'month')
          this.getData(this.getTimeStamp(this.date[0]), this.getTimeStamp(this.date[1]))
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
        // console.warn(`date[0] ${this.date[0]} date[1] ${this.date[1]}`)
        let res = await fetchNum(this.currentDomain.uid, this.currentDomain.id, this.getTimeStamp(this.date[0]), this.getTimeStamp(this.date[1]))
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
        let realDays = 0;          // 有人数在线的天数
        for (let [day, peak] of peakMap.entries()) {
            peakArr.push({"Date":day, "Value":peak})
            sum += peak
            if (peak !== 0) {
                realDays ++;
            }
        }
        let average = 0
        if (realDays > 0) {
            average = Math.round(sum/realDays)
        }
        peakArr.push({"Date":"Avg", "Value":average})
        this.excelName = `Online Viewers Statistics.csv`
        return peakArr
    }
  }
}
</script>

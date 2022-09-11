<template>
  <div class="app-container">
    <DataPicker :date="date" :radio="radio" :hour="false" :day="false" @selectChange="selectChange" @dataChange="dataChange">
    </DataPicker>
    <LineChart :chart-data="lineChartData" :option="option" />
    <NoBindTip />
  </div>
</template>

<script>
import moment from 'moment'
import DataPicker from '@/components/DataPicker'
import NoBindTip from '@/components/NoBindTip'
import LineChart from '@/components/LineChart'
import { fetchRebufferRatio } from '@/api/user/historyData'
import { mapGetters } from 'vuex'

export default {
  name: 'Rebuffer',
  components: {
    DataPicker,
    LineChart,
    NoBindTip,
  },
  data() {
    return {
      lineChartData: {
        rebuffer: [],
      },
      date: [moment().startOf('day').subtract(1, 'week'), moment().startOf('day')],
      radio: 'week',
      option: {
        xData: [],
        unit: '%',
        yName: 'Ratio'
      },
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
  watch: {
    currentDomain: function () {
      this.getData()
    }
  },
  mounted() {
    this.$store.dispatch('toggleSwitchDomain', true)
    if(this.currentDomain.id) {
      this.getData()
    }
  },
  beforeDestroy() {
    this.$store.dispatch('toggleSwitchDomain', false)
  },
  methods: {
    dataChange(date) {
      if (!date) return
      this.date[0] = date[0]
      this.date[1] = date[1]
      this.getData(this.getTimeStamp(this.date[0]), this.getTimeStamp(this.date[1]))
    },
    getData(start = this.getTimeStamp(this.date[0]), end = this.getTimeStamp(this.date[1])) {
      this.option.xData = []
      this.lineChartData.rebuffer = []
      let gran = 5    // 显示粒度5分钟
      if (this.displayDay) {
        gran = 1440     // 显示粒度一天
      }
      fetchRebufferRatio(this.currentDomain.uid, this.currentDomain.id, start, end, gran).then(res => {
        res.data.list.forEach((item, index) => {
          this.option.xData.push(moment(item.ts * 1000).format('MM-DD'))
          this.lineChartData.rebuffer.push(parseFloat((item.value).toFixed(4))*100)
        })

      })
    },
    selectChange(val) {
      this.date[1] = moment()
      switch (val) {
        case 'week':
          this.date[0] = moment().startOf('day').subtract(1, 'week')
          this.getData(this.getTimeStamp(this.date[0]), this.getTimeStamp(this.date[1]))
          break;
        case 'month':
          this.date[0] = moment().startOf('day').subtract(1, 'month')
          this.getData(this.getTimeStamp(this.date[0]), this.getTimeStamp(this.date[1]))
          break;
        default:
          break;
      }
    },
    getTimeStamp(date) {
      return moment(date).unix()
    },
  }
}
</script>

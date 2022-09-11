<template>
  <div class="app-container">
    <DataPicker :date="date" :radio="radio" :hour="false" :day="false" @selectChange="selectChange" @dataChange="dataChange">
    </DataPicker>
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
import DataPicker from '@/components/DataPicker'
import NoBindTip from '@/components/NoBindTip'
import LineChart from '@/components/LineChart'
import { fetchP2PTraffic, fetchHttpTraffic } from '@/api/user/historyData'
import { mapGetters } from 'vuex'
import { formatTraffic, getTrafficNum } from '@/utils/format'
import JsonExcel from 'vue-json-excel'

export default {
  name: 'Traffic',
  components: {
    DataPicker,
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
              this.option.xData.push(moment(item.ts * 1000).format('MM-DD'))
              this.lineChartData.HTTP.push(getTrafficNum(item.value, this.option.unit))
          })

      })
    },
    selectChange(val) {
        this.date[1] = moment()
      switch (val) {
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
      return moment(date).unix()
    },

    async dataForExcel() {
        const resP2p = await fetchP2PTraffic(this.currentDomain.uid, this.currentDomain.id, this.getTimeStamp(this.date[0]), this.getTimeStamp(this.date[1]), 1440)
        const resHttp = await fetchHttpTraffic(this.currentDomain.uid, this.currentDomain.id, this.getTimeStamp(this.date[0]), this.getTimeStamp(this.date[1]), 1440)
        const dataP2p = resP2p.data.list
        const dataHttp = resHttp.data.list
        const dataAll = [];
        dataP2p.forEach((item, index) => {
            dataAll.push({
                ts: item.ts,
                p2p: item.value,
                http: dataHttp[index].value,
            })
        })

        let peakArr = []
        let sumP2p = 0;
        let sumHttp = 0;
        const columnP2p = "P2P("+this.option.unit+")"
        const columnHttp = "HTTP("+this.option.unit+")"
        dataAll.forEach((item) => {
            let day = moment(item.ts * 1000).format('MM-DD')
            let peakP2p = getTrafficNum(item.p2p, this.option.unit)
            let peakHttp = getTrafficNum(item.http, this.option.unit)
            sumP2p += parseFloat(peakP2p)
            sumHttp += parseFloat(peakHttp)
            peakArr.push({"Date":day, [columnP2p]:peakP2p, [columnHttp]:peakHttp})
        })

        // console.warn(peakArr)
        const averageP2p = (sumP2p/peakArr.length).toFixed(2)
        const averageHttp = (sumHttp/peakArr.length).toFixed(2)
        peakArr.push({"Date":"Avg", [columnP2p]:averageP2p, [columnHttp]:averageHttp})
        this.excelName = `${this.currentDomain.domain} Traffic Statistics.csv`
        return peakArr
    }
  }
}
</script>

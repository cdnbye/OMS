<template>
  <div>
    <h1>Test</h1>
    <LineChart :chart-data="lineChartData" />
  </div>
</template>

<script>
import moment from 'moment'
import { fetchP2PTraffic, fetchP2PBandwidth } from '@/api/historyData'
import LineChart from './components/LineChart'

const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}

export default {
  name: 'Test',
  components: {
    LineChart
  },
  data() {
    return {
      lineChartData: lineChartData.newVisitis
    }
  },
  mounted() {
    this.getP2PTraffic(moment().startOf('month').format('X'), moment().format('X'), 5)
    this.getP2PBandwidth()
  },
  methods: {
    getP2PTraffic(start, end, gran) {
      fetchP2PTraffic(start, end, gran)
    },
    getP2PBandwidth() {
      fetchP2PBandwidth(2018, 9).then(res => {
        console.log(res)
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<template>
  <china-map :chartData="chartData" />
</template>

<script>
import ChinaMap from '@/components/CityMap'
import { fetchCityNum } from '@/api/historyData'

export default {
  name: 'ChinaDis',
  data() {
    return {
      chartData: []
    }
  },
  components: {
    ChinaMap
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      fetchCityNum().then(res => {
        if(res.data) {
          console.log(res.data)
          this.chartData = res.data
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

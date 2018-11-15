<template>
  <china-map :chartData="cityData" :provinceData="provinceData" />
</template>

<script>
import ChinaMap from '@/components/CityMap'
import { fetchLiveData } from '@/api/liveData'

export default {
  name: 'ChinaDis',
  data() {
    return {
      cityData: [],
      provinceData: []
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
      fetchLiveData('city').then(res => {
        if(res.data) {
          this.cityData = res.data
        }
      }).catch(err => {
        console.log(err)
      })

      fetchLiveData('province').then(res => {
        if(res.data) {
          this.provinceData = res.data
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

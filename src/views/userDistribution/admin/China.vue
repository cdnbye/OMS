<template>
  <china-map :chartData="cityData" :provinceData="provinceData" :total="total" />
</template>

<script>
import ChinaMap from '@/components/CityMap'
import { fetchLiveData } from '@/api/liveData'

export default {
  name: 'ChinaDis',
  data() {
    return {
      cityData: [],
      provinceData: [],
      total: 0
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
      fetchLiveData('city', {country: 'china'}).then(res => {
        const data = res.data
        if(data) {
          this.cityData = data.data
        }
      }).catch(err => {
        console.log(err)
      })

      fetchLiveData('province', {country: 'china'}).then(res => {
        const data = res.data
        if(data) {
          this.provinceData = data.data
          this.total = data.total
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

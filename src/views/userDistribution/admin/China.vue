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

      fetchLiveData('country').then(res => {
        if(res.data) {
          res.data.forEach(item => {
            if(item.name === 'China') {
              this.total = item.value
            }
          })
        }
      })
    }
  }
}
</script>

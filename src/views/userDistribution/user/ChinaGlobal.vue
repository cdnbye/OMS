<template>
  <div>
    <china-map :chartData="cityData" :provinceData="provinceData" :total="total" />
  </div>
</template>

<script>
import { getID } from '@/utils/auth'
import ChinaMap from '@/components/CityMap'
import { fetchGeoDis } from '@/api/user/liveData'

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
    ChinaMap,
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      fetchGeoDis(getID(), 0, 'city', 'china').then(res => {
        const data = res.data
        if(data) {
          // console.warn(res.data.filter(item => item.value > 0))
          this.cityData = data.data.filter(item => item.value > 0)
        }
      }).catch(err => {
        console.log(err)
      })

      fetchGeoDis(getID(), 0, 'province', 'china').then(res => {
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

<template>
  <world-map :countryData="countryData" :total="total"/>
</template>

<script>
import WorldMap from '@/components/WorldMap'
import { fetchLiveData } from '@/api/liveData'

export default {
  name: 'WorldDis',
  data() {
    return {
      countryData: [],
      total: 0,
    }
  },
  components: {
    WorldMap
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      fetchLiveData('country').then(res => {
        const data = res.data
        if(data) {
          this.total += data.total
          this.countryData = data.data
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

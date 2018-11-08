<template>
  <world-map :countryData="countryData" />
</template>

<script>
import WorldMap from '@/components/WorldMap'
import { fetchCountryNum } from '@/api/liveData'

export default {
  name: 'ChinaDis',
  data() {
    return {
      countryData: []
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
      fetchCountryNum().then(res => {
        if(res.data) {
          this.countryData = res.data
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

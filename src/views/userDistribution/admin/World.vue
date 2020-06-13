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
        if(res.data) {
          res.data.forEach(item => {
              this.total += item.value
          })
          this.countryData = res.data
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

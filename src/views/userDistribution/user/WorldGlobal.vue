<template>
  <div>
    <world-map :countryData="countryData" :total="total"/>
  </div>
</template>

<script>
import WorldMap from '@/components/WorldMap'
import { fetchGeoDis } from '@/api/user/liveData'
import { getID } from '@/utils/auth'

export default {
  name: 'WorldDisGlobal',
  data() {
    return {
      countryData: [],
      total: 0,
    }
  },
  components: {
    WorldMap,
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      fetchGeoDis(getID(), 0, 'country').then(res => {
        const data = res.data
        if(data) {
          this.total = data.total
          this.countryData = data.data
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

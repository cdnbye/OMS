<template>
  <world-map :countryData="countryData" />
</template>

<script>
import { mapGetters } from 'vuex'
import WorldMap from '@/components/WorldMap'
import { fetchChinaDis } from '@/api/user/liveData'

export default {
  name: 'WorldDis',
  data() {
    return {
      countryData: []
    }
  },
  components: {
    WorldMap
  },
  computed: {
    ...mapGetters([
      'currentDomain'
    ])
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      fetchChinaDis(this.currentDomain.uid, this.currentDomain.id, 'country').then(res => {
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

<template>
  <div>
    <world-map :countryData="countryData" :total="total"/>
    <NoBindTip />
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import WorldMap from '@/components/WorldMap'
import NoBindTip from '@/components/NoBindTip'
import { fetchChinaDis } from '@/api/user/liveData'

export default {
  name: 'WorldDis',
  data() {
    return {
      countryData: [],
      total: 0,
    }
  },
  components: {
    WorldMap,
    NoBindTip
  },
  computed: {
    ...mapGetters([
      'currentDomain'
    ])
  },
  mounted() {
    if(this.currentDomain.id) {
      this.fetchData()
    }
  },
  methods: {
    fetchData() {
      fetchChinaDis(this.currentDomain.uid, this.currentDomain.id, 'country').then(res => {
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

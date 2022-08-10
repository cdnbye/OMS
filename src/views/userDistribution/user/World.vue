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
import { fetchGeoDis } from '@/api/user/liveData'

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
  watch: {
    currentDomain: function () {
      this.fetchData()
    }
  },
  mounted() {
    this.$store.dispatch('toggleSwitchDomain', true)
    if(this.currentDomain.id) {
      this.fetchData()
    }
  },
  beforeDestroy() {
    this.$store.dispatch('toggleSwitchDomain', false)
  },
  methods: {
    fetchData() {
      fetchGeoDis(this.currentDomain.uid, this.currentDomain.id, 'country').then(res => {
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

<template>
  <div>
    <world-map :countryData="countryData" />
    <NoBindTip :tipVisible="tipVisible" :handleClose="handleCloseTip" />
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
      tipVisible: false,
      countryData: []
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
    } else {
      this.tipVisible = true
    }
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
    },
    handleCloseTip() {
      this.tipVisible = false
    }
  }
}
</script>

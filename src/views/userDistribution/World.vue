<template>
  <div class="app-container" v-loading="loading">
    <component :is="currentRole" :countryData="countryData" :total="total" />
  </div>

</template>

<script>
import { mapGetters } from 'vuex'
import WorldMap from '@/components/WorldMap/index.vue'
import { fetchGeoDis } from '@/api/user/liveData'
import { fetchLiveData } from '@/api/liveData'
import { getID } from '@/utils/auth'

export default {
  name: 'World',
  components: { WorldMap },
  data() {
    return {
      currentRole: '',
      loading: false,
      countryData: [],
      total: 0,
    }
  },
  mounted() {
    if (!this.$route.meta.global) {
      this.$store.dispatch('toggleSwitchDomain', true)
    }
    this.fetchData()
  },
  beforeDestroy() {
    this.$store.dispatch('toggleSwitchDomain', false)
  },
  watch: {
    currentDomain: function () {
      this.currentRole = ''
      this.countryData = []
      this.total = 0
      this.fetchData()
    }
  },
  computed: {
    ...mapGetters([
      'roles',
      'currentDomain'
    ])
  },
  methods: {
    fetchData() {
      this.loading = true
      if (!this.roles.includes('admin')) {
        fetchGeoDis(getID(), this.$route.meta.global ? 0 :this.currentDomain.id, 'country').then(res => {
          const data = res.data
          if(data) {
            this.total = data.total
            if (data.data) {
              this.countryData = data.data
            }
            this.loading = false
            this.currentRole = 'WorldMap'
          }
        }).catch(err => {
          console.log(err)
          this.loading = false
        })
      } else {
        fetchLiveData('country').then(res => {
          const data = res.data
          if(data) {
            this.total = data.total
            this.countryData = data.data
            this.loading = false
            this.currentRole = 'WorldMap'
          }
        }).catch(err => {
          console.log(err)
          this.loading = false
        })
      }
    }
  }
}
</script>

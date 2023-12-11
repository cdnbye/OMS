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
      loading: true,
      countryData: [],
      total: 0,
    }
  },
  mounted() {
    this.fetchData()
  },
  computed: {
    ...mapGetters([
      'roles',
      'currentDomain'
    ])
  },
  methods: {
    fetchData() {
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

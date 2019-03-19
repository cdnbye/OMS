<template>
  <china-map :chartData="cityData" :provinceData="provinceData" :total="total" />
</template>

<script>
import { mapGetters } from 'vuex'
import ChinaMap from '@/components/CityMap'
import { fetchChinaDis } from '@/api/user/liveData'

export default {
  name: 'ChinaDis',
  data() {
    return {
      cityData: [],
      provinceData: [],
      total: 0
    }
  },
  components: {
    ChinaMap
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
      fetchChinaDis(this.currentDomain.uid, this.currentDomain.id, 'city').then(res => {
        if(res.data) {
          this.cityData = res.data
        }
      }).catch(err => {
        console.log(err)
      })

      fetchChinaDis(this.currentDomain.uid, this.currentDomain.id, 'province').then(res => {
        if(res.data) {
          this.provinceData = res.data
        }
      }).catch(err => {
        console.log(err)
      })

      fetchChinaDis(this.currentDomain.uid, this.currentDomain.id, 'country').then(res => {
        if(res.data) {
          res.data.forEach(item => {
            if(item.name === 'China') {
              this.total = item.value
            }
          })
        }
      })
    }
  }
}
</script>

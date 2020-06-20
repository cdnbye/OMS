<template>
  <div>
    <china-map :chartData="cityData" :provinceData="provinceData" :total="total" />
    <NoBindTip />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ChinaMap from '@/components/CityMap'
import NoBindTip from '@/components/NoBindTip'
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
    ChinaMap,
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
      fetchChinaDis(this.currentDomain.uid, this.currentDomain.id, 'city', 'china').then(res => {
        const data = res.data
        if(data) {
            // console.warn(res.data.filter(item => item.value > 0))
          this.cityData = data.data.filter(item => item.value > 0)
        }
      }).catch(err => {
        console.log(err)
      })

      fetchChinaDis(this.currentDomain.uid, this.currentDomain.id, 'province', 'china').then(res => {
        const data = res.data
        if(data) {
          this.provinceData = data.data
          this.total = data.total
        }
      }).catch(err => {
        console.log(err)
      })

      // fetchChinaDis(this.currentDomain.uid, this.currentDomain.id, 'country', 'china').then(res => {
      //   if(res.data) {
      //     res.data.forEach(item => {
      //       if(item.name === 'China') {
      //         this.total = item.value      // TODO 优化
      //       }
      //     })
      //   }
      // })
    }
  }
}
</script>

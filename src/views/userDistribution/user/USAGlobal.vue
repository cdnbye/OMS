<template>
  <div>
    <u-s-a-map :provinceData="provinceData" :total="total" />
  </div>
</template>

<script>
import { getID } from '@/utils/auth'
import USAMap from '@/components/USAMap'
import { fetchGeoDis } from '@/api/user/liveData'

export default {
  name: 'USADisGlobal',
  data() {
    return {
      provinceData: [],
      total: 0
    }
  },
  components: {
    USAMap,
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      fetchGeoDis(getID(), 0, 'province', 'usa').then(res => {
        const data = res.data
        if(data) {
          this.provinceData = data.data
          this.total = data.total
        }
      }).catch(err => {
        console.log(err)
      })

    }
  }
}
</script>

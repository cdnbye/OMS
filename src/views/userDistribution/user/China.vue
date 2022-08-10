<template>
  <div>
<!--    <el-tag style="font-weight: bold;; font-size: medium; margin: 0px 10px; float: left"-->
<!--            effect="dark"-->
<!--            :type="currentDomain.domain ? 'success' : 'danger'">-->
<!--      <span style="color: #99a9bf">{{$t('domainTable.current')}}</span>{{ currentDomain.domain ? currentDomain.domain : $t('domainTable.none') }}-->
<!--    </el-tag>-->
    <china-map :chartData="cityData" :provinceData="provinceData" :total="total" />
    <NoBindTip />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ChinaMap from '@/components/CityMap'
import NoBindTip from '@/components/NoBindTip'
import { fetchGeoDis } from '@/api/user/liveData'

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
      fetchGeoDis(this.currentDomain.uid, this.currentDomain.id, 'city', 'china').then(res => {
        const data = res.data
        if(data) {
            // console.warn(res.data.filter(item => item.value > 0))
          this.cityData = data.data.filter(item => item.value > 0)
        }
      }).catch(err => {
        console.log(err)
      })

      fetchGeoDis(this.currentDomain.uid, this.currentDomain.id, 'province', 'china').then(res => {
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

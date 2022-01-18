<template>
  <div>
<!--    <el-tag style="font-weight: bold;; font-size: medium; margin: 0px 10px; float: left"-->
<!--            effect="dark"-->
<!--            :type="currentDomain.domain ? 'success' : 'danger'">-->
<!--      <span style="color: #99a9bf">{{$t('domainTable.current')}}</span>{{ currentDomain.domain ? currentDomain.domain : $t('domainTable.none') }}-->
<!--    </el-tag>-->
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
  watch: {
    currentDomain: function () {
      this.fetchData()
    }
  },
  mounted() {
    if(this.currentDomain.id) {
      this.fetchData()
    }
  },
  methods: {
    fetchData() {
      fetchChinaDis(this.currentDomain.uid, this.currentDomain.id, 'country').then(res => {
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

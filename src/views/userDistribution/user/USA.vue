<template>
    <div>
<!--        <el-tag style="font-weight: bold;; font-size: medium; margin: 0px 10px; float: left"-->
<!--                effect="dark"-->
<!--                :type="currentDomain.domain ? 'success' : 'danger'">-->
<!--            <span style="color: #99a9bf">{{$t('domainTable.current')}}</span>{{ currentDomain.domain ? currentDomain.domain : $t('domainTable.none') }}-->
<!--        </el-tag>-->
        <u-s-a-map :provinceData="provinceData" :total="total" />
        <NoBindTip />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NoBindTip from '@/components/NoBindTip'
import USAMap from '@/components/USAMap'
import { fetchGeoDis } from '@/api/user/liveData'

export default {
    name: 'USADis',
    data() {
        return {
            provinceData: [],
            total: 0
        }
    },
    components: {
        USAMap,
        NoBindTip
    },
    computed: {
        ...mapGetters([
            'currentDomain'
        ])
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
    watch: {
      currentDomain: function () {
        this.fetchData()
      }
    },
    methods: {
        fetchData() {
          fetchGeoDis(this.currentDomain.uid, this.currentDomain.id, 'province', 'usa').then(res => {
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

<template>
  <div class="dashboard-realtime-container">
    <el-alert
        :title="$t('domainTable.title')"
        :description="$t('dashboard.descPerApp')"
        type="info"
        show-icon>
    </el-alert>
    <LiveTime :statis="statis"></LiveTime>
    <Dis :data="disData"/>
    <NoBindTip />
  </div>

</template>

<script>
import store from '@/store'
import { mapGetters } from 'vuex'
import { fetchGlobalData, fetchDisData } from '@/api/user/liveData'
import { formatTraffic, formatPieData } from '@/utils/format'
import NoBindTip from '@/components/NoBindTip'
import Dis from './Distribution'
import LiveTime from './LiveTime'

let timer = undefined

export default {
  name: 'liveData',
  components: {
    Dis,
    NoBindTip,
    LiveTime,
  },
  data() {
    return {
      remainTrafficFlag: true,
      statis: {
        whiteList: false,
        type: {
          product_type: 0,
          time: ''
        },
        online: 0,
        traffic_p2p: {
          num: 0,
          unit: 'KB'
        },
        traffic_http: {
          num: 0,
          unit: 'KB'
        },
        traffic_share: {
          num: 0,
          unit: 'KB'
        },
        frequency_day: 0,
        num_max: 0,
        rebuffer_ratio: -1,
        flow: {
          remain: 0,
          daily_remain: 0,
          totalRemain: 0,
          free: {
            num: 0,
            unit: 'KB'
          },
          utc: 0,
        },
        clock: null,
        traffic_p2p_day: 0,
        traffic_http_day: 0,
      },
      disData: {
        versionData: [],
        tagData: [],
        deviceData: [],
        liveData: [],
        netTypeData: [],
        // ispData: [],
        natTypeData:[],
      }
    }
  },
  computed: {
    ...mapGetters([
      'currentDomain',
      'device',
      'language'
    ])
  },
  watch: {
    currentDomain: function () {
      if (!this.$route.params.hostId) {
        clearInterval(timer)
        this.getUserDomain()
      }

    }
  },
  mounted() {
    this.$store.dispatch('toggleSwitchDomain', true)
    // console.warn(`hostId ${this.$route.params.hostId}`)
    const { params } = this.$route
    const domainInfo = params.domainInfo;
    if(domainInfo && domainInfo.id && domainInfo.uid) {
      this.loopGetData(domainInfo.uid, domainInfo.id, params.hostId)
      this.getDisData(domainInfo.uid, domainInfo.id, params.hostId)
      store.dispatch('setCurrentDomain', domainInfo)
    } else {
      this.getUserDomain()
    }
  },
  beforeDestroy() {
    clearInterval(timer)
    this.$store.dispatch('toggleSwitchDomain', false)
  },
  methods: {
    formatTraffic,
    getData(uid, id, hostId) {
      fetchGlobalData(uid, id, hostId)
        .then(res => {
          const { data } = res
          this.statis.online = data.num_rt
          this.statis.traffic_p2p_day = data.traffic_p2p_day
          this.statis.traffic_http_day = data.traffic_http_day
          this.statis.traffic_p2p = formatTraffic(data.traffic_p2p_day)
          this.statis.traffic_http = formatTraffic(data.traffic_http_day)
          this.statis.traffic_share = formatTraffic(data.traffic_share_day)
          this.statis.frequency_day = data.api_frequency_day
          if (data.total_rebuffers !== 0 && data.total_media_requests !== 0) {
            this.statis.rebuffer_ratio = data.total_rebuffers/data.total_media_requests
          } else {
            this.statis.rebuffer_ratio = -1
          }
          this.statis.num_max = data.num_max
          this.statis.flow.remain = data.flow.remain
          this.statis.flow.daily_remain = data.flow.daily_remain
          this.statis.flow.totalRemain = data.flow.daily_remain + data.flow.remain
          this.statis.flow.free = formatTraffic(data.flow.free)
          this.statis.flow.utc = data.flow.utc
          this.statis.whiteList = data.whitelist
          this.statis.type.product_type = data.flow.product_type
          this.statis.type.time = data.flow.duetime
          this.statis.clock = data.clock

          // 如果剩余流量为0，则提醒用户购买
          if(data.flow.free === 0 && data.flow.remain === 0 && data.flow.daily_remain === 0) {
            if(this.remainTrafficFlag && !data.whitelist) {
              this.$messageBox.confirm(this.$t('dashboard.trafficUseOut'), {
                distinguishCancelAndClose: true,
                confirmButtonText: this.$t('package.buyFlow'),
                cancelButtonText: this.$t('package.buyMonthly')
              })
                .then(() => {
                  this.$router.push('/shopping/package')
                })
                .catch(action => {
                   action === 'cancel'
                   ? this.$router.push('/shopping/monthly_package')
                   : console.log('-')
                })
              this.remainTrafficFlag = false
            }
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    getDisData(uid, id, hostID) {
        // if (id < 0) return
        fetchDisData(uid, id, 'version', hostID).then(res => {
          const data = res.data.data
          if(data) {
            this.disData.versionData = formatPieData(data)
          } else {
              this.disData.versionData = [];
          }
        })
        fetchDisData(uid, id, 'tag', hostID).then(res => {
          const data = res.data.data
          if(data) {
            this.disData.tagData = formatPieData(data)
          } else {
              this.disData.tagData = [];
          }
        })
        fetchDisData(uid, id, 'device', hostID).then(res => {
          const data = res.data.data
          if(data) {
            this.disData.deviceData = formatPieData(data)
          } else {
              this.disData.deviceData = [];
          }
        })
        fetchDisData(uid, id, 'live', hostID).then(res => {
          const data = res.data.data
          if(data) {
            this.disData.liveData = formatPieData(data)
          } else {
              this.disData.liveData = [];
          }
        })
        fetchDisData(uid, id, 'netType', hostID).then(res => {
          const data = res.data.data
          if(data) {
            this.disData.netTypeData = formatPieData(data)
          } else {
              this.disData.netTypeData = [];
          }
        })
        // fetchDisData(uid, id, 'isp', hostID, this.language === 'en'?'en':'').then(res => {
        //   const data = res.data.data
        //   if(data) {
        //       this.disData.ispData = formatPieData(data)
        //   } else {
        //       this.disData.ispData = [];
        //   }
        // })
        fetchDisData(uid, id, 'nat', hostID).then(res => {
          const data = res.data.data
          if(data) {
              this.disData.natTypeData = formatPieData(data)
          } else {
              this.disData.natTypeData = [];
          }
        })
    },
    loopGetData(uid, id, hostId) {
      this.getData(uid, id, hostId)
      clearInterval(timer)
      timer = setInterval(() => {
        this.getData(uid, id, hostId)
      }, 20000)
    },
    getUserDomain() {
      if(this.currentDomain.id) {
        this.loopGetData(this.currentDomain.uid, this.currentDomain.id)
        this.getDisData(this.currentDomain.uid, this.currentDomain.id)
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
.dashboard-realtime-container {
  padding: 4px 25px;
  background-color: rgb(240, 242, 245);
  min-height: calc(100vh - 84px);
}
</style>

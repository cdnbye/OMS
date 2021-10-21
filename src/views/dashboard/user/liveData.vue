<template>
  <div v-loading="checkResultLoading" :element-loading-text="$t('package.checkResultLoadingTip')">
    <el-row style="text-align: left; margin: 20px 0">

      <template v-if="showDomain">
        <el-col :xs="20" :sm="12" :lg="10">
          <SwitchDomain :finishSelect="handleSwitchDomain" />
        </el-col>
      </template>

      <el-col :xs="7" :sm="4" :lg="2">
        <el-button size="small" type="success" @click="handleCheckin" v-loading="checkinLoading"
                   style="font-size: medium;">
          {{ $t('dashboard.checkin') }}
        </el-button>
      </el-col>
    </el-row>
    <LiveTime :statis="statis" ></LiveTime>
    <Dis :data="disData"/>
    <NoBindTip />
  </div>
</template>

<script>
import store from '@/store'
import { mapGetters } from 'vuex'
import moment from 'moment'

import { fetchGlobalData, fetchDisData } from '@/api/user/liveData'
import { checkAlipayOrder, checkPaypalOrder, checkIn } from '@/api/user/package'
import { fetchUserDomain } from '@/api/userDomain'

import { formatTraffic, formatPieData, getQueryObj } from '@/utils/format'

import SwitchDomain from '@/components/SwitchDomain'
import NoBindTip from '@/components/NoBindTip'
import Dis from './Distribution'
import LiveTime from './LiveTime'

let int = undefined

export default {
  name: 'liveData',
  components: {
    Dis,
    NoBindTip,
    SwitchDomain,
    LiveTime,
  },
  data() {
    return {
      checkinLoading: false,
      checkResultLoading: false,
      remainTrafficFlag: true,

      showDomain: false,

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
        frequency_day: 0,
        num_max: 0,
        flow: {
          remain: 0,
          daily_remain: 0,
          totalRemain: 0,
          free: {
            num: 0,
            unit: 'KB'
          }
        },
        clock: null,
      },
      disData: {
        versionData: [],
        tagData: [],
        deviceData: [],
        liveData: [],
        netTypeData: [],
        ispData: [],
        natTypeData:[],
      }
    }
  },
  computed: {
    ...mapGetters([
      'currentDomain',
      'device',
      'userValidDomain',
      'language'
    ])
  },
  mounted() {
    const domainInfo = this.$route.params.domainInfo;
    if(domainInfo && domainInfo.id && domainInfo.uid) {
      this.loopGetData(domainInfo.uid, domainInfo.id, this.$route.params.hostId)
      this.getDisData(domainInfo.uid, domainInfo.id, this.$route.params.hostId)
      this.showDomain = false

      store.dispatch('setCurrentDomain', domainInfo)
    } else {
      this.getUserDomain()
      this.checkPayResult()

      this.showDomain = true
    }
  },
  beforeDestroy() {
    clearInterval(int)
  },
  methods: {
    formatTraffic,
    getData(uid, id, hostId) {
      fetchGlobalData(uid, id, hostId)
        .then(res => {
          const { data } = res
          this.statis.online = data.num_rt
          this.statis.traffic_p2p = formatTraffic(data.traffic_p2p_day)
          this.statis.traffic_http = formatTraffic(data.traffic_http_day)
          this.statis.frequency_day = data.api_frequency_day
          this.statis.num_max = data.num_max
          this.statis.flow.remain = data.flow.remain
          this.statis.flow.daily_remain = data.flow.daily_remain
          this.statis.flow.totalRemain = data.flow.daily_remain + data.flow.remain
          this.statis.flow.free = formatTraffic(data.flow.free)
          this.statis.whiteList = data.whitelist
          this.statis.type.product_type = data.flow.product_type
          this.statis.type.time = data.flow.duetime
          this.statis.clock = data.clock

          // 如果剩余流量为0，则提醒用户购买
          if(data.flow.free === 0 && data.flow.remain === 0 && data.flow.daily_remain === 0) {
            if(this.remainTrafficFlag && getQueryObj().payment === undefined && !data.whitelist) {
              this.$messageBox.confirm(this.$t('dashboard.trafficUseOut'), {
                distinguishCancelAndClose: true,
                confirmButtonText: this.$t('package.buyFlow'),
                cancelButtonText: this.$t('package.buyMonthly')
              })
                .then(() => {
                  this.$router.push('/user/package')
                })
                .catch(action => {
                   action === 'cancel'
                   ? this.$router.push('/user/monthly_package')
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
        if (id < 0) return
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
      fetchDisData(uid, id, 'isp', hostID, this.language === 'en'?'en':'').then(res => {
          const data = res.data.data
          if(data) {
              this.disData.ispData = formatPieData(data)
          } else {
              this.disData.ispData = [];
          }
      })
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
      const _this = this
      _this.getData(uid, id, hostId)
      int = setInterval(function() {
        _this.getData(uid, id, hostId)
      }, 20000)
    },
    handleCheckin() {
      if(this.currentDomain.id !== undefined) {
        this.checkinLoading = true
        checkIn(this.currentDomain.uid, {user_id: this.currentDomain.uid})
          .then(res => {
            if(res.data.repeat) {
              this.$messageBox.alert(this.$t('dashboard.haveChecked'), {
                confirmButtonText: this.$t('common.ok')
              })
            } else {
              this.$messageBox.confirm(this.$t('dashboard.checkinSuccess'), {
                type: 'success',
                confirmButtonText: this.$t('common.ok'),
                showCancelButton: false
              })
              this.getData(this.currentDomain.uid, this.currentDomain.id)
            }
            this.checkinLoading = false
          })
          .catch(err => {
            this.$messageBox.confirm(this.$t('dashboard.checkinFail'), {
              type: 'error',
              confirmButtonText: this.$t('common.ok'),
              showCancelButton: false
            })
            this.checkinLoading = false
            console.log(err)
          })
      } else {
        this.$messageBox.confirm(this.$t('dashboard.tip'), {
          confirmButtonText: this.$t('common.ok'),
          cancelButtonText: this.$t('common.cancel')
        })
          .then(() => {
            this.$router.push('/user/domain')
          })
          .catch(() => {
            return
          })
      }
    },
    handleSwitchDomain(uid, id) {
      clearInterval(int)
      this.getDisData(uid, id)
      this.loopGetData(uid, id)
    },
    checkPayResult() {
      const paramObj = getQueryObj()
      if(paramObj.payment) {
        this.checkResultLoading = true
        switch (paramObj.payment) {
          case 'alipay':
            checkAlipayOrder(paramObj.out_trade_no)
              .then(res => {
                this.checkResultLoading = false
                if(res.data.is_payed) {
                  this.$messageBox.confirm(this.$t('package.paySuccess'), {
                    type: 'success',
                    confirmButtonText: this.$t('common.ok'),
                    showCancelButton: false
                  })
                } else {
                  this.$messageBox.confirm(this.$t('package.payFail'), {
                    type: 'error',
                    confirmButtonText: this.$t('common.ok'),
                    showCancelButton: false
                  })
                }
              })
              .catch(err => {
                this.checkResultLoading = false
                console.log(err)
              })
            break
          case 'paypal':
            if(paramObj.cancel) {
              this.checkResultLoading = false
              this.$messageBox.confirm(this.$t('package.payFail'), {
                type: 'error',
                confirmButtonText: this.$t('common.ok'),
                showCancelButton: false
              })
            } else {
              checkPaypalOrder(paramObj.orderId, paramObj.paymentId, paramObj.PayerID)
                .then(res => {
                  if(res.data.is_payed) {
                    this.checkResultLoading = false
                    this.$messageBox.confirm(this.$t('package.paySuccess'), {
                      type: 'success',
                      confirmButtonText: this.$t('common.ok'),
                      showCancelButton: false
                    })
                  } else {
                    this.$messageBox.confirm(this.$t('package.payFail'), {
                      type: 'error',
                      confirmButtonText: this.$t('common.ok'),
                      showCancelButton: false
                    })
                  }
                })
                .catch(err => {
                  this.checkResultLoading = false
                  console.log(err)
                })
            }
            break
          default:
            break
        }
      }
    },
    getUserDomain() {
      fetchUserDomain(1, 200).then(res => {
        if(res.data) {
          let hasValidDomain = false
          if(!this.currentDomain.id) {
            for (let i = 0; i < res.data.length; i++) {
              if(res.data[i].isValid === 1) {
                store.dispatch('setDomain', res.data)
                // console.warn(JSON.stringify(res.data[i]))
                store.dispatch('setCurrentDomain', res.data[i])
                hasValidDomain = true
                break
              }
            }
          } else {
            for (let i = 0; i < res.data.length; i++) {
              if(res.data[i].isValid === 1) {
                hasValidDomain = true
                break
              }
            }
          }
          if(hasValidDomain) {
            const validDomain = res.data.filter(item => item.isValid === 1)
            store.dispatch('setValidDomain', validDomain)
            this.loopGetData(this.currentDomain.uid, this.currentDomain.id)
            this.getDisData(this.currentDomain.uid, this.currentDomain.id)
          }
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>


</style>

<template>
  <div v-loading="checkResultLoading" :element-loading-text="$t('package.checkResultLoadingTip')">
    <el-row style="text-align: left; margin: 20px 0">

      <template v-if="showDomain">
        <el-col :xs="20" :sm="12" :lg="8">
          <SwitchDomain :finishSelect="handleSwitchDomain" />
        </el-col>
      </template>
      
      <el-col :xs="7" :sm="4" :lg="2">
        <el-button type="success" @click="handleCheckin" v-loading="checkinLoading">{{ $t('dashboard.checkin') }}</el-button>
      </el-col>
    </el-row>

    <el-row :gutter="20" class="panel-group">
      <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="tip">
            <PointTip :content="$t('dashboard.onlinesTip')" />
          </div>
          <div class="card-panel-description">
            <span class="card-panel-num">{{ statis.online | positive }}</span>
            <div class="card-panel-text">{{ $t('dashboard.online') }}</div>
          </div>
        </div>
      </el-col>

      <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="tip">
            <PointTip :content="$t('dashboard.p2pTip')" />
          </div>
          <div class="card-panel-description">
            <span class="card-panel-num">{{ statis.traffic_p2p.num }}</span>
            <div class="card-panel-text">{{ $t('dashboard.p2pTraffic') }} ({{ statis.traffic_p2p.unit }})</div>
          </div>
        </div>
      </el-col>

      <!-- <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="tip">
            <PointTip :content="$t('dashboard.freeTip')" />
          </div>
          <div class="card-panel-description">
            <span class="card-panel-num">+∞</span>
            <div class="card-panel-text">{{ $t('dashboard.free') }}</div>
          </div>
        </div>
      </el-col> -->

      <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="tip">
            <PointTip :content="$t('dashboard.freeTip')" />
          </div>
          <div class="card-panel-description">
            <span class="card-panel-num">{{ statis.whiteList ? '+∞' : statis.flow.free.num }}</span>
            <div class="card-panel-text">{{ $t('dashboard.free') }} ({{ statis.flow.free.unit }})</div>
          </div>
        </div>
      </el-col>

      <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="tip">
            <PointTip :content="$t('dashboard.remainTip')" />
          </div>
          <div class="card-panel-description">
            <span class="card-panel-num" :style="statis.flow.totalRemain > 1024*1024*100 ? 'color: green' : 'color: red'">{{ formatTraffic(statis.flow.totalRemain).unit==='TB' && formatTraffic(statis.flow.totalRemain).num>=999?'+∞':formatTraffic(statis.flow.totalRemain).num }}</span>

            <div v-if="statis.type.product_type === 0" class="card-panel-text">{{ $t('dashboard.remain') }} ({{ formatTraffic(statis.flow.totalRemain).unit }})
              <div>{{ formatType() }}</div>
            </div>
            <div v-if="statis.type.product_type > 0" class="card-panel-text">{{ $t('dashboard.monthlyRemain') }} ({{ formatTraffic(statis.flow.totalRemain).unit }})
              <div>{{ formatType() }}</div>
            </div>
          </div>
        </div>
      </el-col>

      <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="tip">
            <PointTip :content="$t('dashboard.viewsTip')" />
          </div>
          <div class="card-panel-description">
            <span class="card-panel-num">{{ statis.frequency_day }}</span>
            <div class="card-panel-text">{{ $t('dashboard.serveNum') }}</div>
          </div>
        </div>
      </el-col>

      <!--<el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">-->
        <!--<div class="card-panel">-->
          <!--<div class="card-panel-description">-->
            <!--<span class="card-panel-num">{{ statis.num_max }}</span>-->
            <!--<div class="card-panel-text">{{ $t('dashboard.maxOnlineNum') }}</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</el-col>-->
    </el-row>
    <Dis :data="disData"/>
    <NoBindTip />
  </div>
</template>

<script>
import store from '@/store'
import { mapGetters } from 'vuex'
import moment from 'moment'

import { fetchGlobalData, fetchNum, fetchDisData } from '@/api/user/liveData'
import { checkAlipayOrder, checkPaypalOrder, checkIn } from '@/api/user/package'
import { fetchUserDomain } from '@/api/userDomain'

import { formatTraffic, formatPieData, getQueryObj } from '@/utils/format'

import SwitchDomain from '@/components/SwitchDomain'
import NoBindTip from '@/components/NoBindTip'
import PointTip from '@/components/PointTip'
import Dis from './Distribution'

let int = undefined
const types = {
  0: 'flow_package',
  1: 'monthly_10TB',
  2: 'monthly_20TB',
  3: 'monthly_unlimited',
  4: 'annual_10TB',
  5: 'annual_20TB',
  6: 'unlimited',
}

export default {
  name: 'LiveData',
  components: {
    Dis,
    NoBindTip,
    SwitchDomain,
    PointTip
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
        }
      },
      disData: {
        versionData: [],
        tagData: [],
        deviceData: [],
        liveData: [],
        netTypeData: []
      }
    }
  },
  computed: {
    ...mapGetters([
      'currentDomain',
      'device',
      'userValidDomain'
    ])
  },
  mounted() {
    if(this.$route.params.id !== undefined && this.$route.params.uid !== undefined) {
      this.loopGetData(this.$route.params.uid, this.$route.params.id, this.$route.params.hostId)
      this.getDisData(this.$route.params.uid, this.$route.params.id, this.$route.params.hostId)

      this.showDomain = false
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

    formatType() {
      if(this.statis.type.product_type === 0) {
        return ''
      } else {
        const time = this.statis.type.time ? moment(this.statis.type.time).format('YYYY-MM-DD') : ''
        return this.$t('package.monthly') + `${time}`
      }
    },
    getData(uid, id, hostId) {
      fetchGlobalData(uid, id, hostId)
        .then(res => {
          const { data } = res
          this.statis.online = data.num_rt
          this.statis.traffic_p2p = formatTraffic(data.traffic_p2p_day)
          this.statis.frequency_day = data.api_frequency_day
          this.statis.num_max = data.num_max
          this.statis.flow.remain = data.flow.remain
          this.statis.flow.daily_remain = data.flow.daily_remain
          this.statis.flow.totalRemain = data.flow.daily_remain + data.flow.remain
          this.statis.flow.free = formatTraffic(data.flow.free)

          this.statis.whiteList = data.whitelist
          this.statis.type.product_type = data.flow.product_type
          this.statis.type.time = data.flow.duetime
          
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
      fetchDisData(uid, id, 'version', hostID).then(res => {
        if(res.data) {
          this.disData.versionData = formatPieData(res.data)
        }
      })
      fetchDisData(uid, id, 'tag', hostID).then(res => {
        if(res.data) {
          this.disData.tagData = formatPieData(res.data)
        }
      })
      fetchDisData(uid, id, 'device', hostID).then(res => {
        if(res.data) {
          this.disData.deviceData = formatPieData(res.data)
        }
      })
      fetchDisData(uid, id, 'live', hostID).then(res => {
        if(res.data) {
          this.disData.liveData = formatPieData(res.data)
        }
      })
      fetchDisData(uid, id, 'netType', hostID).then(res => {
        if(res.data) {
          this.disData.netTypeData = formatPieData(res.data)
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
  .panel-group {
    margin-top: 18px;
    .card-panel-col{
      margin-bottom: 20px;
    }
    .card-panel {
      height: 108px;
      font-size: 12px;
      position: relative;
      overflow: hidden;
      color: #666;
      background: #fff;
      box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
      border-color: rgba(0, 0, 0, .05);
      .card-panel-description {
        text-align: right;
        line-height: 42px;
        font-weight: bold;
        margin: 26px;
        margin-left: 0;
        .card-panel-text {
          line-height: 18px;
          color: rgba(0, 0, 0, 0.45);
          font-size: 16px;
        }
        .card-panel-num {
          font-size: 24px;
        }
      }
    }
  }
  p {
      text-align: left;
      a {
        color: #337ab7;
        cursor: pointer;
        &:hover {
          color: rgb(32, 160, 255);
        }
      }
  }
  .tip {
    position: absolute;
    font-size: 15px;
    top: 0;
    right: 0;
    padding: 10px;
  }
</style>

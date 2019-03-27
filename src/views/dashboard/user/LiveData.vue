<template>
  <div>
    <el-row style="text-align: left; margin: 20px 0">
      <el-col :xs="18" :sm="12" :lg="8">
        <SwitchDomain :finishSelect="handleSwitchDomain" />
      </el-col>
      <el-col :xs="3" :sm="3" :lg="2">
        <el-button type="success">{{ $t('dashboard.checkin') }}</el-button>
      </el-col>
    </el-row>


    <el-row :gutter="20" class="panel-group">
      <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
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

      <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-description">
            <span class="card-panel-num">{{ statis.flow.free.num }}</span>
            <div class="card-panel-text">{{ $t('dashboard.free') }} ({{ statis.flow.free.unit }})</div>
          </div>
        </div>
      </el-col>

      <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-description">
            <span class="card-panel-num">{{ statis.flow.buyed.num }}</span>
            <div class="card-panel-text">{{ $t('dashboard.buyed') }} ({{ statis.flow.buyed.unit }})</div>
          </div>
        </div>
      </el-col>

      <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-description">
            <span class="card-panel-num">{{ statis.frequency_day }}</span>
            <div class="card-panel-text">{{ $t('dashboard.serveNum') }}</div>
          </div>
        </div>
      </el-col>

      <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-description">
            <span class="card-panel-num">{{ statis.num_max }}</span>
            <div class="card-panel-text">{{ $t('dashboard.maxOnlineNum') }}</div>
          </div>
        </div>
      </el-col>
    </el-row>
    <Dis :data="disData"/>
    <NoBindTip :tipVisible="tipVisible" :handleClose="handleCloseTip" />
  </div>
</template>

<script>
import store from '@/store'
import { mapGetters } from 'vuex'

import { fetchGlobalData, fetchNum, fetchDisData } from '@/api/user/liveData'
import { checkAlipayOrder, checkPaypalOrder, checkIn } from '@/api/user/package'
import { fetchUserDomain } from '@/api/userDomain'

import { formatTraffic, formatPieData, getQueryObj } from '@/utils/format'

import SwitchDomain from '@/components/SwitchDomain'
import NoBindTip from '@/components/NoBindTip'
import PointTip from '@/components/PointTip'
import Dis from './Distribution'

let int = undefined

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
      tipVisible: false,

      statis: {
        online: 0,
        traffic_p2p: {
          num: 0,
          unit: 'KB'
        },
        frequency_day: 0,
        num_max: 0,
        flow: {
          buyed: {
            num: 0,
            unit: 'KB'
          },
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
    if(this.$route.params.id && this.$route.params.uid) {
      this.loopGetData(this.$route.params.uid, this.$route.params.id, this.$route.params.hostId)
    } else {
      this.getUserDomain()
      this.checkPayResult()
    }
  },
  beforeDestroy() {
    clearInterval(int)
  },
  methods: {
    getData(uid, id, hostId) {
      fetchGlobalData(uid, id, hostId).then(res => {
        const { data } = res
        this.statis.online = data.num_rt
        this.statis.traffic_p2p = formatTraffic(data.traffic_p2p_day)
        this.statis.frequency_day = data.api_frequency_day
        this.statis.num_max = data.num_max
        this.statis.flow.buyed = formatTraffic(data.flow.buyed)
        this.statis.flow.free = formatTraffic(data.flow.free)
      }).catch(err => {
        console.log(err)
      })
      fetchDisData(uid, id, 'version', hostId).then(res => {
        if(res.data) {
          this.disData.versionData = formatPieData(res.data)
        }
      })
      fetchDisData(uid, id, 'tag', hostId).then(res => {
        if(res.data) {
          this.disData.tagData = formatPieData(res.data)
        }
      })
      fetchDisData(uid, id, 'device', hostId).then(res => {
        if(res.data) {
          this.disData.deviceData = formatPieData(res.data)
        }
      })
      fetchDisData(uid, id, 'live', hostId).then(res => {
        if(res.data) {
          this.disData.liveData = formatPieData(res.data)
        }
      })
      fetchDisData(uid, id, 'netType', hostId).then(res => {
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
    handleSwitchDomain(uid, id) {
      clearInterval(int)
      this.loopGetData(uid, id)
    },
    handleCloseTip() {
      this.tipVisible = false
    },
    checkPayResult() {
      const paramObj = getQueryObj()
      if(paramObj.payment) {
        switch (paramObj.payment) {
          case 'alipay':
            checkAlipayOrder(paramObj.out_trade_no)
              .then(res => {
                if(res.data.is_payed)
                  this.$messageBox.confirm(this.$t('package.paySuccess'), {
                    type: 'success',
                    confirmButtonText: this.$t('common.ok'),
                    showCancelButton: false,
                    customClass: 'my-message-box'
                  })
              })
              .catch(err => {
                console.log(err)
              })
            break
          case 'paypal':
            checkPaypalOrder(paramObj.orderId, paramObj.paymentId, paramObj.PayerID)
              .then(res => {
                this.$messageBox.confirm(this.$t('package.paySuccess'), {
                  type: 'success',
                  confirmButtonText: this.$t('common.ok'),
                  showCancelButton: false,
                  customClass: 'my-message-box'
                })
              })
              .catch(err => {
                console.log(err)
              })
            break
          default:
            break
        }
      }
    },
    getUserDomain() {
      fetchUserDomain(1, 10).then(res => {
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
          } else {
            this.tipVisible = true
          }
        } else {
          this.tipVisible = true
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

<template>
    <div class="dashboard-global-container">
      <div v-loading="checkResultLoading" :element-loading-text="$t('package.checkResultLoadingTip')">
        <el-alert
            :title="$t('domainTable.title')"
            :description="$t('dashboard.descGlobal')"
            type="info"
            show-icon>
        </el-alert>
        <el-row :gutter="20" style="text-align: left;">
          <el-col :xs="7" :sm="4" :lg="2">
            <el-button size="small" type="success" @click="handleCheckin"
                       v-loading="checkinLoading"
                       v-show="showCheckin"
                       style="font-size: medium; margin-right: 80px">
              {{ $t('dashboard.checkin') }}
            </el-button>
          </el-col>
          <el-col :xs="7" :sm="4" :lg="2">
            <el-button size="small" type="primary" @click="changeUTC"
                       style="font-size: medium;">
              {{ $t('dashboard.changeUTC') }}
            </el-button>
          </el-col>
        </el-row>
            <LiveTime :statis="statis" ></LiveTime>
            <DistributionGlobal :data="disData"/>
        <NoBindTip />
      </div>
    </div>

</template>

<script>
    import { mapGetters } from 'vuex'
    import { getID } from '@/utils/auth'
    import { fetchGlobalData, fetchDisData } from '@/api/user/liveData'
    import { checkAlipayOrder, checkPaypalOrder } from '@/api/user/package'
    import { fetchGlobalDomains } from '@/api/user/global'
    import { checkIn } from '@/api/user/package'
    import { formatTraffic, getQueryObj, formatPieData } from '@/utils/format'
    import NoBindTip from '@/components/NoBindTip'
    import LiveTime from './LiveTime'
    import DistributionGlobal from './DistributionGlobal'
    import { getItem, setItemWithExpiration } from '@/utils/storage'

    let int = undefined

    export default {
        name: 'liveDataGlobal',
        components: {
            NoBindTip,
            LiveTime,
            DistributionGlobal
        },
        data() {
            return {
                checkResultLoading: false,
                checkinLoading: false,
                remainTrafficFlag: true,
                showCheckin: true,
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
                    traffic_p2p_day: 0,
                    traffic_http_day: 0,
                },
                disData: {
                  domainData: [],
                  versionData: [],
                  tagData: [],
                  liveData: [],
                  netTypeData: [],
                  ispData: [],
                },
                utcOptions: [{
                  value: '12',
                  label: '+12'
                }, {
                  value: '11',
                  label: '+11'
                }, {
                  value: '10',
                  label: '+10'
                }, {
                  value: '9',
                  label: '+9'
                }, {
                  value: '8',
                  label: '+8'
                }],
            }
        },
        computed: {
            ...mapGetters([
                'currentDomain',
                'device',
                'language'
            ])
        },
        mounted() {
            const uid = getID()
            this.loopGetData(uid, 0)
            this.getDisData(uid)
            if (!!getItem('checkin')) {
              this.showCheckin = false
            }
            this.checkPayResult()
        },
        beforeDestroy() {
            clearInterval(int)
        },
        methods: {
            getDisData(uid) {
              fetchGlobalDomains(uid).then(res => {
                const data = res.data
                if(data) {
                  this.disData.domainData = formatPieData(data)
                } else {
                  this.disData.domainData = [];
                }
              })
              fetchDisData(uid, 0, 'version').then(res => {
                const data = res.data.data
                if(data) {
                  this.disData.versionData = formatPieData(data)
                } else {
                  this.disData.versionData = [];
                }
              })
              fetchDisData(uid, 0, 'tag').then(res => {
                const data = res.data.data
                if(data) {
                  this.disData.tagData = formatPieData(data)
                } else {
                  this.disData.tagData = [];
                }
              })
              fetchDisData(uid, 0, 'live').then(res => {
                const data = res.data.data
                if(data) {
                  this.disData.liveData = formatPieData(data)
                } else {
                  this.disData.liveData = [];
                }
              })
              fetchDisData(uid, 0, 'netType').then(res => {
                const data = res.data.data
                if(data) {
                  this.disData.netTypeData = formatPieData(data)
                } else {
                  this.disData.netTypeData = [];
                }
              })
              fetchDisData(uid, 0, 'isp', undefined, this.language === 'en'?'en':'').then(res => {
                const data = res.data.data
                if(data) {
                  this.disData.ispData = formatPieData(data)
                } else {
                  this.disData.ispData = [];
                }
              })
            },
            formatTraffic,
            getData(uid, id) {
                fetchGlobalData(uid, id)
                    .then(res => {
                        const { data } = res
                        this.statis.online = data.num_rt
                        this.statis.traffic_p2p_day = data.traffic_p2p_day
                        this.statis.traffic_http_day = data.traffic_http_day
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
            loopGetData(uid, id) {
                const _this = this
                _this.getData(uid, id)
                int = setInterval(function() {
                    _this.getData(uid, id)
                }, 20000)
            },
            changeUTC() {

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
                            setItemWithExpiration('checkin', 1, 3600*12*1000)
                            this.showCheckin = false
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
                    this.checkResultLoading = false
                    break
                }
              }
            },
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
.dashboard-global-container {
  padding: 4px 25px;
  background-color: rgb(240, 242, 245);
  min-height: calc(100vh - 84px);
}
</style>

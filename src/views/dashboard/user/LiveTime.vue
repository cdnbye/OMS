<template>
        <el-row :gutter="20" class="panel-group">
            <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
                <card :num="statis.online | positive"
                      :desc="$t('dashboard.online')">
                  <div class="tip">
                    <PointTip :content="$t('dashboard.onlinesTip')" />
                  </div>
                </card>
            </el-col>

            <!--每日share流量-->
            <el-col v-if="isSuperPeer && !global" :xs="24" :sm="12" :lg="6" class="card-panel-col">
              <card :num="statis.traffic_share.num"
                    :decimals="2"
                    :desc="`${$t('dashboard.shareTraffic')} (${statis.traffic_share.unit})`">
              </card>
            </el-col>

            <!--每日p2p流量-->
            <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
                <card :num="statis.traffic_p2p.num"
                      :decimals="2"
                      :desc="`${$t('dashboard.p2pTraffic')} (${statis.traffic_p2p.unit})`">
                  <div class="tip">
                    <PointTip :content="$t('dashboard.p2pTip')" />
                  </div>
                </card>
            </el-col>

            <!--每日http流量-->
            <el-col v-if="!isSuperPeer || global" :xs="24" :sm="12" :lg="6" class="card-panel-col">
                <card :num="statis.traffic_http.num"
                      :decimals="2"
                      :desc="`${$t('dashboard.httpTraffic')} (${statis.traffic_http.unit})`">
                  <div class="tip">
                    <PointTip :content="$t('dashboard.httpTip')" />
                  </div>
                </card>
            </el-col>

            <!--p2p效率-->
            <el-col v-if="!isSuperPeer || global" :xs="24" :sm="12" :lg="6" class="card-panel-col">
              <card :num="p2pEfficiency"
                    :decimals="2"
                    :desc="`${$t('dashboard.p2pEfficiency')} (%)`">
                    <div class="tip">
                      <PointTip :content="$t('dashboard.efficiencyTip')" />
                    </div>
              </card>
            </el-col>

            <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col" v-show="!isPaidUser || statis.whiteList">
                <card
                    :num="statis.flow.free.num"
                    :decimals="2"
                    :infinite="statis.whiteList"
                      :desc="`${$t('dashboard.free')} (${statis.flow.free.unit})`">
                  <div class="tip">
                    <PointTip :content="$t('dashboard.freeTip')" />
                  </div>
                </card>
            </el-col>

            <!--流量包-->
            <el-col v-if="statis.flow.remain > 0" :xs="24" :sm="12" :lg="6" class="card-panel-col">
                <card
                    :num="formatTraffic(statis.flow.remain).num"
                    :decimals="2"
                    :infinite="formatTraffic(statis.flow.remain).unit==='TB' && formatTraffic(statis.flow.remain).num>=99999"
                    :desc="`${$t('dashboard.remain')} (${formatTraffic(statis.flow.remain).unit})`"
                    :color="statis.flow.totalRemain > 1024*1024*100 ? 'green' : 'red'"
                >
                </card>
            </el-col>

            <!--包月套餐-->
            <el-col v-if="statis.type.product_type > 0" :xs="24" :sm="12" :lg="6" class="card-panel-col">
                <card
                    :num="formatTraffic(statis.flow.daily_remain).num"
                    :decimals="2"
                    :desc="`${$t('dashboard.monthlyRemain')} (${formatTraffic(statis.flow.daily_remain).unit})`"
                    :color="statis.flow.daily_remain > 1024*1024*100 ? 'green' : 'red'"
                >
                  <span class="resetTip">{{ $t('package.resetAfter') }} {{ leftHours }}h:{{ leftMinutes }}min</span>
                  <template slot="footer">
                    <div>{{ formatType() }}</div>
                  </template>
                </card>
            </el-col>

            <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
                <card
                    :num="statis.frequency_day"
                    :desc="$t('dashboard.serveNum')">
                </card>
            </el-col>

            <el-col v-if="statis.rebuffer_ratio >= 0" :xs="24" :sm="12" :lg="6" class="card-panel-col">
              <card
                  :num="statis.rebuffer_ratio*100"
                  :decimals="2"
                  :desc="`${$t('dashboard.rebufferRatio')} (%)`">
                <div class="tip">
                  <PointTip :content="$t('dashboard.rebufferTip')" />
                </div>
              </card>
            </el-col>

            <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
                <card
                    :num="statis.num_max"
                    :desc="$t('dashboard.maxOnlineNum')">
                </card>
            </el-col>
        </el-row>
</template>

<script>
    import moment from 'moment'
    import { formatTraffic } from '@/utils/format'
    import PointTip from '@/components/PointTip'
    import Card from '@/components/Card'
    import { mapGetters } from "vuex";

    export default {
        name: 'LiveTime',
        components: {
            PointTip,
            Card,
        },
        props: {
            global: {
              type: Boolean,
              default: false,
            },
            statis: {
                type: Object,
                required: true,
                default() {
                    return {
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
                        traffic_share: {
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
                        clock: new Date(),
                        traffic_p2p_day: 0,
                        traffic_http_day: 0,
                    }
                },
            },
        },
        computed: {
            ...mapGetters([
              'currentDomain',
            ]),
            isSuperPeer: function () {
              return this.currentDomain && this.currentDomain.domain && this.currentDomain.domain.endsWith('.superpeer')
            },
            p2pEfficiency: function () {
              let p2pDiff = this.statis.traffic_p2p_day - this.lastP2pTraffic;
              if (p2pDiff < 0) p2pDiff = 0;
              let httpDiff = this.statis.traffic_http_day - this.lastHttpTraffic;
              if (httpDiff < 0) httpDiff = 0;
              this.lastP2pTraffic = this.statis.traffic_p2p_day;
              this.lastHttpTraffic = this.statis.traffic_http_day;
              if (p2pDiff === 0) {
                return 0
              }
              if (httpDiff === 0) {
                return 100
              }
              this.lastRatio = Number((p2pDiff/(p2pDiff+httpDiff)*100).toFixed(2))
              return this.lastRatio
            },
            isPaidUser: function ()  {
              return this.statis.flow.remain > 0 || this.statis.type.product_type > 0
            }
        },
        data() {
            return {
                leftMinutes: 0,
                leftHours: 0,
                lastP2pTraffic: 0,
                lastHttpTraffic: 0,
                lastRatio: 0,
            }
        },
        watch: {
            statis: {
                deep: true,
                handler(val) {
                  // const serverClock = moment(val.clock)
                  const utc = val.flow.utc
                  const serverClock = new Date(val.clock)
                  this.leftMinutes = 60 - serverClock.getUTCMinutes()
                  this.leftHours = (23 - (serverClock.getUTCHours() + utc)%24)%24
              }
            },
            currentDomain: function () {
              this.lastP2pTraffic = 0;
              this.lastHttpTraffic = 0;
            }
        },
        mounted() {

        },
        beforeDestroy() {

        },
        methods: {
            formatTraffic,
            formatType() {
                if(this.statis.type.product_type === 0) {
                    return ''
                } else {
                    const time = this.statis.type.time ? moment(this.statis.type.time).format('YY-MM-DD') : ''
                    return this.$t('package.monthly') + `${time}`
                }
            },
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .panel-group {
        margin-top: 18px;
        .card-panel-col{
            margin-bottom: 20px;
            .resetTip {
              position: absolute;
              font-size: 12px;
              top: 0;
              right: 0;
              padding: 5px;
              color: #006eff;
            }
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

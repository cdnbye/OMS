<template>

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

            <!--每日p2p流量-->
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

            <!--每日http流量-->
            <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
                <div class="card-panel">
                    <div class="tip">
                        <PointTip :content="$t('dashboard.httpTip')" />
                    </div>
                    <div class="card-panel-description">
                        <span class="card-panel-num">{{ statis.traffic_http.num }}</span>
                        <div class="card-panel-text">{{ $t('dashboard.httpTraffic') }} ({{ statis.traffic_http.unit }})</div>
                    </div>
                </div>
            </el-col>

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

            <!--流量包-->
            <el-col v-if="statis.flow.remain > 0" :xs="24" :sm="12" :lg="6" class="card-panel-col">
                <div class="card-panel">
                    <!--<div class="tip">-->
                        <!--<PointTip :content="$t('dashboard.remainTip')" />-->
                    <!--</div>-->
                    <div class="card-panel-description">
                        <span class="card-panel-num" :style="statis.flow.totalRemain > 1024*1024*100 ? 'color: green' : 'color: red'">{{ formatTraffic(statis.flow.remain).unit==='TB' && formatTraffic(statis.flow.remain).num>=99999?'+∞':formatTraffic(statis.flow.remain).num }}</span>

                        <div class="card-panel-text">{{ $t('dashboard.remain') }} ({{ formatTraffic(statis.flow.remain).unit }})
                            <!--<div>{{ formatType() }}</div>-->
                        </div>
                    </div>
                </div>
            </el-col>

            <!--包月套餐-->
            <el-col v-if="statis.type.product_type > 0" :xs="24" :sm="12" :lg="6" class="card-panel-col">
                <div class="card-panel">
                    <!--<div class="tip">-->
                        <!--<PointTip :content="$t('dashboard.remainTip')" />-->
                    <!--</div>-->
                    <div class="resetTip">
                        <span>{{ $t('package.resetAfter') }} {{ leftHours }}h:{{ leftMinutes }}min</span>
                    </div>
                    <div class="card-panel-description">
                        <span class="card-panel-num" :style="statis.flow.daily_remain > 1024*1024*100 ? 'color: green' : 'color: red'">{{ formatTraffic(statis.flow.daily_remain).num }}</span>

                        <div class="card-panel-text">{{ $t('dashboard.monthlyRemain') }} ({{ formatTraffic(statis.flow.daily_remain).unit }})
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

            <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
                <div class="card-panel">
                    <div class="card-panel-description">
                        <span class="card-panel-num">{{ statis.num_max }}</span>
                        <div class="card-panel-text">{{ $t('dashboard.maxOnlineNum') }}</div>
                    </div>
                </div>
            </el-col>
        </el-row>
</template>

<script>
    import moment from 'moment'

    import { formatTraffic } from '@/utils/format'

    import PointTip from '@/components/PointTip'

    export default {
        name: 'LiveTime',
        components: {
            PointTip
        },
        props: {
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
                    }
                },
            },
        },
        data() {
            return {
                leftMinutes: 0,
                leftHours: 0,
            }
        },
        watch: {
            statis: {
                deep: true,
                handler(val) {
                  const serverClock = moment(val.clock)
                  this.leftMinutes = 60 - serverClock.minutes()
                  this.leftHours = 23 - serverClock.hours()
              }
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
                    const time = this.statis.type.time ? moment(this.statis.type.time).format('MM-DD') : ''
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
    .resetTip {
        position: absolute;
        font-size: 12px;
        top: 0;
        right: 0;
        padding: 5px;
        color: #006eff;
    }
</style>

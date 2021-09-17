<template>
    <div>
        <el-alert
                :title="$t('domainTable.title')"
                :description="$t('dashboard.descGlobal')"
                type="info"
                show-icon>
        </el-alert>
        <el-row style="text-align: left; margin: 20px 0">
            <el-col :xs="7" :sm="4" :lg="2">
                <el-button size="small" type="success" @click="handleCheckin" v-loading="checkinLoading"
                           style="font-size: medium;">
                    {{ $t('dashboard.checkin') }}
                </el-button>
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
                    <div class="tip">
                        <PointTip :content="$t('dashboard.remainTip')" />
                    </div>
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
                    <div class="tip">
                        <PointTip :content="$t('dashboard.remainTip')" />
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
        <NoBindTip />
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import moment from 'moment'
    import { getID } from '@/utils/auth'
    import { fetchGlobalData } from '@/api/user/liveData'
    import { checkIn } from '@/api/user/package'

    import { formatTraffic, getQueryObj } from '@/utils/format'

    import SwitchDomain from '@/components/SwitchDomain'
    import NoBindTip from '@/components/NoBindTip'
    import PointTip from '@/components/PointTip'

    let int = undefined

    export default {
        name: 'LiveDataGlobal',
        components: {
            NoBindTip,
            SwitchDomain,
            PointTip
        },
        data() {
            return {
                checkinLoading: false,
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
            this.loopGetData(getID(), 0)
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
            getData(uid, id) {
                fetchGlobalData(uid, id)
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
            loopGetData(uid, id) {
                const _this = this
                _this.getData(uid, id)
                int = setInterval(function() {
                    _this.getData(uid, id)
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

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
        <LiveTime :statis="statis" ></LiveTime>
        <NoBindTip />
    </div>
</template>

<script>
    import moment from 'moment'
    import { mapGetters } from 'vuex'
    import { getID } from '@/utils/auth'
    import { fetchGlobalData } from '@/api/user/liveData'
    import { checkIn } from '@/api/user/package'

    import { formatTraffic, getQueryObj } from '@/utils/format'

    import NoBindTip from '@/components/NoBindTip'
    import LiveTime from './LiveTime'

    let int = undefined

    export default {
        name: 'liveDataGlobal',
        components: {
            NoBindTip,
            LiveTime
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
                    },
                    clock: null,
                },
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
            this.loopGetData(getID(), 0)
        },
        beforeDestroy() {
            clearInterval(int)
        },
        methods: {
            formatTraffic,
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

</style>

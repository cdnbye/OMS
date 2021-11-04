<template>
    <div :style="device === 'mobile' ? '' : 'padding: 30px 120px'">
        <el-alert :title="$t('p2pConfig.signalManage.desc')" style="margin-bottom: 20px"/>
        <el-table border :data="tableData" v-loading="loading">
            <el-table-column align="center" prop="domain" :label="$t('p2pConfig.name')"></el-table-column>
            <el-table-column align="center" :formatter="formatterStatus"
                             :label="$t('p2pConfig.signalManage.signalAddr')">
                <template slot-scope="scope">
                    <el-input
                            placeholder="wss://"
                            type="textarea"
                            v-model="scope.row.signals"
                            :autosize="{ minRows: 1, maxRows: 10}"
                            clearable
                            >
                    </el-input>
                </template>
            </el-table-column>
            <el-table-column align="center" :formatter="formatterStatus"
                             :label="$t('p2pConfig.signalManage.switch')">
                <template slot-scope="scope">
                    <el-switch v-if="!scope.row.blocked" v-model="scope.row.signal_enabled" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
                </template>
            </el-table-column>

            <el-table-column :label="$t('domainTable.operation')" align="center">
                <template slot-scope="scope">
                    <el-button v-if="!scope.row.blocked" :loading="loading" type="primary" @click.native.prevent="handleSubmit(scope.row)">{{$t('common.ok')}}</el-button>
                </template>
            </el-table-column>

        </el-table>

        <div class="pagination-container">
            <el-pagination
                    layout="sizes, prev, pager, next"
                    :page-sizes="[10, 20, 50, 100]"
                    :page-size="tableParam.pageSize"
                    :current-page="tableParam.page"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange">
            </el-pagination>
        </div>

    </div>
</template>

<script>
    import {fetchUserDomain} from '@/api/userDomain'
    import { updateSignalAddr } from '@/api/user/p2pConfig'
    import {mapGetters} from 'vuex'
    import { trim } from '@/utils'

    export default {
        name: 'signalManage',
        data() {
            return {
                loading: false,
                tableData: [],
                tableParam: {
                    page: 1,
                    pageSize: 10
                },
            }
        },
        computed: {
            ...mapGetters([
                'device'
            ])
        },
        mounted() {
            this.fetchTableData()
        },
        methods: {
            formatterStatus(row) {
                if (row.blocked) {
                    return this.$t('common.illegal')
                }
                // if (row.reviewing) {
                //     return this.$t('common.reviewing')
                // }
                return ""
            },
            fetchTableData(page = this.tableParam.page, pageSize = this.tableParam.pageSize) {
                this.loading = true
                fetchUserDomain(page, pageSize, {isvalid: true}).then(res => {
                    if (res.data) {
                        this.tableData = res.data
                    }
                    this.tableData.forEach(row => {
                        // console.warn(row)
                        if (row.signals && row.signals.length >= 0) {
                            row.signals = row.signals.join('\n')
                        }
                    })
                    this.loading = false
                }).catch(err => {
                    this.loading = false
                    console.log(err)
                })
            },
            handleSignalAddr(uid, id, data) {
                this.loading = true
                updateSignalAddr(uid, id, data)
                    .then(res => {
                        if (res.data.succeed) {
                            this.$notify({
                                title: this.$t('common.success'),
                                message: this.$t('p2pConfig.configSuccess'),
                                type: 'success'
                            });
                        } else {
                            const msg = res.data.msg || this.$t('p2pConfig.configFail')
                            this.$notify.error({
                                title: this.$t('common.error'),
                                message: msg,
                            });
                        }
                        this.loading = false
                    })
                    .catch(err => {
                        this.loading = false
                        console.log(err)
                    })
            },
            handleSubmit(domain) {
                let signals;
                if (!domain.signals) {
                    signals = []
                } else {
                    signals = domain.signals.split('\n').map(signal => trim(signal)).filter(signal => {
                        return signal !== ""
                    })
                }
                const data = {signals, enabled: domain.signal_enabled};
                this.handleSignalAddr(domain.uid, domain.id, data)
            },
            handleSizeChange(pageSize) {
                this.tableParam.pageSize = pageSize
                this.fetchTableData()
            },
            handleCurrentChange(page) {
                this.tableParam.page = page
                this.fetchTableData()
            },
        },
    }
</script>

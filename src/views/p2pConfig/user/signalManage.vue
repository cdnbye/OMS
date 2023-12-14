<template>
    <div :style="device === 'mobile' ? '' : 'padding: 30px 120px'">
        <el-alert :title="$t('p2pConfig.signalManage.desc')" style="margin-bottom: 20px">
          <template>
            <br>
            <br>
            <a style="color: #337ab7; font-weight: bold" target="view_window" href="https://swarmcloud.net/guides/signaling#official-signaling-service">{{ $t('p2pConfig.signalManage.official') }} -></a>
          </template>
        </el-alert>
        <el-table border :data="tableData" v-loading="loading">
            <el-table-column align="center" prop="domain" :label="$t('p2pConfig.name')"  min-width="100"></el-table-column>
            <el-table-column align="center" :formatter="formatterStatus"
                             :label="$t('p2pConfig.signalManage.signalAddr')"
                             min-width="150">
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
                             :label="$t('p2pConfig.signalManage.signalAddr2')"
                             min-width="130">
              <template slot-scope="scope">
                <el-input
                    placeholder="wss://"
                    type="textarea"
                    v-model="scope.row.signals2"
                    :autosize="{ minRows: 1, maxRows: 10}"
                    clearable
                >
                </el-input>
              </template>
            </el-table-column>
            <el-table-column align="center" :formatter="formatterStatus" min-width="50" width="120"
                             :label="$t('p2pConfig.signalManage.switch')">
                <template slot-scope="scope">
                    <el-switch v-if="!scope.row.blocked" v-model="scope.row.signal_enabled" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
                </template>
            </el-table-column>

            <el-table-column :label="$t('domainTable.operation')" align="center"  min-width="50" width="120">
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
    import { fetchUserDomain } from '@/api/userDomain'
    import { updateSignalAddr } from '@/api/user/p2pConfig'
    import {mapGetters} from 'vuex'
    import { trim } from '@/utils'

    const APPLY_TO_ALL = '*Apply To All*'

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
                applyAll: {
                  id: 0,
                  domain: APPLY_TO_ALL,
                  signals: '',
                  signals2: '',
                  signal_enabled: true,
                  blocked: false,
                }
            }
        },
        computed: {
            ...mapGetters([
                'device'
            ])
        },
        created() {
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
                        this.tableData.forEach(row => {
                          // console.warn(row)
                          if (row.signals && row.signals.length >= 0) {
                            row.signals = row.signals.join('\n')
                          }
                          if (row.signals2 && row.signals2.length >= 0) {
                            row.signals2 = row.signals2.join('\n')
                          }
                        })
                        for (let row of this.tableData) {
                          if (row.domain.endsWith('.localhost')) {
                            this.applyAll.signals = row.signals
                            this.applyAll.signals2 = row.signals2
                            this.applyAll.signal_enabled = row.signal_enabled
                            break
                          }
                        }
                        if (this.tableData.length > 1) {
                          this.applyAll.uid = this.tableData[0].uid
                          this.tableData.unshift(this.applyAll)
                        }
                    }
                    this.loading = false
                }).catch(() => {
                    this.loading = false
                })
            },
            handleSignalAddr(uid, id, data) {
                this.loading = true
                updateSignalAddr(uid, id, data).then(res => {
                    if (res.data.succeed) {
                        this.$notify({
                            title: this.$t('common.success'),
                            message: this.$t('p2pConfig.configSuccess'),
                            type: 'success'
                        });
                        this.fetchTableData()
                    } else {
                        const msg = res.data.msg || this.$t('p2pConfig.configFail')
                        this.$notify.error({
                            title: this.$t('common.error'),
                            message: msg,
                        });
                    }
                    this.loading = false
                })
                .catch(() => {
                    this.loading = false
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
                let signals2;
                if (!domain.signals2) {
                    signals2 = []
                } else {
                    signals2 = domain.signals2.split('\n').map(signal => trim(signal)).filter(signal => {
                        return signal !== ""
                    })
                }
                const data = {signals, signals2, enabled: domain.signal_enabled};
                this.handleSignalAddr(domain.uid, domain.id, data);
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

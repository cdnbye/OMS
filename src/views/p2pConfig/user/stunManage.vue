<template>
    <div :style="device === 'mobile' ? '' : 'padding: 30px 120px'">
        <el-alert :title="$t('p2pConfig.stunManage.desc')" style="margin-bottom: 20px"/>
        <el-table border :data="tableData" v-loading="loading">
            <el-table-column align="center" prop="domain" :label="$t('p2pConfig.name')" min-width="200" ></el-table-column>

            <el-table-column align="center"
                             :label="$t('p2pConfig.stunManage.addr')"
                             min-width="200">
                <template slot-scope="scope">
                    <el-input
                            type="textarea"
                            :autosize="{ minRows: 1, maxRows: 3}"
                            placeholder="stun:"
                            v-model="scope.row.stuns"
                            clearable
                    >
                    </el-input>
                </template>
            </el-table-column>

            <el-table-column :label="$t('domainTable.operation')" align="center" min-width="50" width="150">
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
    import { updateStuns } from '@/api/user/p2pConfig'
    import {mapGetters} from 'vuex'
    import { trim } from '@/utils'

    const APPLY_TO_ALL = '*Apply To All*'

    export default {
        name: 'stunManage',
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
                  stuns: '',
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
            fetchTableData(page = this.tableParam.page, pageSize = this.tableParam.pageSize) {
                this.loading = true
                fetchUserDomain(page, pageSize, {isvalid: true}).then(res => {
                    if (res.data) {
                        this.tableData = res.data.filter(row => {
                            // console.warn(row)
                            return !row.blocked
                        })
                        this.tableData.forEach(row => {
                            // console.warn(row)
                            if (row.stuns && row.stuns.length >= 0) {
                                row.stuns = row.stuns.join('\n')
                            }
                        })
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
            handleSubmit(domain) {
                this.loading = true
                let stuns;
                if (!domain.stuns) {
                    stuns = []
                } else {
                    stuns = domain.stuns.split('\n').map(stun => trim(stun)).filter(stun => {
                        return stun !== ""
                    })
                }
                updateStuns(domain.uid, domain.id, {stuns})
                    .then(res => {
                        if (res.data.succeed) {
                            this.$notify({
                                title: this.$t('common.success'),
                                message: this.$t('p2pConfig.configSuccess'),
                                type: 'success'
                            });
                            if (domain.id === 0) {
                              this.fetchTableData()
                            }
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

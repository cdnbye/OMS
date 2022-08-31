<template>
    <div :style="device === 'mobile' ? '' : 'padding: 30px 120px'">
        <el-alert :title="$t('p2pConfig.uploadRule.desc')" style="margin-bottom: 20px" />
        <el-table border :data="tableData" v-loading="loading">
            <el-table-column align="center" prop="domain" :label="$t('p2pConfig.name')"></el-table-column>
            <el-table-column align="center" :formatter="formatterStatus" :label="$t('p2pConfig.uploadRule.status')">
                <template  slot-scope="scope">
                    <el-switch v-if="!scope.row.blocked"
                               :value="scope.row.wifi_only"
                               active-color="#13ce66"
                               inactive-color="#ff4949"
                               :active-text="$t('p2pConfig.uploadRule.on')"
                               :inactive-text="$t('p2pConfig.uploadRule.off')"
                               @change="value => valueChange(scope.row, value)"> </el-switch>
                    <span v-else :style="'color: red'">
                        {{ formatterStatus(scope.row) }}
                     </span>
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
    import { p2pConfigWifiOnly } from '@/api/user/p2pConfig'
    import { mapGetters } from 'vuex'

    const APPLY_TO_ALL = '*Apply To All*'

    export default {
        name: 'uploadRule',
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
                  blocked: false,
                  wifi_only: false,
                }
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
                if(row.blocked) {
                    return this.$t('common.illegal')
                }
                // if(row.reviewing) {
                //     return this.$t('common.reviewing')
                // }
                return ""
            },
            fetchTableData(page=this.tableParam.page, pageSize=this.tableParam.pageSize) {
                this.loading = true
                fetchUserDomain(page, pageSize, {isvalid: true}).then(res => {
                    if(res.data) {
                        this.tableData = res.data
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
            handleP2PConfig(uid, id, data) {
                this.loading = true
                p2pConfigWifiOnly(uid, id, data)
                    .then(res => {
                        if(res.data.succeed) {
                            this.$notify({
                                title: this.$t('common.success'),
                                message: this.$t('p2pConfig.configSuccess'),
                                type: 'success'
                            });
                            if (id === 0) {
                              this.applyAll.wifi_only = !this.applyAll.wifi_only
                            }
                            this.fetchTableData()
                        } else {
                            this.$notify.error({
                                title: this.$t('common.error'),
                                message: this.$t('p2pConfig.configFail'),
                            });
                        }
                        this.loading = false
                    })
                    .catch(() => {
                        this.loading = false
                    })
            },
            valueChange(domain, value) {
                const data = { wifi_only: value }
                this.handleP2PConfig(domain.uid, domain.id, data)
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

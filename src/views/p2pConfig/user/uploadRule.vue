<template>
    <div :style="device === 'mobile' ? '' : 'padding: 30px 120px'">
        <el-alert :title="$t('p2pConfig.uploadRule.desc')" style="margin-bottom: 20px" />
        <el-table border :data="tableData" v-loading="loading">
            <el-table-column align="center" prop="domain" :label="$t('p2pConfig.name')"></el-table-column>
            <el-table-column align="center" :formatter="formatterStatus" :label="$t('p2pConfig.uploadRule.status')">
                <template  slot-scope="scope">
                    <el-switch v-if="!scope.row.blocked && !scope.row.reviewing" :value="scope.row.wifi_only" active-color="#13ce66" inactive-color="#ff4949" @change="value => valueChange(scope.row, value)"> </el-switch>
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
                if(row.reviewing) {
                    return this.$t('common.reviewing')
                }
                return ""
            },
            fetchTableData(page=this.tableParam.page, pageSize=this.tableParam.pageSize) {
                this.loading = true
                fetchUserDomain(page, pageSize, {isvalid: true}).then(res => {
                    if(res.data) {
                        this.tableData = res.data
                    }
                    this.loading = false
                }).catch(err => {
                    this.loading = false
                    console.log(err)
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
                            this.tableData.forEach(item => {
                                if(item.id === id) {
                                    item.wifi_only = data.wifi_only
                                }
                            })
                        } else {
                            this.$notify.error({
                                title: this.$t('common.error'),
                                message: this.$t('p2pConfig.configFail'),
                            });
                        }
                        this.loading = false
                    })
                    .catch(err => {
                        this.loading = false
                        console.log(err)
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

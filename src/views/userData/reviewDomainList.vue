<template>
    <div class="app-container">
        <el-table
                :data="tableData"
                v-loading="loading"
                style="width: 100%">
            <el-table-column align="center" label="域名">
                <template slot-scope="scope">
                    <span><a @click="hostClick(scope.row.domain)">{{scope.row.domain}}</a></span>
                </template>
            </el-table-column>

            <el-table-column align="center" label="平台">
                <template slot-scope="scope">
                    <span>{{ scope.row.native? 'native':'web' }}</span>
                </template>
            </el-table-column>

            <el-table-column align="center" label="未审核">
                <template slot-scope="scope">
                    <el-switch slot="reference" :value="scope.row.reviewing" active-color="red" @change="reviewingChange(scope.row)"></el-switch>
                </template>
            </el-table-column>

            <el-table-column align="center" label="黑名单">
                <template slot-scope="scope">
                    <el-switch slot="reference" :value="scope.row.blocked" active-color="red" @change="blacklistChange(scope.row)"></el-switch>
                </template>
            </el-table-column>

            <el-table-column align="center" label="白名单">
                <template slot-scope="scope">
                    <el-switch slot="reference" :value="scope.row.whitelist" active-color="green" @change="whiteListChange(scope.row)"></el-switch>
                </template>
            </el-table-column>

            <el-table-column align="center" label="联系方式">
                <template slot-scope="scope">
                    <span>{{ scope.row.email }}</span>
                </template>
            </el-table-column>

            <el-table-column label="action" align="center" class-name="small-padding fixed-width">
                <template slot-scope="scope">
                    <el-button type="primary" size="mini" @click="reviewClick(scope.row.play_url)">审核</el-button>
                    <el-button type="primary" size="mini" @click="checkBeianClick(scope.row.domain)">备案</el-button>
                </template>
            </el-table-column>
        </el-table>

        <div class="pagination-container">
            <el-pagination
                    :small="device === 'mobile'"
                    :layout="device === 'mobile' ? 'prev, pager, next' : 'sizes, prev, pager, next'"
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
    import { fetchDomainUnderReview, blockDomain, whiteDomain, reviewDomain, checkBeian } from '@/api/userDomain'
    import { mapGetters } from 'vuex'
    // import { getID } from '@/utils/auth'

    export default {
        data() {
            return {
                loading: false,
                showValid: true,
                showWhite: false,
                showBlack: false,
                showNative: false,
                tableData: [],
                tableParam: {
                    page: 1,
                    pageSize: 10
                },

                searchValue: '',
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
            hostClick(value) {
                window.open(`http://${value}`)
                window.open(`https://${value}`)
            },
            reviewClick(value) {
                // console.warn(`reviewClick ${value}`)
                if (!value.startsWith('http')) {
                    value = 'http://' + value
                }
                window.open(`${value}`)
            },
            blacklistChange(domain) {
                if(domain.whitelist && !domain.blocked) {
                    this.$message({
                        message: '不能同时添加到白名单和黑名单',
                        type: 'error'
                    })
                    return
                }
                const data = {
                    domain: domain.domain,
                    uid: domain.uid,
                    blocked: !domain.blocked
                }
                this.loading = true
                blockDomain(data)
                    .then(res => {
                        this.tableData.forEach(item => {
                            if(item.id === domain.id)
                                item.blocked = !item.blocked
                        })
                        this.$message({
                            message: domain.blocked ? '成功添加至黑名单' : '已从黑名单中移除',
                            type: 'success'
                        })
                        this.loading = false
                    })
                    .catch(err => {
                        this.loading = false
                    })
            },
            whiteListChange(domain) {
                if(!domain.whitelist && domain.blocked) {
                    this.$message({
                        message: '不能同时添加到白名单和黑名单',
                        type: 'error'
                    })
                    return
                }
                const data = {
                    domain: domain.domain,
                    uid: domain.uid,
                    whitelist: !domain.whitelist
                }
                this.loading = true
                whiteDomain(data)
                    .then(res => {
                        this.tableData.forEach(item => {
                            if(item.id === domain.id)
                                item.whitelist = !item.whitelist
                        })
                        this.$message({
                            message: domain.whitelist ? '成功添加至白名单' : '已从白名单中移除',
                            type: 'success'
                        })
                        this.loading = false
                    })
                    .catch(err => {
                        this.loading = false
                    })
            },
            reviewingChange(domain) {
                const data = {
                    domain: domain.domain,
                    uid: domain.uid,
                    reviewing: !domain.reviewing
                }
                this.loading = true
                reviewDomain(data)
                    .then(res => {
                        this.tableData.forEach(item => {
                            if(item.id === domain.id)
                                item.reviewing = !item.reviewing
                        })
                        this.$message({
                            message: domain.reviewing ? '正在审核' : '已审核',
                            type: 'success'
                        })
                        this.loading = false
                    })
                    .catch(err => {
                        this.loading = false
                    })
            },
            checkBeianClick(domain) {
                this.loading = true
                checkBeian(domain)
                    .then(res => {
                        if (res.ret === 0) {
                            const beianed = res.data.beianed
                            if (beianed) {
                                this.$message({
                                    message: '已备案',
                                    type: 'success'
                                })
                            } else {
                                this.$message({
                                    message: '未备案',
                                    type: 'error'
                                })
                            }
                        } else {
                            this.$message({
                                message: res.data.msg,
                                type: 'error'
                            })
                        }
                        this.loading = false
                    })
                    .catch(err => {
                        this.loading = false
                    })
            },
            formatData(data) {
                data.forEach(item => {
                })
                return data
            },
            fetchTableData(page=this.tableParam.page, pageSize=this.tableParam.pageSize) {
                this.loading = true
                fetchDomainUnderReview(page, pageSize).then(res => {
                    this.loading = false
                    this.tableData = this.formatData(res.data)
                }).catch(err => {
                    this.tableData = []
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
        }
    }
</script>

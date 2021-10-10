<template>
    <div :style="device === 'mobile' ? '' : 'padding: 30px 120px'">
        <el-alert :title="$t('hotChannels.desc')" style="margin-bottom: 20px" />
        <el-table border :data="tableData" v-loading="loading">
            <el-table-column align="center" width="50" type="index" :index="indexMethod"></el-table-column>
            <el-table-column align="center" prop="channel" :label="$t('hotChannels.content')"></el-table-column>
            <el-table-column align="center" width="150" prop="num" :label="$t('hotChannels.num')"></el-table-column>
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
    import { fetchHotChannels } from '@/api/user/liveData'
    import { mapGetters } from 'vuex'
    import { getID } from '@/utils/auth'

    export default {
        name: 'hotChannel',
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
            fetchTableData(page=this.tableParam.page, pageSize=this.tableParam.pageSize) {
                this.loading = true
                fetchHotChannels(getID(), page, pageSize).then(res => {
                    if(res.data) {
                        this.tableData = res.data
                    }
                    this.loading = false
                    window.clearTimeout(this.timer)
                    this.timer = window.setTimeout(() => {
                        this.fetchTableData()
                    }, 20000)
                }).catch(err => {
                    this.loading = false
                    console.log(err)
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
            indexMethod(index) {
                console.warn()
                return index + (this.tableParam.page-1)*this.tableParam.pageSize + 1;
            }
        },
        beforeDestroy() {
            window.clearTimeout(this.timer)
        }
    }
</script>


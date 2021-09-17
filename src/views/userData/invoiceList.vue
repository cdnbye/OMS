<template>
    <div class="app-container">
        <el-table
                :data="tableData"
                v-loading="loading"
                style="width: 100%">
            <el-table-column align="center" prop="uid" width="50" label="ID"></el-table-column>

            <el-table-column align="center" prop="email" label="邮箱"></el-table-column>

            <el-table-column align="center" prop="header" label="发票抬头"></el-table-column>

            <el-table-column label="开票信息" align="center" class-name="small-padding fixed-width">
                <template slot-scope="scope">
                    <el-button type="primary" size="mini" @click="copyInvoiceInfo(scope.row.info)">Copy</el-button>
                </template>
            </el-table-column>

            <el-table-column label="action" align="center" class-name="small-padding fixed-width">
                <template slot-scope="scope">
                    <el-button type="primary" size="mini" @click="approve(scope.row.uid)">已开</el-button>
                    <el-button type="primary" size="mini" @click="cancel(scope.row.uid)">撤销</el-button>
                </template>
            </el-table-column>



        </el-table>
    </div>
</template>

<script>
    import { fetchInvoices, updateInvoice } from '@/api/finance'
    import { copy } from '@/utils'

    export default {
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
        mounted() {
            this.fetchTableData()
        },
        methods: {
            fetchTableData() {
                this.loading = true
                fetchInvoices().then(res => {
                    if(res.data) {
                        this.tableData = res.data
                    }
                    this.loading = false
                }).catch(err => {
                    this.tableData = []
                    this.loading = false
                    console.log(err)
                })
            },
            approve(uid) {
                this.loading = true
                updateInvoice({
                    uid,
                    action: 'approve'
                }).then(() => {
                    this.loading = false
                    this.$notify({
                        title: this.$t('common.success'),
                        message: '开票成功',
                        type: 'success'
                    });
                    this.fetchTableData()
                }).catch(err => {
                    this.loading = false
                    console.log(err)
                })
            },
            cancel(uid) {
                this.loading = true
                updateInvoice({
                    uid,
                    action: 'cancel'
                }).then(() => {
                    this.loading = false
                    this.$notify({
                        title: this.$t('common.success'),
                        message: '撤销成功',
                        type: 'success'
                    });
                    this.fetchTableData()
                }).catch(err => {
                    this.loading = false
                    console.log(err)
                })
            },
            copyInvoiceInfo(info) {
                info = info.split('|');
                info = `${info[0]}
                ${info[1]}
                ${info[2]}
                ${info[3]}`
                copy(info, () => {this.$message.success('Copied(已复制)')})
            },
        }
    }
</script>

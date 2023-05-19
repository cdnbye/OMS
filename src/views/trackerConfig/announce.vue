<template>
    <div class="app-container">
        <el-col :xs="10" :sm="4" :lg="2" style="margin: 10px 0">
            <el-button style="float: 'left'" type="primary" @click="dialogFormVisible = true">新增Announce</el-button>
        </el-col>

        <el-table :data="tableData" style="width: 100%" v-loading="tableLoading">

            <el-table-column label="域名" align="center">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row }}</span>
                </template>
            </el-table-column>

            <el-table-column :label="$t('domainTable.operation')" align="center">
                <template slot-scope="scope">
                    <el-popover placement="top" width="160" :ref="'popover-' + scope.row" trigger="manual">
                        <p>确认删除吗</p>
                        <div style="text-align: right; margin: 0">
                            <el-button size="mini" type="text" @click="pClose(scope.row)">{{ $t('common.cancel') }}</el-button>
                            <el-button type="primary" size="mini" @click="handleDelete(scope.row)">{{ $t('common.ok') }}</el-button>
                        </div>
                        <el-button slot="reference" size="mini" type="danger" @click="pShow(scope.row)" :style="device==='mobile'?'':'margin-left: 10px'">{{ $t('common.delete') }}</el-button>
                    </el-popover>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog  :visible.sync="dialogFormVisible" :width="device==='mobile'?'85%':''">
            <div slot="title">
                <p>输入Announce域名</p>
                <!--<p style="font-size: 12px">{{ $t('app.createTip') }}</p>-->
            </div>
            <el-form :model="form" label-position="left" label-width="120px" ref="createForm">
                <el-form-item label="Domain" label-width="100px" required>
                    <el-input v-model="form.announce"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">{{ $t('common.cancel') }}</el-button>
                <el-button type="primary" @click="handleCreateItem" :loading="createItemLoading">{{ $t('common.ok') }}</el-button>
            </div>
        </el-dialog>

    </div>
</template>

<script>
    import { fetchAnnounces, addAnnounce, removeAnnounce } from '@/api/trackerConfig'
    import { mapGetters } from 'vuex'

    export default {
        name: "announce",
        data() {
            return {
                tableData: [],
                createItemLoading: false,
                tableLoading: false,
                dialogFormVisible: false,
                form: {
                    announce: '',
                },
            }
        },
        created() {
            this.fetchData()
        },
        computed: {
            ...mapGetters([
                'device'
            ])
        },
        methods: {
            pShow(id) {
                this.$refs[`popover-` + id].doShow()
            },
            pClose(id) {
                this.$refs[`popover-` + id].doClose()
            },
            fetchData() {
                this.tableLoading = true
                fetchAnnounces().then(res => {
                    if(res.data) {
                        if(res.data.announces) {
                            this.tableData = res.data.announces
                        }
                    }
                    this.tableLoading = false
                }).catch(err => {
                    this.tableLoading = false
                })
            },
            handleCreateItem() {
                this.$refs.createForm.validate(valid => {
                    if(valid) {
                        this.createItemLoading = true
                        addAnnounce(this.form)
                            .then(res => {
                                if(res.data.success) {
                                    this.dialogFormVisible = false
                                    this.createItemLoading = false
                                    this.$message.success("创建成功")
                                    this.fetchData()
                                }
                            })
                            .catch(err => {
                                this.createItemLoading = false
                            })
                    } else {
                        return false
                    }
                })
            },
            handleDelete(item) {
                const data = {
                    announce: item,
                }
                removeAnnounce(data)
                    .then(res => {
                        if(res.data.success) {
                            this.fetchData()
                            this.$message.success(this.$t('app.deleteItemSuccess'))
                            this.pClose(item)
                        }
                    })
                    .catch(err => {
                        this.pClose(item)
                        console.log(err)
                    })
            },
        }
    }
</script>

<style scoped>

</style>

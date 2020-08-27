<template>
    <div class="app-container">
        <el-col :xs="10" :sm="4" :lg="2" style="margin: 10px 0">
            <el-button style="float: 'left'" type="primary" @click="dialogFormVisible = true">新增Block Origin</el-button>
        </el-col>

        <el-table :data="tableData" style="width: 100%" v-loading="tableLoading">

            <el-table-column label="Origin" align="center">
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
                        <el-button slot="reference" size="mini" type="danger" @click="pShow(scope.row)" :style="device==='mobile'?'':'margin-left: 10px'">{{ $t('domainTable.delete') }}</el-button>
                    </el-popover>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog  :visible.sync="dialogFormVisible" :width="device==='mobile'?'85%':''">
            <div slot="title">
                <p>输入Origin(不包含端口)</p>
                <!--<p style="font-size: 12px">{{ $t('app.createTip') }}</p>-->
            </div>
            <el-form :model="form" label-position="left" label-width="120px" ref="createForm">
                <el-form-item label="Origin" label-width="100px" required>
                    <el-input v-model="form.block_origin"></el-input>
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
    import { fetchBlockOrigins, addBlockOrigin, removeBlockOrigin } from '@/api/trackerConfig'
    import { mapGetters } from 'vuex'

    export default {
        name: "blockorigins",
        data() {
            return {
                tableData: [],
                createItemLoading: false,
                tableLoading: false,
                dialogFormVisible: false,
                form: {
                    block_origin: '',
                },
            }
        },
        mounted() {
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
                fetchBlockOrigins().then(res => {
                    if(res.data) {
                        if(res.data.block_origins) {
                            this.tableData = res.data.block_origins
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
                        addBlockOrigin(this.form)
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
                    block_origin: item,
                }
                removeBlockOrigin(data)
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

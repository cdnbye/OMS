<template>
    <div class="app-container">

        <el-row style="float: left">
            <template>
                <el-col :xs="10" :sm="4" :lg="2" style="margin: 10px 0">
                    <el-button style="float: 'left'" type="primary" @click="dialogFormVisible = true">新增信令token</el-button>
                </el-col>
            </template>
        </el-row>

        <template>
            <el-table :data="tableData" style="width: 100%" v-loading="tableLoading">

                <el-table-column label="url" align="center">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.url }}</span>
                    </template>
                </el-table-column>

                <el-table-column label="token" align="center">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.token }}</span>
                    </template>
                </el-table-column>

                <el-table-column :label="$t('domainTable.operation')" align="center" width="300">
                    <template slot-scope="scope">
                        <el-popover placement="top" width="160" :ref="'popover-' + scope.row.url" trigger="manual">
                            <p>{{ $t('common.sureDelete') }}</p>
                            <div style="text-align: right; margin: 0">
                                <el-button size="mini" type="text" @click="pClose(scope.row.url)">{{ $t('common.cancel') }}</el-button>
                                <el-button type="primary" size="mini" @click="handleDelete(scope.row)">{{ $t('common.ok') }}</el-button>
                            </div>
                            <el-button slot="reference" size="mini" type="danger" @click="pShow(scope.row.url)" :style="device==='mobile'?'':'margin-left: 10px'">{{ $t('domainTable.delete') }}</el-button>
                        </el-popover>
                    </template>
                </el-table-column>
            </el-table>

        </template>

        <el-dialog  :visible.sync="dialogFormVisible" :width="device==='mobile'?'85%':''">
            <div slot="title">
                <p>新增信令token</p>
                <!--<p style="font-size: 12px">{{ $t('app.createTip') }}</p>-->
            </div>
            <el-form :model="form" label-position="left" label-width="120px" ref="createForm">
                <el-form-item prop="url" label="信令URL" label-width="100px" required>
                    <el-input v-model="form.url" placeholder="wss://"></el-input>
                </el-form-item>

                <el-form-item prop="token" label-width="100px" required>
                    <template slot="label">
                        <span>token</span>
                    </template>
                    <el-input v-model="form.token"></el-input>
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
    import { fetchSignalToken, addSignalToken, removeSignalToken } from '@/api/trackerConfig'
    import { mapGetters } from 'vuex'

    export default {
        name: 'signalToken',
        data() {
            return {
                tableData: [],
                createItemLoading: false,
                tableLoading: false,
                dialogFormVisible: false,
                popoverVisible: false,
                deletePopVisible: false,
                form: {
                    url: '',
                    token: '',
                },
            }
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
                fetchSignalToken().then(res => {
                    if(res.data) {
                        if(res.data.items) {
                            this.tableData = res.data.items
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
                        addSignalToken(this.form)
                            .then(res => {
                                if(res.ret === 0) {
                                    this.dialogFormVisible = false
                                    this.createItemLoading = false
                                    // this.$message.success(this.$t('app.createItemSuccess'))
                                    this.$notify({
                                        title: this.$t('common.success'),
                                        message: this.$t('app.createItemSuccess'),
                                        type: 'success'
                                    });
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
                    url: item.url,
                }
                removeSignalToken(data)
                    .then(res => {
                        this.fetchData()
                        // this.$message.success(this.$t('app.deleteItemSuccess'))
                        this.$notify({
                            title: this.$t('common.success'),
                            message: this.$t('app.deleteItemSuccess'),
                            type: 'success'
                        });
                        this.pClose(item.url)
                    })
                    .catch(err => {
                        this.pClose(item.url)
                        console.log(err)
                    })
            },
        },
        mounted() {
            this.fetchData()
        },
    }
</script>

<style scoped>

</style>

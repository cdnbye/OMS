<template>
    <div :style="device === 'mobile' ? '' : 'padding: 30px 120px'">
        <el-table border :data="tableData" v-loading="loading">
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-form  inline align="left">
                        <el-form-item  label="users">
                            <span>{{ props.row.users.join(' ') }}</span>
                        </el-form-item>
                    </el-form>
                    <el-form  inline align="left">
                      <el-form-item  label="channel">
                        <span>{{ props.row.channel }}</span>
                      </el-form-item>
                    </el-form>
                    <el-form v-if="props.row.columns.length > 1" inline align="left">
                        <el-form-item  label="columns">
                            <span>{{ props.row.columns.join('+') }}</span>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column align="center" width="50" type="index" :index="indexMethod"></el-table-column>
            <el-table-column align="center" prop="channel_id" :label="$t('hotChannels.content')"></el-table-column>
            <el-table-column align="center" width="100" prop="num" :label="$t('hotChannels.num')"></el-table-column>
            <el-table-column align="center" width="100" prop="columns.length" label="槽数"></el-table-column>
            <el-table-column align="center" width="100" prop="live" label="类型">
              <template slot-scope="scope">
                {{ scope.row.live ? '直播' : '点播' }}
              </template>
            </el-table-column>
            <el-table-column align="center" width="200" label="操作">
               <template slot-scope="scope">
                 <el-button @click="handleCopy(scope.row.channel_id)" type="primary">Copy</el-button>
                 <el-button type="primary" @click="splitChannel(scope.row.channel_id)">拆分</el-button>
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
    import { fetchHotChannels, splitHotChannels } from '@/api/liveData'
    import { mapGetters } from 'vuex'
    import clip from '@/utils/clipboard'

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
        created() {
            this.fetchTableData()
        },
        methods: {
            handleCopy(text) {
              clip(text, event);
            },
            fetchTableData(page=this.tableParam.page, pageSize=this.tableParam.pageSize) {
                this.loading = true
                fetchHotChannels(page, pageSize).then(res => {
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
                return index + (this.tableParam.page-1)*this.tableParam.pageSize + 1;
            },
            splitChannel(channelId) {
              splitHotChannels({
                channel_id: channelId,
              }).then(res => {
                const data = res.data
                const { columns } = data
                this.$notify({
                  title: this.$t('common.success'),
                  message: `当前槽数：${columns}`,
                  type: 'success'
                });
              })
            }
        },
        beforeDestroy() {
            window.clearTimeout(this.timer)
        },
    }
</script>

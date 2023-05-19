<template>
    <div :style="device === 'mobile' ? '' : 'padding: 30px 120px'">
        <el-alert :title="$t('hotChannels.desc')" style="margin-bottom: 20px" />
        <el-table border :data="tableData" v-loading="loading">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form  inline align="left">
                  <el-form-item  label="base64">
                    <span class="base64">{{ props.row.channel_id }}</span>
                  </el-form-item>
                </el-form>
                <el-button @click="handleCopy(props.row.channel_id)" type="primary">
                  Copy
                </el-button>
              </template>
            </el-table-column>
            <el-table-column align="center" width="50" type="index" :index="indexMethod"></el-table-column>
            <el-table-column align="center" prop="channel" :label="$t('hotChannels.content')"></el-table-column>
            <el-table-column align="center" width="100" prop="live" label="Type">
              <template slot-scope="scope">
                {{ scope.row.live ? 'Live' : 'VOD' }}
              </template>
            </el-table-column>
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
                return index + (this.tableParam.page-1)*this.tableParam.pageSize + 1;
            }
        },
        beforeDestroy() {
            window.clearTimeout(this.timer)
        }
    }
</script>

<style scoped lang="scss">
.base64 {
  display: inline-block;
  width: 60%;
  word-wrap: break-word;
  white-space: normal;
}
</style>

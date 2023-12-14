<template>
    <div :style="device === 'mobile' ? '' : 'padding: 30px 120px'">
        <el-alert :title="$t('p2pConfig.uploadRule.desc')" style="margin-bottom: 20px" />
        <el-table border :data="tableData" v-loading="loading">
            <el-table-column align="center" prop="domain" :label="$t('p2pConfig.name')" min-width="200"></el-table-column>
            <el-table-column align="center" :formatter="formatterStatus" :label="$t('p2pConfig.uploadRule.status')" min-width="200">
                <template  slot-scope="scope">
                    <el-switch v-if="!scope.row.blocked"
                               v-model="scope.row.wifi_only"
                               active-color="#13ce66"
                               inactive-color="#ff4949"
                               :active-text="$t('common.on')"
                               :inactive-text="$t('common.off')"
                               @change="valueChange(scope.row)"> </el-switch>
                    <span v-else :style="'color: red'">
                        {{ formatterStatus(scope.row) }}
                     </span>
                </template>
            </el-table-column>
            <el-table-column align="center" :formatter="formatterStatus" min-width="200">
              <template slot="header" slot-scope="scope">
                {{ $t('seeder.seedPreferred') }}&nbsp;<PointTip :content="$t('seeder.seedPreferredTip')" />
              </template>
              <template  slot-scope="scope">
                <el-switch v-if="!scope.row.blocked"
                           v-model="scope.row.seed_preferred"
                           active-color="#13ce66"
                           inactive-color="#ff4949"
                           :active-text="$t('common.on')"
                           :inactive-text="$t('common.off')"
                           @change="valueChange(scope.row)"> </el-switch>
                <span v-else :style="'color: red'">
                          {{ formatterStatus(scope.row) }}
                       </span>
              </template>
            </el-table-column>
          <el-table-column align="center" :formatter="formatterStatus"  min-width="320">
              <template slot="header" slot-scope="scope">
                {{ $t('seeder.urgentRatio') }}&nbsp;<PointTip :content="$t('seeder.urgentRatioTip')" />
              </template>
              <template  slot-scope="scope">
                <template v-if="!scope.row.blocked">
                  <el-input-number
                      v-model="scope.row.urgent_ratio"
                      :min="0" :max="1000"
                      style="margin-right: 10px"></el-input-number>
                  <el-button :loading="loading" type="primary" @click.native.prevent="changeUrgentRatio(scope.row)">{{$t('common.ok')}}</el-button>
                </template>

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
    import { p2pConfigWifiOnly, p2pConfigUrgentRatio } from '@/api/user/p2pConfig'
    import { mapGetters } from 'vuex'
    import PointTip from '@/components/PointTip'

    const APPLY_TO_ALL = '*Apply To All*'

    export default {
        name: 'uploadRule',
      components: {
        PointTip,
      },
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
                  seed_preferred: false,
                  urgent_ratio: undefined,
                }
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
            changeUrgentRatio(domain) {
              this.loading = true
              const id = domain.id
              const uid = domain.uid
              p2pConfigUrgentRatio(uid, id, {
                urgent_ratio: domain.urgent_ratio,
              })
                  .then(res => {
                    if (res.data.succeed) {
                      this.$notify({
                        title: this.$t('common.success'),
                        message: this.$t('p2pConfig.configSuccess'),
                        type: 'success'
                      });
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
                        for (let row of this.tableData) {
                          if (row.domain.endsWith('.localhost')) {
                            this.applyAll.wifi_only = row.wifi_only
                            this.applyAll.seed_preferred = row.seed_preferred
                            this.applyAll.urgent_ratio = row.urgent_ratio
                            break
                          }
                        }
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
            valueChange(domain) {
                const data = { wifi_only: domain.wifi_only, seed_preferred: domain.seed_preferred }
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

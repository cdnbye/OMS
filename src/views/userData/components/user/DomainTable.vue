<template>
<div class="app-container">
  <el-alert
    :title="$t('domainTable.title')"
    :description="$t('domainTable.desc')"
    type="info"
    show-icon>
  </el-alert>
  <div class="tool-container">
    <el-button type="primary" @click="dialogVisible = true">{{ $t('domainTable.bindDomain') }}</el-button>
    <el-tooltip :content="$t('domainTable.tokenOnly')" placement="top">
      <el-switch
          v-model="shadowEnabled"
          active-text="Token Only"
          active-color="#13ce66"
          inactive-color="#ff4949"
          @change="shadowChanged"
      >
      </el-switch>
    </el-tooltip>
  </div>

  <el-row>
    <template v-if="showCopyToken">
      <CopyToken :token="profile.token"></CopyToken>
    </template>
  </el-row>

  <el-table border :data="tableData" v-loading="loading" style="width: 100%; margin-top: 10px">
    <el-table-column align="center" prop="domain" :label="$t('domainTable.domain')"></el-table-column>
    <el-table-column align="center" :label="$t('domainTable.status')">
      <template slot-scope="scope">
        <span :style="scope.row.blocked || !scope.row.isValid || scope.row.disable_p2p?'color: red':'color: green'">
          {{ formatterStatus(scope.row) }}
        </span>
      </template>
    </el-table-column>
    <!--<el-table-column align="center" prop="text" label="text"></el-table-column>-->
    <el-table-column :label="$t('domainTable.operation')" align="center" fixed="right">
      <template slot-scope="scope">
        <template>
          <el-button v-if="scope.row.isValid !== 1" type="primary" size="mini" @click="handleCheck(scope.row)">{{ $t('domainTable.certification') }}</el-button>
          <el-popover
            :style="device==='mobile'?'':'margin-left: 10px'"
            trigger="manual"
            placement="top"
            width="200"
            :ref="'popover-' + scope.row.id">
            <p>{{ $t('domainTable.tip') }}</p>
            <div style="text-align: right; margin: 0">
              <el-button type="text" size="mini" @click="pClose(scope.row.id)">{{ $t('common.cancel') }}</el-button>
              <el-button type="primary" size="mini" @click="handleDeleteDomain(scope.row)">{{ $t('common.ok') }}</el-button>
            </div>
            <el-button :disabled="scope.row.shadow"
                       slot="reference"
                       type="danger"
                       size="mini"
                       @click="pShow(scope.row.id)"
            >{{ $t('domainTable.delete') }}</el-button>
          </el-popover>
        </template>
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

  <el-dialog
    :title="$t('domainTable.verifyDomain')"
    :visible.sync="checkDialogVisible"
    :width="device === 'mobile' ? '90%' : '30%' ">
    <el-alert
      title=""
      style="text-align: left"
      type="warning"
      :description="$t('domainTable.certificationTip')"
      :closable="false">
    </el-alert>
    <el-form>
      <el-form-item :label="$t('domainTable.userVerifyDomain.verifyWay')">
        <el-radio v-model="checkSelect" label="dns">{{ $t('domainTable.userVerifyDomain.DNSVerify') }}</el-radio>
        <el-radio v-model="checkSelect" label="file">{{ $t('domainTable.userVerifyDomain.fileVerify') }}</el-radio>
      </el-form-item>
    </el-form>

    <template v-if="checkSelect === 'dns'">
      <div>
        <ol>
          <li>
            <div class="pv-content">
              <!-- <h4>{{ $t('domainTable.userVerifyDomain.verifyTipHead') }}{{ getDomain(checkDomainData.domain) }}{{ $t('domainTable.userVerifyDomain.verifyTipEnd') }}</h4> -->
              <h4>{{ $t('domainTable.userVerifyDomain.verifyTipHead') }}{{ checkDomainData.domain }}{{ $t('domainTable.userVerifyDomain.verifyTipEnd') }}</h4>
              <h4>{{ checkDomainData.text }}</h4>
            </div>
          </li>
          <li>
            <div class="pv-content pv-content-last">
              <h4>{{ $t('domainTable.doneTip') }}</h4>
            </div>
          </li>
        </ol>
      </div>
    </template>

    <template v-else>
      <div>
        <ol>
          <li>
            <div class="pv-content">
              <h4>{{ $t('domainTable.userVerifyDomain.downloadFileHead') }}<a @click="saveFile">{{ $t('domainTable.userVerifyDomain.downloadFileEnd') }}</a></h4>
            </div>
          </li>
          <li>
            <div class="pv-content">
              <h4>{{ $t('domainTable.userVerifyDomain.uploadFile') }}http://{{checkDomainData.domain}}/ or https://{{checkDomainData.domain}}/</h4>
              <h4>{{ $t('domainTable.userVerifyDomain.fileName') }}</h4>
            </div>
          </li>
          <li>
            <div class="pv-content">
              <h4>{{ $t('domainTable.userVerifyDomain.navVisitHead') }}http(s)://{{checkDomainData.domain}}/auth.txt{{ $t('domainTable.userVerifyDomain.navVisitEnd') }}</h4>
            </div>
          </li>
          <li>
            <div class="pv-content pv-content-last">
              <h4>{{ $t('domainTable.doneTip') }}</h4>
            </div>
          </li>
        </ol>
      </div>
    </template>

    <span slot="footer" class="dialog-footer">
      <el-button @click="checkDialogVisible = false">{{ $t('domainTable.verifyLater') }}</el-button>
      <el-button :loading="checkDomainLoading" type="primary" @click="handleCheckDomain">{{ $t('domainTable.verifyNow') }}</el-button>
    </span>
  </el-dialog>
  <el-dialog
    :title="$t('domainTable.bindDomain')"
    :visible.sync="dialogVisible"
    :width="device === 'mobile' ? '90%' : '50%' ">
    <el-form ref="domainForm" :model="domainFormData" :rules="domainRules">
      <el-form-item prop="domain">
        <el-input
          type="textarea"
          :autosize="{ minRows: 3, maxRows: 10}"
          v-model="domainFormData.domain"
          :placeholder="$t('domainTable.bindDomainTip')"/>
        <br>
      </el-form-item>
      <el-form-item prop="playUrl">
        <el-input
          type="textarea"
          rows="2"
          v-model="domainFormData.playUrl"
          :placeholder="$t('domainTable.playUrlTip')"/>
      </el-form-item>
    </el-form>
    <div class="bind-warning" :style="device==='mobile'?'padding: 0px 8px 5px;':'padding: 0px 20px 20px;'">{{ $t('domainTable.bindWarning') }}</div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">{{ $t('common.cancel') }}</el-button>
      <el-button type="primary" @click="addDomainSubmit">{{ $t('common.ok') }}</el-button>
    </span>
  </el-dialog>

</div>
</template>

  <script>
  import { fetchUserDomain, bindDomain, checkDomain, deleteDomain, shadowDomain } from '@/api/userDomain'
  import { validateURL } from '@/utils/validate'
  import { downloadFile } from '@/utils'
  import { mapGetters } from 'vuex'
  import { fetchAllDomainAndApp } from '@/utils'
  import { trim } from '@/utils'
  import CopyToken from "@/components/CopyToken";

  export default {
    name: 'UserDomain',
    components: {
      CopyToken,
    },
    data() {
      const formValidateURL = (rule, value, callback) => {
        const domains = value.split('\n').map(dm => trim(dm)).filter(dm => {
          return dm !== ""
        })
        if (domains.length > 50) {
          callback(new Error("too many domains"))
        }
        domains.forEach(dm => {
          if(!validateURL(dm)) {
            const error = this.$t('domainTable.bindDomainTError')
            callback(new Error(error))
          } else {
            callback()
          }
        })
      }
      return {
        loading: false,
        showCopyToken: false,
        tableData: [],
        tableParam: {
          page: 1,
          pageSize: 10
        },
        dialogVisible: false,
        shadowEnabled: false,
        checkDialogVisible: false,
        checkSelect: 'dns',
        checkDomainLoading: false,
        checkDomainData: {
          domain: '',
          text: '',
          id: 0,
        },

        domainFormData: {
          domain: '',
          playUrl: '',
        },
        domainRules: {
          domain: [{ required: true, trigger: 'blur', validator: formValidateURL }],
          playUrl: [{ required: true, trigger: 'blur'}],
        }
      }
    },
    computed: {
      ...mapGetters([
        'device',
        'profile'
      ]),
    },
    watch: {
      profile: {
        handler: function (val) {
          if (val.token && this.shadowEnabled) {
            this.showCopyToken = true
          }
        },
        immediate: true,
        deep: true,
      }
    },
    methods: {
      shadowChanged() {
        shadowDomain({enabled: this.shadowEnabled}).then(() => {
          this.fetchTableData()
          this.$notify({
            title: this.$t('common.success'),
            type: 'success'
          });
        }).catch(e => {
            this.$notify.error({
              title: this.$t('common.error'),
              message: e,
            });
            this.shadowEnabled = !this.shadowEnabled
        })
      },
      pClose(id) {
        this.$refs[`popover-` + id].doClose()
      },
      pShow(id) {
        this.$refs[`popover-` + id].doShow()
      },
      fetchTableData(page=this.tableParam.page, pageSize=this.tableParam.pageSize) {
        this.loading = true
        fetchUserDomain(page, pageSize, {web: true}).then(res => {
          if(res.data) {
            this.tableData = [...res.data]
          }
          this.loading = false
          fetchAllDomainAndApp().then(domains => {
            let shadowEnabled = false;
            for (let item of domains) {
              if (item.shadow) {
                shadowEnabled = true
              }
            }
            this.shadowEnabled = shadowEnabled
            if (!this.profile.token) {
              this.$store.dispatch('getProfile')
            } else {
              this.showCopyToken = this.shadowEnabled
            }
          })

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
      handleCheck(data) {
        this.checkDomainData = {...data}
        this.checkDialogVisible = true
      },
      handleCheckDomain() {
        this.checkDomainLoading = true
        checkDomain(this.checkDomainData.id).then(res => {
          this.fetchTableData()
          this.$notify({
              title: this.$t('common.success'),
              message: this.$t('domainTable.verifySuccess'),
              type: 'success'
          });
          this.checkDomainLoading = false
          this.checkDialogVisible = false
        }).catch(err => {
          this.checkDomainLoading = false
          console.log(err)
        })
      },
      handleDeleteDomain(domainData) {
        deleteDomain(domainData.id).then(res => {
          this.$notify({
              title: this.$t('common.success'),
              message: this.$t('common.deleteSuccess'),
              type: 'success'
          });
          this.pClose(domainData.id)
          this.fetchTableData()
        }).catch(err => {
          this.pClose(domainData.id)
          console.log(err)
        })
      },
      addDomainSubmit() {
        this.domainFormData.domain = trim(this.domainFormData.domain)
        this.domainFormData.playUrl = trim(this.domainFormData.playUrl)
        this.$refs.domainForm.validate(valid => {
          if(valid) {
            const domains = this.domainFormData.domain.split('\n').map(dm => trim(dm).toLowerCase()).filter(dm => {
              return dm !== ""
            })
            const data = {
              play_url: this.domainFormData.playUrl,
            }
            if (domains.length === 1) {
              data.domain = domains[0];
            } else {
              data.domains = domains;
            }
            bindDomain(data).then(res => {
              this.dialogVisible = false
              this.fetchTableData()
            }).catch(error => {
              console.log(error)
            })
          } else {
            return false
          }
        })
      },
      formatterStatus(row) {
        if(row.blocked) {
          return this.$t('domainTable.illegal')
        }
        // if(row.reviewing) {
        //   return this.$t('common.reviewing')
        // }
        if (row.disable_p2p) {
          return this.$t('common.userClosed')
        }
        return row.isValid === 0 ? this.$t('domainTable.unavailable') : this.$t('common.available')
      },
      saveFile() {
        downloadFile(this.checkDomainData.text, 'auth.txt')
      },
    },
    mounted() {
      this.fetchTableData()
    }
  }
  </script>

<style scoped>
  ol {
    display: table;
    width: 100%;
    margin: 0
  }
  a {
    color: #006eff;
    margin-left: 5px;
  }
  li {
    position: relative;
    min-height: 50px;
    display: table-row;
    table-layout: fixed;
    text-align: left;
  }
  h4 {
    font-weight: 400;
  }
  .pv-content {
    display: table-cell;
    padding: 0 0 22px 24px;
    position: relative;
    min-height: 28px;
    vertical-align: top;
  }
  .pv-content-last:before {
    display: none !important;
  }
  .pv-content:before {
    content: "";
    display: block;
    position: absolute;
    top: 10px;
    bottom: -4px;
    left: -2px;
    border-left: 1px solid #ddd;
  }
  .pv-content:after {
    top: 3px;
    left: -5px;
    width: 7px;
    height: 7px;
    border-color: #006eff;
    background-color: #006eff;

    content: "";
    display: inline-block;
    position: absolute;
    border-radius: 100%;
    border: 2px solid transparent;
  }
  .bind-warning {
    text-align: left;
    position: absolute;
    left: 0;
    bottom: 0;

    width: 50%;
  }
  .tool-container {
    display: flex;
    align-items: center;
    margin: 10px 0;
    justify-content: space-between;
  }
</style>


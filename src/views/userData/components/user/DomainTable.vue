<template>
<div class="app-container">
  <el-button type="primary" @click="dialogVisible = true" style="float: left; margin-bottom: 20px">{{ $t('domainTable.bindDomain') }}</el-button>

  <p>{{ $t('dashboard.currentDomain') }}{{currentDomain.domain ? currentDomain.domain : $t('domainTable.none') }}&nbsp;<a @click="selectDomainVisible = true">{{ $t('dashboard.switch') }}</a></p>

  <el-table
    border
    :data="tableData"
    v-loading="loading"
    style="width: 100%">

    <el-table-column
      align="center"
      prop="domain"
      :label="$t('domainTable.domain')">
    </el-table-column>

    <el-table-column
      align="center"
      prop="isValid"
      :formatter="formatter"
      :label="$t('domainTable.status')">
    </el-table-column>

    <el-table-column
      align="center"
      prop="text"
      label="text">
    </el-table-column>

    <el-table-column :label="$t('domainTable.operation')" align="center" fixed="right">
      <template slot-scope="scope">
        <el-button type="text" size="mini" @click="handleCheck(scope.row)">{{ $t('domainTable.certification') }}</el-button>
        <el-popover
          style="margin-left: 10px"
          placement="top"
          width="160"
          v-model="scope.row.visible">
          <p>{{ $t('domainTable.tip') }}</p>
          <div style="text-align: right; margin: 0">
            <el-button size="mini" type="text" @click="scope.row.visible = false">{{ $t('common.cancel') }}</el-button>
            <el-button type="primary" size="mini" @click="handleDeleteDomain(scope.row)">{{ $t('common.ok') }}</el-button>
          </div>
          <el-button slot="reference" type="text" size="mini" @click="handleDelete(scope.row)">{{ $t('domainTable.delete') }}</el-button>
        </el-popover>
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
    :width="device === 'mobile' ? '90%' : '30%' "
  >
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
              <h4>{{ $t('domainTable.userVerifyDomain.verifyTipHead') }}{{ get1Domain(checkDomainData.domain) }}{{ $t('domainTable.userVerifyDomain.verifyTipEnd') }}</h4>
              <h4>{{checkDomainData.text}}</h4>
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
              <h4>{{ $t('domainTable.userVerifyDomain.uploadFile') }}{{checkDomainData.domain}}</h4>
              <h4>{{ $t('domainTable.userVerifyDomain.fileName') }}</h4>
            </div>
          </li>
          <li>
            <div class="pv-content">
              <h4>{{ $t('domainTable.userVerifyDomain.navVisitHead') }}{{checkDomainData.domain}}/auth.txt{{ $t('domainTable.userVerifyDomain.navVisitEnd') }}</h4>
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
          :rows="3"
          v-model="domainFormData.domain"
          :placeholder="$t('domainTable.bindDomainTip')"/>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">{{$t('common.cancel')}}</el-button>
      <el-button type="primary" @click="addDomainSubmit">{{$t('common.ok')}}</el-button>
    </span>
  </el-dialog>

  <el-dialog
    :title="$t('dashboard.switchDomain')"
    :visible.sync="selectDomainVisible"
    :width="device === 'mobile' ? '80%' : '30%'">
    <el-select v-model="selectValue" :placeholder="$t('domainTable.select')" style="width: 80%">
      <template v-for = "value in tableData">
        <el-option
          v-if="value.isValid === 1"
          :key="value.domain"
          :label="value.domain"
          :value="value.domain">
        </el-option>
      </template>
    </el-select>
    <span slot="footer" class="dialog-footer">
      <el-button @click="selectDomainVisible = false">{{ $t('common.cancel')}}</el-button>
      <el-button type="primary" @click="handleSelect">{{ $t('common.ok')}}</el-button>
    </span>
  </el-dialog>

</div>
</template>

  <script>
  import { fetchUserDomain, bindDomain, checkDomain, deleteDomain } from '@/api/userDomain'
  import { validateURL } from '@/utils/validate'
  import { downloadFile } from '@/utils'
  import { mapGetters } from 'vuex'
  import Cookies from 'js-cookie'
  import store from '@/store'

  export default {
    name: 'UserDomain',
    data() {
      const formValidateURL = (rule, value, callback) => {
        if(!validateURL(value)) {
          const error = '请输入正确的域名'
          callback(new Error(error))
        } else {
          callback()
        }
      }
      return {
        loading: false,
        tableData: [],
        tableParam: {
          page: 1,
          pageSize: 10
        },
        dialogVisible: false,

        selectDomainVisible: false,
        selectValue: '',

        checkDialogVisible: false,
        checkSelect: 'dns',
        checkDomainLoading: false,
        checkDomainData: {
          domain: '',
          text: '',
          id: 0,
        },

        domainFormData: {
          domain: ''
        },
        domainRules: {
          domain: [{ required: true, trigger: 'blur', validator: formValidateURL }],
        }
      }
    },
    computed: {
    ...mapGetters([
      'currentDomain',
      'device'
    ])
  },
    methods: {
      fetchTableData(page=this.tableParam.page, pageSize=this.tableParam.pageSize) {
        this.loading = true
        fetchUserDomain(page, pageSize).then(res => {
          if(res.data) {
            res.data.forEach((item, index) => {
              item.visible = false
            })
            this.tableData = [...res.data]
          }
          this.loading = false
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
        this.checkDomainData.text = data.text
        this.checkDomainData.domain = data.domain
        this.checkDomainData.id = data.id
        this.checkDialogVisible = true
      },
      handleCheckDomain() {
        this.checkDomainLoading = true
        checkDomain(this.checkDomainData.id).then(res => {
          this.$message({
            message: '验证成功',
            type: 'success'
          })
          this.checkDomainLoading = false
          this.checkDialogVisible = false
        }).catch(err => {
          this.checkDomainLoading = false
          console.log(err)
        })
      },
      handleDelete(val) {
        val.visible = true
      },
      get1Domain(domain) {
        let temp = ''
        temp = domain.replace('http://', '')
        temp = temp.replace('https://', '')
        if (temp.indexOf('/') > -1)
          temp = temp.substr(0, temp.indexOf('/'))
        if (temp.indexOf(':') > -1)
          temp = temp.substr(0, temp.indexOf(':'))
        const arr = temp.split('.')
        return arr[arr.length - 2] + '.' + arr[arr.length - 1]
      },
      handleDeleteDomain(domainData) {
        deleteDomain(domainData.id).then(res => {
          this.$message({
            message: '删除成功',
            type: 'success'
          })
          let index = 0
          this.tableData.forEach((item, index) => {
            if(item.id === domainData.id) {
              index = index
            }
          })
          this.tableData.splice(index, 1)
          domainData.visible = false
        }).catch(err => {
          console.log(err)
        })
      },
      addDomainSubmit() {
        this.$refs.domainForm.validate(valid => {
          if(valid) {
            bindDomain(this.domainFormData).then(res => {
              this.dialogVisible = false
              this.tableData.push(res.data)
            }).catch(error => {
              console.log(error)
            })
          } else {
            return false
          }
        })
      },
      formatter(row) {
        return row.isValid === 0 ? this.$t('domainTable.unavailable') : this.$t('domainTable.available')
      },
      saveFile() {
        downloadFile(this.checkDomainData.text, 'auth.txt')
      },

      //
      handleSelect() {
        if(this.selectValue) {
          this.tableData.forEach(item => {
            if(item.domain === this.selectValue) {
              store.dispatch('setCurrentDomain', item).then(() => {
                this.selectDomainVisible = false
              })
            }
          })
        }
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
</style>


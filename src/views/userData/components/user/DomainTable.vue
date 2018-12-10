<template>
<div class="app-container">
  <el-button type="primary" @click="dialogVisible = true" style="float: left; margin-bottom: 20px">{{ $t('domainTable.bindDomain') }}</el-button>
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
    title="验证域名"
    :visible.sync="checkDialogVisible"
    :width="device === 'mobile' ? '90%' : '30%' "
  >
    <el-alert
      title=""
      style="text-align: left"
      type="warning" 
      description="您需要对添加的网站进行权限认证才能使用安全扫描功能，公网域名可以选择以下任意一种方式进行验证，内网域名由于安全原因只支持DNS验证。"
      :closable="false">
    </el-alert>
    <el-form>
      <el-form-item label="验证方式">
        <el-radio v-model="checkSelect" label="dns">DNS验证</el-radio>
        <el-radio v-model="checkSelect" label="file">文件验证</el-radio>
      </el-form-item>
    </el-form>

    <template v-if="checkSelect === 'dns'">
      <div>
        <ol>
          <li>
            <div class="pv-content">
              <h4>设置cdnbye_dns_auth.cdnbye.com的TXT域名解析内容为下列字符：</h4>
              <h4>{{checkDomainData.text}}</h4>
            </div>
          </li>
          <li>
            <div class="pv-content pv-content-last">                
              <h4>完成操作后请点击"立即验证"按钮</h4>
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
              <h4>下载专有的<a @click="saveFile">HTML验证文件</a></h4>
            </div>
          </li>
          <li>
            <div class="pv-content">
              <h4>将该文件上传至：{{checkDomainData.domain}}</h4>
              <h4>注意文件名称不要修改，文件名称为auth.txt</h4>
            </div>
          </li>
          <li>
            <div class="pv-content">
              <h4>用浏览器访问{{checkDomainData.domain}}/auth.txt,确认是否上传成功</h4>
            </div>  
          </li>
          <li>
            <div class="pv-content pv-content-last">                
              <h4>完成操作后请点击"立即验证"按钮</h4>
            </div>  
          </li>
        </ol>
      </div>
    </template>

    <span slot="footer" class="dialog-footer">
      <el-button @click="checkDialogVisible = false">稍后验证</el-button>
      <el-button :loading="checkDomainLoading" type="primary" @click="handleCheckDomain">立即验证</el-button>
    </span>
  </el-dialog>

  <el-dialog
    title="绑定域名"
    :visible.sync="dialogVisible"
    :width="device === 'mobile' ? '90%' : '50%' ">
    <el-form ref="domainForm" :model="domainFormData" :rules="domainRules">
      <el-form-item prop="domain">
        <el-input 
          type="textarea"
          :rows="3"
          v-model="domainFormData.domain"
          placeholder="输入一个网站，例如
http://www.example.com:8080
https://180.163.26.39" />
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="addDomainSubmit">确 定</el-button>
    </span>
  </el-dialog>
</div>
</template>

  <script>
  import { fetchUserDomain, bindDomain, checkDomain, deleteDomain } from '@/api/userDomain'
  import { validateURL } from '@/utils/validate'
  import { downloadFile } from '@/utils'
  import { mapGetters } from 'vuex'
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
        'device'
      ])
    },
    methods: {
      fetchTableData(page=this.tableParam.page, pageSize=this.tableParam.pageSize) {
        this.loading = true
        fetchUserDomain(page, pageSize).then(res => {
          if(res.data) {
            res.data.forEach(item => {
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
      }
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


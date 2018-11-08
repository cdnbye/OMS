<template>
<div class="app-container">
  <el-button type="primary" @click="dialogVisible = true" style="float: left; margin-bottom: 20px">绑定域名</el-button>
  <el-table
    border
    :data="tableData"
    v-loading="loading"
    style="width: 100%">

    <el-table-column
      align="center"
      prop="domain"
      label="域名">
    </el-table-column>

    <el-table-column
      align="center"
      prop="isValid"
      :formatter="formatter"
      label="可用状态">
    </el-table-column>

    <el-table-column
      align="center"
      prop="text"
      label="text">
    </el-table-column>

    <el-table-column label="操作" align="center" width="150" fixed="right">
      <template slot-scope="scope">
        <el-button type="text" size="mini" @click="handleCheck(scope.row)">认证</el-button>
        <el-popover
          style="margin-left: 10px"
          placement="top"
          width="160"
          v-model="scope.row.visible">
          <p>确定删除吗？</p>
          <div style="text-align: right; margin: 0">
            <el-button size="mini" type="text" @click="scope.row.visible = false">取消</el-button>
            <el-button type="primary" size="mini" @click="handleDeleteDomain(scope.row)">确定</el-button>
          </div>
          <el-button slot="reference" type="text" size="mini" @click="handleDelete(scope.row)">删除</el-button>
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
    width="30%"
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
    <el-steps direction="vertical" :active="2" :space="100">
      <el-step icon="el-icon-success" :description="'设置cdnbye_dns_auth.cdnbye.com的TXT域名解析内容为下列字符：\n' + checkDomainText"></el-step>
      <el-step icon="el-icon-success" description="完成操作后请点击'完成验证'按钮"></el-step>
    </el-steps>
    <!-- <el-form ref="checkDomainForm" :model="checkDomainFormData" :rules="domainRules">
      <el-form-item prop="domain">
        <el-input 
          type="textarea"
          :rows="3"
          v-model="domainFormData.domain"
          placeholder="输入一个网站，例如"
        />
      </el-form-item>
    </el-form> -->
    <span slot="footer" class="dialog-footer">
      <el-button @click="checkDialogVisible = false">稍后验证</el-button>
      <el-button :loading="checkDomainLoading" type="primary" @click="handleCheckDomain">立即验证</el-button>
    </span>
  </el-dialog>

  <el-dialog
    title="绑定域名"
    :visible.sync="dialogVisible"
    width="50%"
  >
    <el-form ref="domainForm" :model="domainFormData" :rules="domainRules">
      <el-form-item prop="domain">
        <el-input 
          type="textarea"
          :rows="3"
          v-model="domainFormData.domain"
          placeholder="输入一个网站，例如
http://www.example.com:8080
https://180.163.26.39"
        />
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

        checkDomainText: '',
        checkDomainID: 0,
        checkDomainLoading: false,

        domainFormData: {
          domain: ''
        },
        domainRules: {
          domain: [{ required: true, trigger: 'blur', validator: formValidateURL }],
        }
      }
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
        console.log(data)
        this.checkDomainText = data.text
        this.checkDomainID = data.id
        this.checkDialogVisible = true
      },
      handleCheckDomain() {
        this.checkDomainLoading = true
        checkDomain(this.checkDomainID).then(res => {
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
        return row.isValid === 0 ? '不可用' : '可用'
      }
    },
    mounted() {
      this.fetchTableData()
    }
  }
  </script>

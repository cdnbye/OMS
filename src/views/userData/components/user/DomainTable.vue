<template>
<div class="app-container">
  <el-button type="primary" @click="dialogVisible = true">绑定域名</el-button>
  <el-table
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
      label="isValid">
    </el-table-column>

    <el-table-column
      align="center"
      prop="text"
      label="text">
    </el-table-column>

    <el-table-column label="action" align="center" class-name="small-padding fixed-width">
      <template slot-scope="scope">
        <el-button type="primary" size="mini" @click="handleTest(scope.row)">action</el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-dialog
    title="绑定域名"
    :visible.sync="dialogVisible"
    width="50%"
  >
    <el-form ref="domainForm" :model="domainFormData" :rules="domainRules">
      <el-form-item prop="domain">
        <el-input 
          v-model="domainFormData.domain"
          placeholder="请输入要绑定的域名"
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
  import { fetchUserDomain, bindDomain } from '@/api/userDomain'
import { validateURL } from '@/utils/validate'

  export default {
    name: 'UserDomain',
    data() {
      const formValidateURL = (rule, value, callback) => {
        console.log(value)
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

        domainFormData: {
          domain: ''
        },
        domainRules: {
          domain: [{ required: true, trigger: 'blur', validator: formValidateURL }],
        }
      }
    },
    methods: {
      fetchTableData() {
        this.loading = true
        fetchUserDomain().then(res => {
          if(res.data) {
            this.tableData = res.data
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
      handleTest(val) {
        console.log(val)
      },
      addDomainSubmit() {
      this.$refs.domainForm.validate(valid => {
        if(valid) {
          bindDomain(this.domainFormData).then(res => {
            this.dialogVisible = false
            this.tableData.push(res.data)
            console.log(res)
          }).catch(error => {
            console.log(error)
          })
        } else {
          return false
        }
      })
      }
    },
    mounted() {
      this.fetchTableData()
    }
  }
  </script>

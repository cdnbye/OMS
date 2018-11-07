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
        checkDomain(data.id).then(res => {
          this.$message({
            message: '验证成功',
            type: 'success'
          })
        }).catch(err => {
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

<template>
<div class="app-container">
  <el-row type="flex" justify="space-between" :gutter="20" style="margin: 20px 0">
    <el-col :span="12">
      <el-select v-model="selectValue" @change="selectChange" class="filter-item" style="float: left">
        <el-option
          v-for="item in selectOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-col>
    <el-col :span="12">
      <el-checkbox v-model="showAdmin" @change="showAdminUser">显示管理员</el-checkbox>
    </el-col>
    <el-col :span="12">
      <el-input 
        class="filter-item" 
        prefix-icon="el-icon-search"
        placeholder="请输入邮箱"
        v-model="searchValue"
        @keyup.enter.native="handleSearch"/>
    </el-col>
  </el-row>
  <el-table
    :data="tableData"
    v-loading="loading"
    style="width: 100%">
    <el-table-column align="center" prop="uid" label="ID"></el-table-column>
    <el-table-column align="center" prop="username" label="用户名"></el-table-column>
    <el-table-column align="center" prop="email" label="邮箱"></el-table-column>
    <el-table-column align="center" prop="reg_date" label="注册时间"></el-table-column>
    <el-table-column align="center" prop="checkin" label="最近签到时间"></el-table-column>
    <el-table-column align="center" prop="domain" label="域名"></el-table-column>
    <el-table-column align="center" prop="agent" label="代理商"></el-table-column>
    <el-table-column align="center" label="禁用状态">
      <template slot-scope="scope">
        <el-popover
          trigger="manual"
          placement="top"
          width="160"
          :ref="'popover-' + scope.row.username"
          >
          <p>{{ scope.row.enable ? '确认禁用该用户？' : '取消禁用该用户？' }}</p>
          <div style="text-align: right; margin: 0">
            <el-button type="text" size="mini" @click="pClose(scope.row.username)">{{ $t('common.cancel') }}</el-button>
            <el-button type="primary" size="mini" @click="handleFrozenUser(scope.row)">{{ $t('common.ok') }}</el-button>
          </div>
          <el-switch slot="reference" :value="scope.row.enable===0" active-color="red" @change="pShow(scope.row.username)"></el-switch>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column align="center" label="管理员权限">
      <template slot-scope="scope">
        <el-popover
          trigger="manual"
          placement="top"
          width="160"
          :ref="'popover-' + scope.row.uid"
          >
          <p>{{ scope.row.admin ? '确认取消该用户的管理员权限吗？' : '确定将该用户设置为管理员吗？' }}</p>
          <div style="text-align: right; margin: 0">
            <el-button type="text" size="mini" @click="pClose(scope.row.uid)">{{ $t('common.cancel') }}</el-button>
            <el-button type="primary" size="mini" @click="handleAdminUser(scope.row)">{{ $t('common.ok') }}</el-button>
          </div>
          <el-switch slot="reference" :value="scope.row.admin" active-color="#42b983" @change="pShow(scope.row.uid)"></el-switch>
        </el-popover>
      </template>
    </el-table-column>

    <el-table-column label="passwd" align="center" class-name="small-padding fixed-width">
      <template slot-scope="scope">
        <el-button type="primary" size="mini" @click="copyPassword(scope.row.raw_pass)">Copy</el-button>
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
  import { fetchUserList, fetchAdminUser } from '@/api/userDomain'
  import { frozenUser, adminUser, searchUser } from '@/api/user'
  import { copy } from '@/utils'
  import moment from 'moment'

  export default {
    data() {
      return {
        loading: false,
        tableData: [],
        tableParam: {
          page: 1,
          pageSize: 10
        },
        showAdmin: false,
        searchValue: '',
        selectValue: 'uid',
        selectOptions: [
          {
            label: 'ID',
            value: 'uid'
          },
          {
            label: '邮箱',
            value: 'email'
          },
          {
            label: '用户名',
            value: 'username'
          },
          {
            label: '注册时间',
            value: 'reg_date'
          },
          {
            label: '代理商',
            value: 'agent'
          },
          {
            label: '域名',
            value: 'domain'
          },
          {
            label: '禁用状态',
            value: 'enable'
          }
        ]
      }
    },
    mounted() {
      this.fetchTableData()
    },
    methods: {
      pShow(id) {
        this.$refs[`popover-` + id].doShow()
      },
      pClose(id) {
        this.$refs[`popover-` + id].doClose()
      },
      showAdminUser(value) {
        this.loading = true
        if(value) {
          fetchAdminUser()
            .then(res => {
              if(res.data) {
                this.loading = false
                this.tableData = [...res.data]
              }
            })
            .catch(err => {
              this.loading = false
              this.tableData = []
              console.log(err)
            })
        } else {
          this.fetchTableData()
        }
      },
      formatData(data) {
        const temp = [...data]
        temp.forEach(item => {
          item.reg_date = moment(item.reg_date * 1000).format('YYYY-MM-DD HH:mm')
          item.checkin = moment(item.checkin).format('YYYY-MM-DD HH:mm')
        })
        return temp
      },
      fetchTableData(page=this.tableParam.page, pageSize=this.tableParam.pageSize, order=this.selectValue) {
        this.loading = true
        fetchUserList(page, pageSize, order).then(res => {
          if(res.data) {
            this.tableData = this.formatData(res.data)
          }
          this.loading = false
        }).catch(err => {
          this.tableData = []
          this.loading = false
          console.log(err)
        })
      },
      handleFrozenUser(user) {
        const data = {
          uid: user.uid,
          frozen: user.enable ? true : false
        }
        this.loading = true
        frozenUser(data)
          .then(res => {
            this.pClose(user.username)
            this.loading = false
            this.$message({
              type: 'success',
              message: '操作成功'
            })
            this.tableData.forEach(item => {
              if(item.uid === data.uid)
                item.enable = data.frozen ? 0 : 1
            })
          })
          .catch(err => {
            this.loading = false
            console.log(err)
          })
      },
      handleAdminUser(user) {
        this.loading = true
        adminUser({
          uid: user.uid,
          admin: !user.admin
        })
          .then(res => {
            this.pClose(user.uid)
            this.loading = false
            this.$message({
              type: 'success',
              message: '操作成功'
            })
            this.tableData.forEach(item => {
              if(item.uid === user.uid)
                item.admin = !item.admin
            })
          })
          .catch(err => {
            this.loading = false
            console.log(err)
          })
      },
      handleSearch() {
        if(this.searchValue) {
          searchUser(this.searchValue)
            .then(res => {
              this.tableData = [...res.data]
            })
            .catch(err => {
              this.tableData = []
              console.log(err)
            })
        } else {
          this.fetchTableData()
        }
      },
      handleSizeChange(pageSize) {
        this.tableParam.pageSize = pageSize
        this.fetchTableData()
      },
      handleCurrentChange(page) {
        this.tableParam.page = page
        this.fetchTableData()
      },
      selectChange() {
        this.fetchTableData()
      },
      copyPassword(pw) {
        copy(pw, () => {this.$message.success('Copied(已复制)')})
      }
    }
  }
  </script>

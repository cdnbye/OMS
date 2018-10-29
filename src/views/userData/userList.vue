<template>
<div class="app-container">
  <div class="filter-container">
    <el-select v-model="selectValue" @change="selectChange" class="filter-item" style="float: left">
      <el-option
        v-for="item in selectOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>

    <!-- <el-input 
      style="width: 200px;float: right" 
      class="filter-item" 
      prefix-icon="el-icon-search"
      placeholder="请输入内容"
      v-model="searchValue"
      @keyup.enter.native="handleSearch"/> -->
  </div>
  <el-table
    :data="tableData"
    v-loading="loading"
    style="width: 100%">

    <el-table-column
      align="center"
      prop="uid"
      label="ID">
    </el-table-column>

    <el-table-column
      align="center"
      prop="username"
      label="用户名">
    </el-table-column>

    <el-table-column
      align="center"
      prop="email"
      label="邮箱">
    </el-table-column>

    <el-table-column
      align="center"
      prop="reg_date"
      label="注册时间">
    </el-table-column>

    <el-table-column
      align="center"
      prop="agent"
      label="agent">
    </el-table-column>

    <el-table-column
      align="center"
      prop="domain"
      label="域名">
    </el-table-column>

    <el-table-column
      align="center"
      prop="enable"
      label="禁用状态">
    </el-table-column>

    <!-- <el-table-column label="action" align="center" class-name="small-padding fixed-width">
      <template slot-scope="scope">
        <el-button type="primary" size="mini" @click="handleTest(scope.row)">详情</el-button>
      </template>
    </el-table-column> -->
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
  import { fetchUserList } from '@/api/userDomain'
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
    methods: {
      formatData(data) {
        const temp = [...data]
        temp.forEach(item => {
          item.reg_date = moment(item.reg_date * 1000).format('YYYY-MM-DD HH:mm')
          item.enable = item.enable === 0 ? '禁用' : '正常'
        })
        return temp
      },
      fetchTableData(page=this.tableParam.page, pageSize=this.tableParam.pageSize, order=this.selectValue) {
        this.loading = true
        fetchUserList(page, pageSize, order).then(res => {
          this.loading = false
          if(res.data) {
            this.tableData = this.formatData(res.data)
          } else {
            this.tableData = []
          }
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
      selectChange(val) {
        this.fetchTableData()
      },
      handleSearch(e){
        const host = e.target.value.trim()
        if(host) {
          searchHost(host).then(res => {
            this.tableData = this.formatData(res.data)
            // this.total = res.data ? res.data.length : 0
          })
        } else {
          this.fetchTableData()
        }
      },
      handleTest(val) {
        console.log(val)
      }
    },
    mounted() {
      this.fetchTableData()
    }
  }
  </script>

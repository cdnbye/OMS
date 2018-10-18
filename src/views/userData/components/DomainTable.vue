<template>
<div>
  <div>
    <el-select v-model="selectValue" @change="selectChange">
      <el-option
        v-for="item in selectOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
  <el-table
    :data="tableData"
    v-loading="loading"
    style="width: 100%">
    <el-table-column
      align="center"
      prop="host"
      label="host">
    </el-table-column>

    <el-table-column
      align="center"
      prop="p2p"
      label="p2p流量(GB)">
    </el-table-column>

    <el-table-column
      align="center"
      prop="http"
      label="http流量(GB)">
    </el-table-column>

    <el-table-column
      align="center"
      prop="p2p_rt"
      label="p2p_rt(mbps)">
    </el-table-column>

    <el-table-column
      align="center"
      prop="http_rt"
      label="http_rt(mbps)">
    </el-table-column>

    <el-table-column
      align="center"
      prop="FailConns"
      label="FailConns">
    </el-table-column>

    <el-table-column
      align="center"
      prop="ErrsFragLoad"
      label="ErrsFragLoad">
    </el-table-column>

    <el-table-column
      align="center"
      prop="ErrsBufStalled"
      label="ErrsBufStalled">
    </el-table-column>

    <el-table-column
      align="center"
      prop="ErrsInternalExcpt"
      label="ErrsInternalExcpt">
    </el-table-column>

    <el-table-column
      align="center"
      prop="num"
      label="num">
    </el-table-column>

    <el-table-column
      align="center"
      prop="max_num"
      label="max_num">
    </el-table-column>

    <el-table-column label="action" align="center" class-name="small-padding fixed-width">
      <template slot-scope="scope">
        <el-button type="primary" size="mini" @click="handleTest(scope.row)">详情</el-button>
      </template>
    </el-table-column>
  </el-table>

  <div class="pagination-container">
    <el-pagination
      v-show="total>0"
      layout="total, sizes, prev, pager, next"
      :total="total"
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
  import { fetchDomain } from '@/api/userDomain'
  import { fetchHostNum } from '@/api/userDomain'

  export default {
    data() {
      return {
        loading: false,
        total: 0,
        tableData: [],
        tableParam: {
          page: 1,
          pageSize: 10
        },

        selectValue: 'max_num',
        selectOptions: [
          {
            label: 'max_num',
            value: 'max_num'
          },
          {
            label: 'num',
            value: 'num'
          },
          {
            label: 'p2p',
            value: 'p2p'
          },
          {
            label: 'http',
            value: 'http'
          },
          {
            label: 'p2p_rt',
            value: 'p2p_rt'
          },
          {
            label: 'http_rt',
            value: 'http_rt'
          },
        ]
      }
    },
    methods: {
      formatData(data) {
        data.forEach(item => {
          if(item.p2p) {
            item.p2p = (item.p2p / 1024 / 1024).toFixed(2)
          }
          if(item.http) {
            item.http = (item.http / 1024 / 1024).toFixed(2)
          }
          if(item.p2p_rt) {
            item.p2p_rt = (item.p2p_rt / 1024 / 1024).toFixed(2)
          }
          if(item.http_rt) {
            item.http_rt = (item.http_rt / 1024 / 1024).toFixed(2)
          }
        })
        return data
      },
      fetchTableData(page=this.tableParam.page, pageSize=this.tableParam.pageSize, order=this.selectValue) {
        this.loading = true
        fetchDomain(page, pageSize, order).then(res => {
          this.loading = false
          this.tableData = this.formatData(res.data)
        }).catch(err => {
          this.loading = false
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
      handleTest(val) {
        console.log(val)
      }
    },
    mounted() {
      this.fetchTableData()
      fetchHostNum().then(res => {
        this.total = res.data.num
      })
    }
  }
  </script>

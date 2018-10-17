<template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        align="left"
        prop="host"
        label="host">
      </el-table-column>

      <el-table-column
        align="left"
        prop="p2p"
        label="p2p">
      </el-table-column>

      <el-table-column
        align="left"
        prop="http"
        label="http">
      </el-table-column>

      <el-table-column
        align="left"
        prop="p2p_rt"
        label="p2p_rt">
      </el-table-column>

      <el-table-column
        align="left"
        prop="http_rt"
        label="http_rt">
      </el-table-column>

      <el-table-column
        align="left"
        prop="FailConns"
        label="FailConns">
      </el-table-column>

      <el-table-column
        align="left"
        prop="ErrsFragLoad"
        label="ErrsFragLoad">
      </el-table-column>

      <el-table-column
        align="left"
        prop="ErrsBufStalled"
        label="ErrsBufStalled">
      </el-table-column>

      <el-table-column
        align="left"
        prop="ErrsInternalExcpt"
        label="ErrsInternalExcpt">
      </el-table-column>

      <el-table-column
        align="left"
        prop="num"
        label="num">
      </el-table-column>

      <el-table-column
        align="left"
        prop="max_num"
        label="max_num">
      </el-table-column>
    </el-table>
  </template>

  <script>
  import { fetchDomain } from '@/api/userDomain'

  export default {
    data() {
      return {
        tableData: []
      }
    },
    mounted() {
      fetchDomain(20, 'max_num').then(res => {
        console.log(res)
        this.tableData = res.data
      })
    }
  }
  </script>

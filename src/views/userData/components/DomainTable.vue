<template>
<div class="app-container">
  <el-row :gutter="20" style="margin-bottom: 20px">
    <el-col :xs="24" :sm="12" :lg="6">
      <el-input
          class="filter-item"
          prefix-icon="el-icon-search"
          placeholder="请输入域名"
          v-model="searchValue"
          @keyup.enter.native="handleSearch"/>
    </el-col>
    <el-col :xs="12" :sm="6" :lg="3">
      <el-select v-model="selectValue" @change="selectChange" class="filter-item">
        <el-option
          v-for="item in selectOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-col>
    <el-col :xs="12" :sm="6" :lg="3">
      <el-select v-model="platformValue" @change="selectChange" class="filter-item">
        <el-option
            v-for="item in platformOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        >
        </el-option>
      </el-select>
    </el-col>
    <el-col :xs="8" :sm="12" :lg="2">
      <el-checkbox v-model="showValid" @change="showValidChange">已绑定</el-checkbox>
    </el-col>
    <el-col :xs="8" :sm="12" :lg="2">
      <el-checkbox v-model="showWhite" @change="showWhitelistChange">白名单</el-checkbox>
    </el-col>
    <el-col :xs="8" :sm="12" :lg="2">
      <el-checkbox v-model="showBlack" @change="showBlacklistChange">黑名单</el-checkbox>
    </el-col>
    <el-col :xs="8" :sm="12" :lg="2">
      <el-checkbox v-model="showDebug" @change="showDebugChange">Debug</el-checkbox>
    </el-col>
    <el-col :xs="8" :sm="12" :lg="4">
      <el-checkbox v-model="showNative" @change="showNativeChange">Native</el-checkbox>
    </el-col>
  </el-row>
  <el-table
    :data="tableData"
    v-loading="loading"
    @filter-change="tableFilter"
    style="width: 100%">
    <el-table-column align="center" label="域名">
      <template slot-scope="scope">
        <span><a @click="hostClick(scope.row.host)">{{scope.row.host}}</a></span>
      </template>
    </el-table-column>
    <el-table-column align="center" prop="num" label="人数"></el-table-column>
    <el-table-column align="center" prop="max_num" label="最大人数"></el-table-column>
    <el-table-column align="center" prop="email" label="邮箱"></el-table-column>
    <el-table-column align="center" label="是否绑定">
      <template slot-scope="scope">
        <span>{{ scope.row.isvalid ? '已绑定' : '未绑定' }}</span>
      </template>
    </el-table-column>

    <el-table-column align="center" label="黑名单">
      <template slot-scope="scope">
        <el-popover
          trigger="manual"
          placement="top"
          width="160"
          :ref="'popover-' + scope.row.host_id"
          >
          <p>{{ scope.row.blocked ? '确认从黑名单中移除吗？' : '确定加入黑名单吗？' }}</p>
          <div style="text-align: right; margin: 0">
            <el-button type="text" size="mini" @click="pClose(scope.row.host_id)">{{ $t('common.cancel') }}</el-button>
            <el-button type="primary" size="mini" @click="blacklistChange(scope.row)">{{ $t('common.ok') }}</el-button>
          </div>
          <el-switch slot="reference" :value="scope.row.blocked" active-color="red" @change="pShow(scope.row.host_id)"></el-switch>
        </el-popover>
      </template>
    </el-table-column>

    <el-table-column align="center" label="白名单">
      <template slot-scope="scope">
        <el-popover
          trigger="manual"
          placement="top"
          width="160"
          :ref="'popover-' + scope.row.host"
          >
          <p>{{ scope.row.whitelist ? '确认从白名单中移除吗？' : '确定加入白名单吗？' }}</p>
          <div style="text-align: right; margin: 0">
            <el-button type="text" size="mini" @click="pClose(scope.row.host)">{{ $t('common.cancel') }}</el-button>
            <el-button type="primary" size="mini" @click="whiteListChange(scope.row)">{{ $t('common.ok') }}</el-button>
          </div>
          <el-switch slot="reference" :value="scope.row.whitelist" active-color="green" @change="pShow(scope.row.host)"></el-switch>
        </el-popover>
      </template>
    </el-table-column>

    <el-table-column align="center" label="Debug">
      <template slot-scope="scope">
        <el-switch slot="reference" :value="scope.row.debug" active-color="green" @change="debugChange(scope.row)"></el-switch>
      </template>
    </el-table-column>

    <el-table-column label="action" align="center" class-name="small-padding fixed-width">
      <template slot-scope="scope">
        <el-button type="primary" size="mini" @click="handleCheckDetail(scope.row)">详情</el-button>
      </template>
    </el-table-column>
  </el-table>

  <div class="pagination-container">
    <el-pagination
      :small="device === 'mobile'"
      :layout="device === 'mobile' ? 'prev, pager, next' : 'sizes, prev, pager, next'"
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
  import { fetchDomain, blockDomain, whiteDomain, debugDomain, searchHost } from '@/api/userDomain'
  import { mapGetters } from 'vuex'
  import { getID } from '@/utils/auth'

  export default {
    data() {
      return {
        loading: false,
        showValid: true,
        showWhite: false,
        showBlack: false,
        showDebug: false,
        showNative: false,
        tableData: [],
        tableParam: {
          page: 1,
          pageSize: 10
        },

        filters: [
          {
            name: 'isvalid',
            value: true
          },
          {
            name: 'blocked',
            value: false
          },
          {
            name: 'whitelist',
            value: false
          },
          {
            name: 'native',
            value: false
          },
          {
              name: 'debug',
              value: false
          },
        ],

        searchValue: '',
        selectValue: 'num',
        selectOptions: [
          {
            label: 'id',
            value: 'id'
          },
          {
            label: '最大人数',
            value: 'max_num'
          },
          {
            label: '人数',
            value: 'num'
          },
          {
            label: '近一月p2p流量',
            value: 'p2p_month'
          },
          {
            label: '近一月http流量',
            value: 'http_month'
          }
        ],
        platformValue: undefined,
        platformOptions: [
          {
            label: 'all platform',
            value: undefined
          },
          {
            label: 'android',
            value: 'android'
          },
          {
            label: 'ios',
            value: 'ios'
          },
          {
            label: 'pc',
            value: 'pc'
          },
        ]
      }
    },
    computed: {
      ...mapGetters([
        'device'
      ])
    },
    mounted() {
      this.fetchTableData()
      // this.timmer = setInterval(() => {
      //     this.fetchTableData()
      // }, 30000)
    },
    methods: {
      pShow(id) {
        this.$refs[`popover-` + id].doShow()
      },
      pClose(id) {
        this.$refs[`popover-` + id].doClose()
      },
      hostClick(value) {
        window.open(`http://${value}`)
        window.open(`https://${value}`)
      },
      blacklistChange(domain) {
        if(domain.whitelist && !domain.blocked) {
          this.pClose(domain.host_id)
          this.$message({
            message: '不能同时添加到白名单和黑名单',
            type: 'error'
          })
          return
        }
        const data = {
          domain: domain.host,
          uid: domain.uid,
          blocked: !domain.blocked
        }
        this.loading = true
        blockDomain(data)
          .then(res => {
            this.pClose(domain.host_id)
            this.tableData.forEach(item => {
              if(item.host_id === domain.host_id)
                item.blocked = !item.blocked
            })
            this.$message({
              message: domain.blocked ? '成功添加至黑名单' : '已从黑名单中移除',
              type: 'success'
            })
            this.loading = false
          })
          .catch(err => {
            this.loading = false
          })
      },
      whiteListChange(domain) {
        if(!domain.whitelist && domain.blocked) {
          this.pClose(domain.host)
          this.$message({
            message: '不能同时添加到白名单和黑名单',
            type: 'error'
          })
          return
        }
        const data = {
          domain: domain.host,
          uid: domain.uid,
          whitelist: !domain.whitelist
        }
        this.loading = true
        whiteDomain(data)
          .then(res => {
            this.pClose(domain.host)
            this.tableData.forEach(item => {
              if(item.host_id === domain.host_id)
                item.whitelist = !item.whitelist
            })
            this.$message({
              message: domain.whitelist ? '成功添加至白名单' : '已从白名单中移除',
              type: 'success'
            })
            this.loading = false
          })
          .catch(err => {
            this.loading = false
          })
      },
      debugChange(domain) {
          const data = {
              domain: domain.host,
              uid: domain.uid,
              debug: !domain.debug
          }
          this.loading = true
          debugDomain(data)
              .then(res => {
                  this.tableData.forEach(item => {
                      if(item.host_id === domain.host_id)
                          item.debug = !item.debug
                  })
                  this.$message({
                      message: domain.debug ? '开启debug' : '关闭debug',
                      type: 'success'
                  })
                  this.loading = false
              })
              .catch(err => {
                  this.loading = false
              })
      },
      tableFilter(filter) {
        this.fetchTableData()
      },
      showValidChange(value) {
        this.filters.forEach(item => {
          if(item.name === 'isvalid')
            item.value = value
        })
        this.fetchTableData()
      },
      showWhitelistChange(value) {
        this.filters.forEach(item => {
          if(item.name === 'whitelist')
            item.value = value
        })
        this.fetchTableData()
      },
      showBlacklistChange(value) {
        this.filters.forEach(item => {
          if(item.name === 'blocked')
            item.value = value
        })
        this.fetchTableData()
      },
      showDebugChange(value) {
          this.filters.forEach(item => {
              if(item.name === 'debug')
                  item.value = value
          })
          this.fetchTableData()
      },
      showNativeChange(value) {
          this.filters.forEach(item => {
              if(item.name === 'native')
                  item.value = value
          })
          this.fetchTableData()
      },
      formatData(data) {
        data.forEach(item => {
          if(item.p2p_month) {
            item.p2p_month = (item.p2p_month / 1024 / 1024).toFixed(2)
          }
          if(item.http_month) {
            item.http_month = (item.http_month / 1024 / 1024).toFixed(2)
          }
          if(item.p2p_rt) {
            item.p2p_rt = (item.p2p_rt / 1024).toFixed(2)
          }
          if(item.http_rt) {
            item.http_rt = (item.http_rt / 1024).toFixed(2)
          }
        })
        return data
      },
      fetchTableData(page=this.tableParam.page, pageSize=this.tableParam.pageSize, order=this.selectValue, filters=this.filters, platform=this.platformValue) {
        this.loading = true
        fetchDomain(page, pageSize, order, filters, platform).then(res => {
          this.loading = false
          this.tableData = this.formatData(res.data)
        }).catch(err => {
          this.tableData = []
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
      handleSearch(e){
        const host = e.target.value.trim()
        if(host) {
          searchHost(host).then(res => {
            if(this.showValid) {
              this.tableData = res.data.filter(item => item.isvalid)
            } else {
              this.tableData = [...res.data]
            }
          })
        } else {
          this.fetchTableData()
        }
      },
      handleCheckDetail(val) {
          // console.warn(JSON.stringify(val))
        this.$router.push({
          name: 'UserLiveData',
          params: {
            // uid: getID(),
            hostId: val.host_id,
            domainInfo: {
                uid: getID(),
                id: -1,
                native: val.native,
            },
          }
        })
      }
    },
    beforeDestroy() {
        clearInterval(this.timmer)
    }
  }
  </script>

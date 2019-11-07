<template>
<div class="app-container">
  <el-row :gutter="20" style="margin-bottom: 20px">
    <el-col :xs="24" :sm="12" :lg="6">
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
    <el-col :xs="8" :sm="12" :lg="2">
      <el-checkbox v-model="showValid" @change="showValidChange">显示已绑定</el-checkbox>
    </el-col>
    <el-col :xs="8" :sm="12" :lg="2">
      <el-checkbox v-model="showWhite" @change="showWhitelistChange" :disabled="filters[1].value">显示白名单</el-checkbox>
    </el-col>
    <el-col :xs="8" :sm="12" :lg="2">
      <el-checkbox v-model="showBlack" @change="showBlacklistChange" :disabled="filters[2].value">显示黑名单</el-checkbox>
    </el-col>
    <el-col :xs="8" :sm="12" :lg="4">
      <el-checkbox v-model="showNative" @change="showNativeChange">显示Native SDK</el-checkbox>
    </el-col>
    <el-col :xs="24" :sm="12" :lg="6">
      <el-input 
        class="filter-item" 
        prefix-icon="el-icon-search"
        placeholder="请输入域名"
        v-model="searchValue"
        @keyup.enter.native="handleSearch"/>
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
    <!-- <el-table-column align="center" prop="agent" label="代理商" column-key="agent" :filter-multiple="false" :filters="[{ text: 'btjson', value: 'btjson' }]"></el-table-column> -->

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
            <el-button type="primary" size="mini" @click="handleSwitchChange(scope.row)">{{ $t('common.ok') }}</el-button>
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
  import { fetchDomain, blockDomain, whiteDomain, searchHost } from '@/api/userDomain'
  import { mapGetters } from 'vuex'
  import { getID } from '@/utils/auth'

  export default {
    data() {
      return {
        loading: false,
        showValid: true,
        showWhite: false,
        showBlack: false,
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
            name: 'agent'
          }
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
      handleSwitchChange(domain) {
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
      tableFilter(filter) {
        if(filter.agent.length > 0) {
          this.filters.forEach(item => {
            if(item.name === 'agent')
              item.value = filter.agent[0]
          })
        } else {
          this.filters.forEach(item => {
            if(item.name === 'agent')
              delete item.value
          })
        }
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
          if(!item.agent) {
            item.agent = '无'
          }
        })
        return data
      },
      fetchTableData(page=this.tableParam.page, pageSize=this.tableParam.pageSize, order=this.selectValue, filters=this.filters) {
        this.loading = true
        fetchDomain(page, pageSize, order, filters).then(res => {
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
        this.$router.push({
          name: 'UserLiveData',
          params: {
            uid: getID(),
            id: val.id,
            hostId: val.host_id,
          }
        })
      }
    }
  }
  </script>

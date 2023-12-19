<template>
  <div class="app-container">
    <el-row :gutter="20" style="margin-bottom: 20px">
      <el-col :xs="24" :sm="12" :lg="6">
        <el-input
            class="filter-item"
            prefix-icon="el-icon-search"
            placeholder="请输入域名或UID"
            v-model="searchValue"
            @keyup.enter.native="keywordsChange"/>
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
      <el-table-column align="center" prop="id" label="ID"></el-table-column>
      <el-table-column align="center" label="域名">
        <template slot-scope="scope">
          <span><a @click="hostClick(scope.row.domain)">{{scope.row.domain}}</a></span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="uid" label="UID"></el-table-column>
      <el-table-column align="center" label="是否绑定">
        <template slot-scope="scope">
          <span>{{ scope.row.isValid ? '已绑定' : '未绑定' }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="黑名单">
        <template slot-scope="scope">
          <el-popover
              trigger="manual"
              placement="top"
              width="160"
              :ref="'popover-' + scope.row.id"
          >
            <p>{{ scope.row.blocked ? '确认从黑名单中移除吗？' : '确定加入黑名单吗？' }}</p>
            <div style="text-align: right; margin: 0">
              <el-button type="text" size="mini" @click="pClose(scope.row.id)">{{ $t('common.cancel') }}</el-button>
              <el-button type="primary" size="mini" @click="blacklistChange(scope.row)">{{ $t('common.ok') }}</el-button>
            </div>
            <el-switch slot="reference" :value="scope.row.blocked" active-color="red" @change="pShow(scope.row.id)"></el-switch>
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column align="center" label="白名单">
        <template slot-scope="scope">
          <el-popover
              trigger="manual"
              placement="top"
              width="160"
              :ref="'popover-' + scope.row.domain"
          >
            <p>{{ scope.row.whitelist ? '确认从白名单中移除吗？' : '确定加入白名单吗？' }}</p>
            <div style="text-align: right; margin: 0">
              <el-button type="text" size="mini" @click="pClose(scope.row.domain)">{{ $t('common.cancel') }}</el-button>
              <el-button type="primary" size="mini" @click="whiteListChange(scope.row)">{{ $t('common.ok') }}</el-button>
            </div>
            <el-switch slot="reference" :value="scope.row.whitelist" active-color="green" @change="pShow(scope.row.domain)"></el-switch>
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
          <el-button type="primary" size="mini" @click="handlePlayUrl(scope.row)">介绍</el-button>
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
import { fetchDomainList, blockDomain, whiteDomain, debugDomain } from '@/api/userDomain'
import { mapGetters } from 'vuex'

export default {
  name: 'DomainList',
  data() {
    return {
      loading: false,
      showWhite: false,
      showBlack: false,
      showDebug: false,
      showNative: false,
      tableData: [],
      tableParam: {
        page: 1,
        pageSize: 10
      },
      searchValue: '',
    }
  },
  computed: {
    ...mapGetters([
      'device'
    ])
  },
  mounted() {
    this.resetFilters()
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
    blacklistChange(domain) {
      console.warn(JSON.stringify(domain))
      if(domain.whitelist && !domain.blocked) {
        this.pClose(domain.id)
        this.$message({
          message: '不能同时添加到白名单和黑名单',
          type: 'error'
        })
        return
      }
      const data = {
        domain: domain.domain,
        uid: domain.uid,
        blocked: !domain.blocked
      }
      this.loading = true
      blockDomain(data)
          .then(res => {
            this.pClose(domain.id)
            this.tableData.forEach(item => {
              if(item.id === domain.id)
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
        this.pClose(domain.domain)
        this.$message({
          message: '不能同时添加到白名单和黑名单',
          type: 'error'
        })
        return
      }
      const data = {
        domain: domain.domain,
        uid: domain.uid,
        whitelist: !domain.whitelist
      }
      this.loading = true
      whiteDomain(data)
          .then(res => {
            this.pClose(domain.domain)
            this.tableData.forEach(item => {
              if(item.id === domain.id)
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
        domain: domain.domain,
        uid: domain.uid,
        debug: !domain.debug
      }
      this.loading = true
      debugDomain(data)
          .then(res => {
            this.tableData.forEach(item => {
              if(item.id === domain.id)
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
    keywordsChange(e) {
      const hostOrUid = e.target.value.trim()
      if (!isNaN(Number(hostOrUid))) {
        this.filters.forEach(item => {
          if(item.name === 'uid')
            item.value = hostOrUid
        })
      } else {
        this.filters.forEach(item => {
          if(item.name === 'keywords')
            item.value = hostOrUid || false
        })
      }
      this.fetchTableData()
    },
    fetchTableData(page=this.tableParam.page, pageSize=this.tableParam.pageSize, filters=this.filters) {
      this.loading = true
      fetchDomainList(page, pageSize, filters).then(res => {
        this.loading = false
        this.tableData = res.data
        this.resetFilters()
      }).catch(err => {
        this.tableData = []
        this.loading = false
        this.resetFilters()
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
    handlePlayUrl(val) {
      let url = val.play_url
      if (!url.startsWith('http')) {
        url = 'http://' + url
      }
      window.open(`${url}`)
    },
    resetFilters() {
      this.filters = [
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
        {
          name: 'keywords',
          value: false
        },
        {
          name: 'uid',
          value: false
        },
      ]
    }
  },
}
</script>

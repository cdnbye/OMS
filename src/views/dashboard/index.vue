<template>
  <div class="dashboard-editor-container">
    <PanelGroup v-on:numChange="getOnlineNum" />
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12" :lg="8" class="chart-col">
        <el-card>
          <div slot="header">
            <span>版本分布</span>
          </div>
          <Piechart :chart-data="this.versionData" />
        </el-card>
      </el-col>

      <el-col :xs="24" :sm="12" :lg="8" class="chart-col">
        <el-card>
          <div slot="header">
            <span>Tag分布</span>
          </div>
          <Piechart :chart-data="tagData" />
        </el-card>
      </el-col>

      <el-col :xs="24" :sm="12" :lg="8" class="chart-col">
        <el-card>
          <div slot="header">
            <span>终端分布</span>
          </div>
          <Piechart :chart-data="deviceData" />
        </el-card>
      </el-col>

      <el-col :xs="24" :sm="12" :lg="8" class="chart-col">
        <el-card>
          <div slot="header">
            <span>直播点播分布</span>
          </div>
          <Piechart :chart-data="liveData" />
        </el-card>
      </el-col>

      <el-col :xs="24" :sm="12" :lg="8" class="chart-col">
        <el-card>
          <div slot="header">
            <span>头部域名分布</span>
          </div>
          <Piechart :chart-data="topSiteData" />
        </el-card>
      </el-col>

    </el-row>
  </div>
</template>

<script>
import PanelGroup from './components/PanelGroup'
import Piechart from '@/components/PieChart'
import { fetchVersion, fetchTag, fetchDevice, fetchLive } from '@/api/historyData'
  import { fetchDomain } from '@/api/userDomain'

export default {
  name: 'Dashboard',
  components: {
    PanelGroup,
    Piechart
  },
  data() {
    return {
      versionData: [],
      tagData: [],
      deviceData: [],
      liveData: [],
      topSiteData: [],
      onlineNum: 0
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      fetchVersion().then(res => {
        if(res.data) {
          res.data.forEach(item => {
            this.versionData.push({
              name: item.version,
              value: item.num
            })
          })
        }
      })
      fetchTag().then(res => {
        if(res.data) {
          res.data.forEach(item => {
            this.tagData.push({
              name: item.tag,
              value: item.num
            })
          })
        }
      })
      fetchDevice().then(res => {
        if(res.data) {
          res.data.forEach(item => {
            this.deviceData.push({
              name: item.dev,
              value: item.num
            })
          })
        }
      })
      fetchLive().then(res => {
        if(res.data) {
          res.data.forEach(item => {
            this.liveData.push({
              name: item.live,
              value: item.num
            })
          })
        }
      })

      fetchDomain(1, 10, 'max_num').then(res => {
        if(res.data) {
          let total = 0
          res.data.forEach(item => {
            total += item.num
            this.topSiteData.push({
              name: item.host,
              value: item.num
            })
          })
          this.topSiteData.push({
            name: '其他',
            value: this.onlineNum - total
          })
        }
      })
    },
    getOnlineNum(num) {
      this.onlineNum = num
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard-editor-container {
  padding: 16px 32px;
  background-color: rgb(240, 242, 245);
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}
.chart-col {
  margin-bottom: 20px;
}
</style>

<template>
  <div class="dashboard-editor-container">
    <PanelGroup />
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
            <span>Device分布</span>
          </div>
          <Piechart :chart-data="deviceData" />
        </el-card>
      </el-col>

      <el-col :xs="24" :sm="12" :lg="8" class="chart-col">
        <el-card>
          <div slot="header">
            <span>Live分布</span>
          </div>
          <Piechart :chart-data="liveData" />
        </el-card>
      </el-col>

    </el-row>
  </div>
</template>

<script>
import PanelGroup from './components/PanelGroup'
import Piechart from '@/components/PieChart'
import { fetchVersion, fetchTag, fetchDevice, fetchLive } from '@/api/historyData'

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
      liveData: []
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

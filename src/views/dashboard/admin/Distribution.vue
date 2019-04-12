<template>
  <div class="dashboard-editor-container">
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

      <el-col :xs="24" :sm="12" :lg="8" class="chart-col">
        <el-card>
          <div slot="header">
            <span>网络类型分布</span>
          </div>
          <Piechart :chart-data="netTypeData" />
        </el-card>
      </el-col>

    </el-row>
  </div>
</template>

<script>
import Piechart from '@/components/PieChart'
import { fetchGlobalData } from '@/api/liveData'
import { fetchLiveData } from '@/api/liveData'
import { fetchDomain } from '@/api/userDomain'
import { formatPieData } from '@/utils/format'

export default {
  name: 'Distribution',
  components: {
    Piechart
  },
  data() {
    return {
      versionData: [],
      tagData: [],
      deviceData: [],
      liveData: [],
      topSiteData: [],
      netTypeData: [],
      onlineNum: 0
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      fetchGlobalData().then(res => {
        if(res.data) {
          this.onlineNum = res.data.num_rt
          fetchDomain(1, 10, 'num', [])
            .then(res => {
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
            .catch(err => {
              console.log(err)
            })
        }
      })
      fetchLiveData('version').then(res => {
        if(res.data) {
          this.versionData = formatPieData(res.data)
        }
      })
      fetchLiveData('tag').then(res => {
        if(res.data) {
          this.tagData = formatPieData(res.data)
        }
      })
      fetchLiveData('device').then(res => {
        if(res.data) {
          this.deviceData = formatPieData(res.data)
        }
      })
      fetchLiveData('live').then(res => {
        if(res.data) {
          this.liveData = formatPieData(res.data)
        }
      })
      fetchLiveData('netType').then(res => {
        if(res.data) {
          this.netTypeData = formatPieData(res.data)
        }
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.chart-col {
  margin-bottom: 20px;
}
</style>

<template>
  <div class="dashboard-editor-container">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12" :lg="8" class="chart-col">
        <el-card>
          <div slot="header">
            <span>Web版本分布</span>
          </div>
          <Piechart :chart-data="this.webVerData" />
        </el-card>
      </el-col>

      <el-col :xs="24" :sm="12" :lg="8" class="chart-col">
        <el-card>
          <div slot="header">
            <span>Android版本分布</span>
          </div>
          <Piechart :chart-data="this.androidVerData" />
        </el-card>
      </el-col>

      <el-col :xs="24" :sm="12" :lg="8" class="chart-col">
        <el-card>
          <div slot="header">
            <span>iOS版本分布</span>
          </div>
          <Piechart :chart-data="this.iosVerData" />
        </el-card>
      </el-col>

      <el-col :xs="24" :sm="12" :lg="8" class="chart-col">
        <el-card>
          <div slot="header">
            <span>Electron版本分布</span>
          </div>
          <Piechart :chart-data="this.pcVerData" />
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

      <el-col :xs="24" :sm="12" :lg="8" class="chart-col">
        <el-card>
          <div slot="header">
            <span>运营商分布</span>
          </div>
          <Piechart :chart-data="ispData" />
        </el-card>
      </el-col>

      <el-col :xs="24" :sm="12" :lg="8" class="chart-col">
        <el-card>
          <div slot="header">
            <span>NAT类型分布</span>
          </div>
          <Piechart :chart-data="natTypeData" />
        </el-card>
      </el-col>

    </el-row>
  </div>
</template>

<script>
import Piechart from '@/components/PieChart'
import { fetchLiveTimeData } from '@/api/liveData'
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
      pcVerData: [],
      androidVerData: [],
      iosVerData: [],
      webVerData: [],
      tagData: [],
      deviceData: [],
      liveData: [],
      topSiteData: [],
      netTypeData: [],
      ispData: [],
      natTypeData: [],
      onlineNum: 0
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
        fetchLiveTimeData().then(res => {
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
      fetchLiveData('version:web').then(res => {
        const data = res.data
        if(data) {
          this.webVerData = formatPieData(data.data)
        }
      })
      fetchLiveData('version:android').then(res => {
          const data = res.data
          if(data) {
              this.androidVerData = formatPieData(data.data)
          }
      })
      fetchLiveData('version:ios').then(res => {
          const data = res.data
          if(data) {
              this.iosVerData = formatPieData(data.data)
          }
      })
      fetchLiveData('version:pc').then(res => {
          const data = res.data
          if(data) {
              this.pcVerData = formatPieData(data.data)
          }
      })
      fetchLiveData('tag').then(res => {
        const data = res.data
        if(data) {
          this.tagData = formatPieData(data.data)
        }
      })
      fetchLiveData('device').then(res => {
        const data = res.data
        if(data) {
          this.deviceData = formatPieData(data.data)
        }
      })
      fetchLiveData('live').then(res => {
        const data = res.data
        if(data) {
          this.liveData = formatPieData(data.data)
        }
      })
      fetchLiveData('netType').then(res => {
        const data = res.data
        if(data) {
          this.netTypeData = formatPieData(data.data)
        }
      })
      fetchLiveData('isp').then(res => {
          const data = res.data
          if(data) {
              this.ispData = formatPieData(data.data)
          }
      })
      fetchLiveData('nat').then(res => {
          const data = res.data
          if(data) {
              this.natTypeData = formatPieData(data.data)
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

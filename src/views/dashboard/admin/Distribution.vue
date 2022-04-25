<template>
  <div class="dashboard-editor-container">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12" :lg="8" class="chart-col">
        <pie-card title="Web版本分布" :data="webVerData"/>
      </el-col>

      <el-col :xs="24" :sm="12" :lg="8" class="chart-col">
        <pie-card title="Android版本分布" :data="androidVerData"/>
      </el-col>

      <el-col :xs="24" :sm="12" :lg="8" class="chart-col">
        <pie-card title="iOS版本分布" :data="iosVerData"/>
      </el-col>

      <el-col :xs="24" :sm="12" :lg="8" class="chart-col">
        <pie-card title="Electron版本分布" :data="pcVerData"/>
      </el-col>

<!--      <el-col :xs="24" :sm="12" :lg="8" class="chart-col">-->
<!--        <pie-card title="Tag分布" :data="tagData"/>-->
<!--      </el-col>-->

      <el-col :xs="24" :sm="12" :lg="8" class="chart-col">
        <pie-card title="终端分布" :data="deviceData"/>
      </el-col>

      <el-col :xs="24" :sm="12" :lg="8" class="chart-col">
        <pie-card title="直播点播分布" :data="liveData"/>
      </el-col>

      <el-col :xs="24" :sm="12" :lg="8" class="chart-col">
        <pie-card title="头部域名分布" :data="topSiteData"/>
      </el-col>

      <el-col :xs="24" :sm="12" :lg="8" class="chart-col">
        <pie-card title="网络类型分布" :data="netTypeData"/>
      </el-col>

<!--      <el-col :xs="24" :sm="12" :lg="8" class="chart-col">-->
<!--        <pie-card title="运营商分布" :data="ispData"/>-->
<!--      </el-col>-->

      <el-col :xs="24" :sm="12" :lg="8" class="chart-col">
        <pie-card title="NAT类型分布" :data="natTypeData"/>
      </el-col>

    </el-row>
  </div>
</template>

<script>
import PieCard from '@/components/PieCard'
import { fetchLiveTimeData } from '@/api/liveData'
import { fetchLiveData } from '@/api/liveData'
import { fetchDomain } from '@/api/userDomain'
import { formatPieData } from '@/utils/format'

export default {
  name: 'Distribution',
  components: {
    PieCard
  },
  data() {
    return {
      pcVerData: [],
      androidVerData: [],
      iosVerData: [],
      webVerData: [],
      // tagData: [],
      deviceData: [],
      liveData: [],
      topSiteData: [],
      netTypeData: [],
      // ispData: [],
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
      // fetchLiveData('tag').then(res => {
      //   const data = res.data
      //   if(data) {
      //     this.tagData = formatPieData(data.data)
      //   }
      // })
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
      // fetchLiveData('isp').then(res => {
      //     const data = res.data
      //     if(data) {
      //         this.ispData = formatPieData(data.data)
      //     }
      // })
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

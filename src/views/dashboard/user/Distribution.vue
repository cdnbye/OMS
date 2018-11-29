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
import { fetchDisData } from '@/api/user/liveData'
import { mapGetters } from 'vuex'

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
      netTypeData: []
    }
  },
  computed: {
    ...mapGetters([
      'currentDomain'
    ])
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      fetchDisData(this.currentDomain.uid, this.currentDomain.id, 'version').then(res => {
        if(res.data) {
          this.versionData = [...res.data]
        }
      })
      fetchDisData(this.currentDomain.uid, this.currentDomain.id, 'tag').then(res => {
        if(res.data) {
          this.tagData = [...res.data]
        }
      })
      fetchDisData(this.currentDomain.uid, this.currentDomain.id, 'device').then(res => {
        if(res.data) {
          this.deviceData = [...res.data]
        }
      })
      fetchDisData(this.currentDomain.uid, this.currentDomain.id, 'live').then(res => {
        if(res.data) {
          this.liveData = [...res.data]
        }
      })
      fetchDisData(this.currentDomain.uid, this.currentDomain.id, 'netType').then(res => {
        if(res.data) {
          this.netTypeData = [...res.data]
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

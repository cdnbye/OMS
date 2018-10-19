<template>
  <div class="dashboard-editor-container">
    <PanelGroup />
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12" :lg="8">
        <el-card>
          <div slot="header">
            <span>版本分布</span>
          </div>
          <Piechart :chart-data="this.versionData" />
        </el-card>
      </el-col>

      <el-col :xs="24" :sm="12" :lg="8">
        <el-card>
          <div slot="header">
            <span>Tag分布</span>
          </div>
          <Piechart :chart-data="tagData" />
        </el-card>
      </el-col>

    </el-row>
  </div>
</template>

<script>
import PanelGroup from './components/PanelGroup'
import Piechart from '@/components/PieChart'
import { fetchVersion, fetchTag } from '@/api/historyData'

export default {
  name: 'Dashboard',
  components: {
    PanelGroup,
    Piechart
  },
  data() {
    return {
      versionData: [],
      tagData: []
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
              name: item.version,
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
</style>

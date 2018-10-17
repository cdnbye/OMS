<template>
  <div class="dashboard-editor-container">
    <PanelGroup />
    <el-row>
      <el-col :xs="24" :sm="12" :lg="10">
        <el-card>
          <div slot="header">
            <span>版本分布</span>
          </div>
          <Piechart :chart-data="this.chartData" :option="this.option" />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PanelGroup from './components/PanelGroup'
import Piechart from '@/components/PieChart'
import { fetchVersion } from '@/api/historyData'

export default {
  name: 'Dashboard',
  components: {
    PanelGroup,
    Piechart
  },
  data() {
    return {
      chartData: [],
      option: {
        name: '版本分布'
      }
    }
  },
  mounted() {
    fetchVersion().then(res => {
      res.data.forEach(item => {
        this.chartData.push({
          name: item.version,
          value: item.num
        })
      })
    })
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

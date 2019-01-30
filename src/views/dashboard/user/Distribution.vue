<template>
  <el-row :gutter="20">
    <el-col :xs="24" :sm="12" :lg="8" class="chart-col">
      <el-card>
        <div slot="header">
          <span>{{ $t('dashboard.versionDis') }}</span>
        </div>
        <Piechart :chart-data="data.versionData" />
      </el-card>
    </el-col>

    <el-col :xs="24" :sm="12" :lg="8" class="chart-col">
      <el-card>
        <div slot="header">
          <span>{{ $t('dashboard.tagDis') }}</span>
        </div>
        <Piechart :chart-data="data.tagData" />
      </el-card>
    </el-col>

    <el-col :xs="24" :sm="12" :lg="8" class="chart-col">
      <el-card>
        <div slot="header">
          <span>{{ $t('dashboard.terminalDis') }}</span>
        </div>
        <Piechart :chart-data="data.deviceData" />
      </el-card>
    </el-col>

    <el-col :xs="24" :sm="12" :lg="8" class="chart-col">
      <el-card>
        <div slot="header">
          <span>{{ $t('dashboard.liveDis') }}</span>
        </div>
        <Piechart :chart-data="data.liveData" />
      </el-card>
    </el-col>

    <el-col :xs="24" :sm="12" :lg="8" class="chart-col">
      <el-card>
        <div slot="header">
          <span>{{ $t('dashboard.natDis') }}</span>
        </div>
        <Piechart :chart-data="data.netTypeData" />
      </el-card>
    </el-col>

  </el-row>
</template>

<script>
import Piechart from '@/components/PieChart'

export default {
  name: 'Distribution',
  components: {
    Piechart
  },
  props: {
    data: {
      type: Object,
      required: true,
      default: {
        versionData: [],
        tagData: [],
        deviceData: [],
        liveData: [],
        netTypeData: []
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.chart-col {
  margin-bottom: 20px;
}
</style>

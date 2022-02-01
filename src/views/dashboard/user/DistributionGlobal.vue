<template>
  <el-row :gutter="20">
    <el-col :xs="24" :sm="12" :lg="8" class="chart-col">
      <el-card>
        <div slot="header">
          <span>{{ $t('dashboard.domainDis') }}</span>
        </div>
        <Piechart :chart-data="data.domainData" />
      </el-card>
    </el-col>

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
          <span>{{ $t('dashboard.liveDis') }}</span>
        </div>
        <Piechart :chart-data="data.liveData" />
      </el-card>
    </el-col>

    <el-col :xs="24" :sm="12" :lg="8" class="chart-col">
      <el-card>
        <div slot="header">
          <span>{{ $t('dashboard.netDis') }}</span>
        </div>
        <Piechart :chart-data="data.netTypeData" />
      </el-card>
    </el-col>

    <el-col :xs="24" :sm="12" :lg="8" class="chart-col">
      <el-card>
        <div slot="header">
          <span>{{ $t('dashboard.ispDis') }}</span>
        </div>
        <Piechart :chart-data="data.ispData" />
      </el-card>
    </el-col>

  </el-row>
</template>

<script>
import Piechart from '@/components/PieChart'
import { mapGetters } from 'vuex'

export default {
  name: 'DistributionGlobal',
  components: {
    Piechart
  },
  computed: {
    ...mapGetters([
      'currentDomain',
    ])
  },
  props: {
    data: {
      type: Object,
      required: true,
      default: {
        domainData: [],
        versionData: [],
        tagData: [],
        liveData: [],
        netTypeData: [],
        ispData: [],
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

<template>
  <el-row :gutter="20">
    <el-col :xs="24" :sm="12" :lg="8" class="chart-col">
      <pie-card :title="$t('dashboard.versionDis')" :data="data.versionData"/>
    </el-col>

    <el-col :xs="24" :sm="12" :lg="8" class="chart-col">
      <pie-card :title="$t('dashboard.tagDis')" :data="data.tagData"/>
    </el-col>

    <el-col v-if="currentDomain.native === false" :xs="24" :sm="12" :lg="8" class="chart-col">
      <pie-card :title="$t('dashboard.terminalDis')" :data="data.deviceData"/>
    </el-col>

    <el-col :xs="24" :sm="12" :lg="8" class="chart-col">
      <pie-card :title="$t('dashboard.liveDis')" :data="data.liveData"/>
    </el-col>

    <el-col :xs="24" :sm="12" :lg="8" class="chart-col">
      <pie-card :title="$t('dashboard.netDis')" :data="data.netTypeData"/>
    </el-col>

<!--    <el-col :xs="24" :sm="12" :lg="8" class="chart-col">-->
<!--      <pie-card :title="$t('dashboard.ispDis')" :data="data.ispData"/>-->
<!--    </el-col>-->

    <el-col v-if="currentDomain.native" :xs="24" :sm="12" :lg="8" class="chart-col">
      <pie-card :title="$t('dashboard.natDis')" :data="data.natTypeData"/>
    </el-col>

  </el-row>
</template>

<script>
import PieCard from '@/components/PieCard'
import { mapGetters } from 'vuex'

export default {
  name: 'Distribution',
  components: {
    PieCard
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
        versionData: [],
        tagData: [],
        deviceData: [],
        liveData: [],
        netTypeData: [],
        // ispData: [],
        natTypeData: [],
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

<template>
  <el-card shadow="hover">
    <div slot="header">
      <span>{{ title }}</span>
    </div>
    <Piechart :chart-data="data" />
  </el-card>
</template>

<script>
import Piechart from '@/components/PieChart'
export default {
  name: "PieCard",
  components: {
    Piechart,
  },
  props: {
    title: {
      type: String,
      require: true,
    },
    data: {
      type: Array,
      require: true,
    },
  }
}
</script>

<style scoped>

</style>

<template>
  <el-tooltip effect="light" placement="top-start">
    <div class="content" slot="content" v-html="content"></div>
    <i style="color: #337ab7" class="el-icon-question"/>    
  </el-tooltip>
</template>

<script>
export default {
  name: 'PointTip',
  props: {
    content: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  .content {
    font-size: 15px;
  }
</style>

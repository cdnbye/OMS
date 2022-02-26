<template>
  <el-row v-if="show">
    <el-col :xs="20" :sm="12" :lg="12">
      <el-input v-model="token" :disabled="true">
        <template slot="prepend">Token: </template>
      </el-input>
    </el-col>
    <el-col :xs="3" :sm="2" :lg="1">
      <el-tooltip placement="top">
        <div slot="content">{{ $t('app.copy') }}</div>
        <el-button @click="handleCopy($event)" type="info" plain style="padding: 6px 10px">
          <img v-bind:src="copyImg" alt="" min-width="24" height="24">
        </el-button>
      </el-tooltip>
    </el-col>
  </el-row>
</template>

<script>
import clip from '@/utils/clipboard'
import copyImg from '@/assets/copy.png'

export default {
  name: "CopyToken",
  props: {
    token: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      copyImg,
      show: true,
    }
  },
  methods: {
    handleCopy() {
      clip(this.token, event)
    },
  }
}
</script>

<style scoped>

</style>

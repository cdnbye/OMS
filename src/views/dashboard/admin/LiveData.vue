<template>
  <div class="dashboard-editor-container">
    <PanelGroup />
    <!-- <PanelGroup v-on:numChange="getOnlineNum" /> -->
  </div>
</template>

<script>
import PanelGroup from './components/PanelGroup'
import { fetchLiveData } from '@/api/liveData'

export default {
  name: 'Dashboard',
  components: {
    PanelGroup
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
.dashboard-editor-container {
  padding: 16px 32px;
  background-color: rgb(240, 242, 245);
  min-height: calc(100vh - 84px);
}
</style>

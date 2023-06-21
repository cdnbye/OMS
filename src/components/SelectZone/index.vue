<template>
  <el-dropdown @command="handleConsoleSelect" :hide-on-click="false">
          <span class="el-dropdown-link" :style="showRed === true ? {color: '#f56c6c'} : ''">
            {{ selectedText }}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="p1" >{{ $t('auth.consoleEU') }}</el-dropdown-item>
      <el-dropdown-item command="p3" >{{ $t('auth.consoleHK') }}</el-dropdown-item>
      <el-dropdown-item command="p2" >{{ $t('auth.consoleUSA') }}</el-dropdown-item>
      <el-dropdown-item v-if="showLocal" command="d1" >Localhost</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { LOCATION, BASE_URLS } from '@/constant'
import { getItem, setItem } from '@/utils/storage'
import request from "@/utils/request";

export default {
  name: "SelectZone",
  data() {
    return {
      selectedZone: '',
      showRed: false,
      showLocal: false,
    }
  },
  mounted() {
    this.checkSelected()
    if (location.hostname === 'localhost') {
      this.showLocal = true
    }
  },
  computed: {
    selectedText() {
      this.checkSelected()
      return this.selectedZone || this.$t('auth.console')
    }
  },
  methods: {
    checkSelected(env) {
      // this.selectedZone = this.$t('auth.console')
      this.showRed = false
      if (!env) {
        env = getItem(LOCATION)
      }
      if (env === 'p1') {
        this.selectedZone = this.$t('navbar.currZone') + this.$t('auth.consoleEU')
      } else if (env === 'p3') {
        this.selectedZone = this.$t('navbar.currZone') + this.$t('auth.consoleHK')
      } else if (env === 'p2') {
        this.selectedZone = this.$t('navbar.currZone') + this.$t('auth.consoleUSA')
      } else if (env === 'd1') {
        this.selectedZone = this.$t('navbar.currZone') + "local"
      } else {
        this.showRed = true
      }
    },
    handleConsoleSelect(command) {
      this.checkSelected(command)
      request.defaults.baseURL = BASE_URLS[command]
      setItem(LOCATION, command)
    },
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.el-dropdown-link {
  cursor: pointer;
  /*color: #409EFF;*/
}
</style>

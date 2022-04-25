<template>
  <el-dropdown @command="handleConsoleSelect" :hide-on-click="false">
          <span class="el-dropdown-link" :style="showRed === true ? {color: '#f56c6c'} : ''">
            {{ selectedText }}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="cn" >{{ $t('auth.consoleCN') }}</el-dropdown-item>
      <el-dropdown-item command="hk" >{{ $t('auth.consoleHK') }}</el-dropdown-item>
      <el-dropdown-item command="us" >{{ $t('auth.consoleUSA') }}</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { LOCATION, BASE_URLS } from '@/constant'
import { getItem, setItem } from '@/utils/storage'
import request from "@/utils/request";

export default {
  name: "SelectZone",
  props: {
    color: {
      type: String,
      default: '#f56c6c',
      required: false
    }
  },
  data() {
    return {
      selectedZone: '',
      showRed: false,
    }
  },
  mounted() {
    this.checkSelected()
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
      if (env === 'cn') {
        this.selectedZone = this.$t('navbar.currZone') + this.$t('auth.consoleCN')
      } else if (env === 'hk') {
        this.selectedZone = this.$t('navbar.currZone') + this.$t('auth.consoleHK')
      } else if (env === 'us') {
        this.selectedZone = this.$t('navbar.currZone') + this.$t('auth.consoleUSA')
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

<template>
  <el-dialog
    :visible.sync="tipVisible"
    :width="device === 'mobile' ? '80%' : '30%'">
    <span>{{ $t('dashboard.tip') }}</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="tipVisible = false">{{ $t('common.cancel') }}</el-button>
      <el-button type="primary" @click="handleGoApp">{{ $t('dashboard.goApp') }}</el-button>
      <el-button type="primary" @click="handlePush">{{ $t('dashboard.goBind') }}</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NoBindTip',
  data() {
    return {
      tipVisible: false
    }
  },
  watch: {
    currentDomain(domain) {
      if(domain.id !== undefined) {
        this.tipVisible = false
      }
    }
  },
  mounted() {
    setTimeout(() => {
        if(this.roles.indexOf('user') > -1 && this.currentDomain.id === undefined) {
            this.tipVisible = true
        }
    }, 5000)
  },
  computed: {
    ...mapGetters([
      'device',
      'currentDomain',
      'roles'
    ])
  },
  methods: {
    handlePush() {
      this.tipVisible = false
      this.$router.push('/user/domain')
    },
    handleGoApp() {
      this.tipVisible = false
      this.$router.push('/app/app')
    }
  }
}
</script>

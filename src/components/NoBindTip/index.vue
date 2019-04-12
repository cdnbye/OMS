<template>
  <el-dialog
    :visible.sync="tipVisible"
    :width="device === 'mobile' ? '80%' : '30%'">
    <span>{{ $t('dashboard.tip') }}</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="tipVisible = false">{{ $t('common.cancel') }}</el-button>
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
  mounted() {
    if(this.roles.indexOf('user') > -1 && this.currentDomain.id === undefined) {
      this.tipVisible = true
    }
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
    }
  }
}
</script>

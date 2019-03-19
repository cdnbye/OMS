<template>
  <el-dialog
    :visible.sync="tipVisible"
    :width="device === 'mobile' ? '80%' : '30%'">
    <span>{{ $t('dashboard.tip') }}</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose">{{ $t('common.cancel') }}</el-button>
      <el-button type="primary" @click="handlePush">{{ $t('dashboard.goBind') }}</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NoBindTip',
  props: {
    tipVisible: {
      type: Boolean,
      required: true
    },
    handleClose: {
      type: Function,
      required: true
    }
  },
  computed: {
    ...mapGetters([
      'device'
    ])
  },
  methods: {
    handlePush() {
      this.handleClose()
      this.$router.push('/user/domain')
    }
  }
}
</script>

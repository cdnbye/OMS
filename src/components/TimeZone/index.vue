<template>
  <div style="display: inline-block; text-align: center; width: 100%; ">
    <el-dialog
        :title="$t('dashboard.changeUTC')"
        :visible.sync="mVisible"
        :width="device === 'mobile' ? '80%' : '30%'"
        @close="hide"
    >
      <el-select v-model="selectValue" style="width: 80%">
        <template v-for = "item in options">
          <el-option
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </template>
      </el-select>
      <span slot="footer" class="dialog-footer">
        <el-button @click="hide">{{ $t('common.cancel')}}</el-button>
        <el-button type="primary" @click="handleSelect">{{ $t('common.ok')}}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getItem, setItem } from "@/utils/storage";
import { changeTimeZone } from '@/api/user'

export default {
  name: "TimeZone",
  props: {
    visible: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      mVisible: this.visible,
      selectValue: 0,
      options: [
        {value: 12, label: 'UTC±12'},
        {value: 11, label: 'UTC+11'},
        {value: 10, label: 'UTC+10'},
        {value: 9, label: 'UTC+9'},
        {value: 8, label: 'UTC+8'},
        {value: 7, label: 'UTC+7'},
        {value: 6, label: 'UTC+6'},
        {value: 5, label: 'UTC+5'},
        {value: 4, label: 'UTC+4'},
        {value: 3, label: 'UTC+3'},
        {value: 2, label: 'UTC+2'},
        {value: 1, label: 'UTC+1'},
        {value: 0, label: 'UTC+0'},
        {value: -1, label: 'UTC-1'},
        {value: -2, label: 'UTC-2'},
        {value: -3, label: 'UTC-3'},
        {value: -4, label: 'UTC-4'},
        {value: -5, label: 'UTC-5'},
        {value: -6, label: 'UTC-6'},
        {value: -7, label: 'UTC-7'},
        {value: -8, label: 'UTC-8'},
        {value: -9, label: 'UTC-9'},
        {value: -10, label: 'UTC-10'},
        {value: -11, label: 'UTC-11'},
      ],
    }
  },

  watch: {
    visible: {
      handler(val) {
        this.mVisible = val
      },
    },
    profile: {
      handler(val) {
        this.selectValue = val.utc || 0
      },
    }
  },
  mounted() {
    const profile = getItem('profile')
    if (profile) this.selectValue = profile.utc || 0
  },
  computed: {
    ...mapGetters([
      'device',
      'profile',
    ]),
  },
  methods: {
    hide() {
      this.mVisible = false
      this.$emit('hide')
    },
    handleSelect() {
      this.hide()
      changeTimeZone({utc: this.selectValue}).then(() => {
        this.$notify({
          title: this.$t('common.success'),
          message: this.$t('app.updateItemSuccess'),
          type: 'success'
        })
        const profile = getItem('profile')
        if (profile) {
          profile.utc = this.selectValue
          setItem('profile', profile)
        }
      })

    },
  }
}
</script>

<style scoped>

</style>

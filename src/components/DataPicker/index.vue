<template>
  <el-form :inline="true" style="margin-top: 10px">
    <el-form-item :xs="10" :sm="6" :lg="4">
      <el-radio-group v-model="mRadio" @change="selectChange">
        <el-radio-button v-if="hour" label="hour">{{ $t('historyData.hour')}}</el-radio-button>
        <el-radio-button v-if="day" label="day">{{ $t('historyData.day')}}</el-radio-button>
        <el-radio-button v-if="week" label="week">{{ $t('historyData.week')}}</el-radio-button>
        <el-radio-button v-if="month" label="month">{{ $t('historyData.month')}}</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item :xs="10" :sm="6" :lg="4">
      <el-date-picker
          v-model="date"
          @change="dataChange"
          type="datetimerange"
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date">
      </el-date-picker>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "DataPicker",
  props: {
    hour: {
      type: Boolean,
      default: true
    },
    day: {
      type: Boolean,
      default: true
    },
    week: {
      type: Boolean,
      default: true
    },
    month: {
      type: Boolean,
      default: true
    },
    radio: {
      type: String,
      required: true
    },
    date: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      mRadio: this.radio,
    }
  },
  methods: {
    selectChange(val) {
      this.$emit("selectChange", val)
    },
    dataChange(date) {
      this.$emit("dataChange", date)
    }
  }
}
</script>

<style scoped>

</style>

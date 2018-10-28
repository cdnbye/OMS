<template>
  <el-card :body-style="device === 'mobile' ? {padding: '0'} : {padding: '50px'}">
    <el-form ref="configForm" :model="configForm" label-width="120px">
      <el-form-item label="max_peer_num">
        <el-slider v-model="configForm.max_peer_num" :max="30" @change="numChange" show-input></el-slider>
      </el-form-item>
      <el-form-item label="max_peer_conn">
        <el-slider v-model="configForm.max_peer_conn" :max="30" @change="connChange" show-input></el-slider>
      </el-form-item>
      <el-form-item label="report_interval">
        <el-slider v-model="configForm.report_interval" :min="10" :max="60" @change="intervalChange" show-input></el-slider>
      </el-form-item>
      <el-form-item>
        <el-button :loading="buttonLoading" :disabled="!isChanged" type="primary" @click.native.prevent="handleSubmit">更改</el-button>
        <el-button type="primary" @click.native.prevent="reset">取消</el-button>
      </el-form-item>
    </el-form>
  </el-card> 
</template>

<script>
import { mapGetters } from 'vuex'
import { fetchTrackerConfig, configTracker } from '@/api/trackerConfig'

export default {
  name: 'TrackerConfig',
  data() {
    return {
      isChanged: false,
      buttonLoading: false,
      tempData: {},
      configForm: {
        max_peer_num: 0,
        max_peer_conn: 0,
        report_interval: 0
      }
    }
  },
  computed: {
    ...mapGetters([
      'device'
    ])
  },
  mounted() {
    fetchTrackerConfig().then(res => {
      this.tempData = {...res.data}
      this.configForm = {...res.data}
    })
  },
  methods: {
    handleSubmit() {
      this.buttonLoading = true
      configTracker(this.configForm).then(res => {
        this.buttonLoading = false
        this.isChanged = false
        this.tempData = {...this.configForm}
        this.$message({
          message: '更改配置成功',
          type: 'success'
        })
      }).catch(err => {
        this.buttonLoading = false
        console.log(err)
      })
    },
    reset() {
      this.isChanged = false
      this.configForm = this.tempData
    },
    numChange() {
      this.isChanged = true
    },
    connChange() {
      this.isChanged = true
    },
    intervalChange() {
      this.isChanged = true
    }
  }
}
</script>

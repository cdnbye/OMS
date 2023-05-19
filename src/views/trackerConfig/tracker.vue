<template>
  <el-card :body-style="device === 'mobile' ? {padding: '0'} : {padding: '50px'}">
    <el-form ref="configForm" :model="configForm" label-width="120px">
      <el-form-item label="返回节点数量">
        <el-slider v-model="configForm.max_peer_num" :max="50" @change="numChange" show-input></el-slider>
      </el-form-item>
      <el-form-item label="节点最大连接数">
        <el-slider v-model="configForm.max_peer_conn" :max="50" @change="maxConnChange" show-input></el-slider>
      </el-form-item>
      <el-form-item label="节点最小连接数">
        <el-slider v-model="configForm.min_peer_conn" :max="15" @change="minConnChange" show-input></el-slider>
      </el-form-item>
      <el-form-item label="上报时间间隔">
        <el-slider v-model="configForm.report_interval" :min="10" :max="300" @change="intervalChange" show-input></el-slider>
      </el-form-item>
      <el-form-item label="日志采样比率">
        <el-slider v-model="configForm.log_rate" :min="0" :max="100" @change="piChange" show-input></el-slider>
      </el-form-item>
      <el-form-item label="自适应上报时间">
        <el-tooltip content="打开后上报时间间隔表示30万在线时应达到的值" placement="top">
          <el-switch v-model="configForm.auto_report_interval" active-color="green" inactive-color="red" @change="autoReportIntervalChange"></el-switch>
        </el-tooltip>
      </el-form-item>
      <el-form-item label="在线调试模式">
        <el-switch v-model="configForm.online_debug" active-color="green" inactive-color="red" @change="debugChange"></el-switch>
      </el-form-item>
      <el-form-item label="启动信令熔断">
        <el-switch v-model="configForm.enable_fusing" active-color="green" inactive-color="red" @change="fusingChange"></el-switch>
      </el-form-item>
      <el-form-item label="启动服务降级">
        <el-switch v-model="configForm.signal_compressed" active-color="green" inactive-color="red" @change="fusingChange"></el-switch>
      </el-form-item>
      <el-form-item label="同时在线节点数">
        <el-slider v-model="configForm.max_nodes" :min="0" :max="10000000" @change="maxNodesChange" show-input></el-slider>
      </el-form-item>
      <el-form-item label="服务状态">
        <el-switch v-model="configForm.tracker_open" active-color="green" inactive-color="red" :disabled="true"></el-switch>
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
        min_peer_conn: 0,
        report_interval: 0,
        tracker_open: false,
        max_nodes: 0,
        auto_report_interval: false,
        log_rate: 0,
        online_debug: false,
        enable_fusing: false,
        signal_compressed: false,
      }
    }
  },
  computed: {
    ...mapGetters([
      'device'
    ])
  },
  created() {
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
    maxConnChange() {
      this.isChanged = true
    },
    minConnChange() {
      this.isChanged = true
    },
    intervalChange() {
      this.isChanged = true
    },
    piChange() {
        this.isChanged = true
    },
    maxNodesChange() {
      this.isChanged = true
    },
    autoReportIntervalChange() {
      this.isChanged = true
    },
    debugChange() {
      this.isChanged = true
    },
    fusingChange() {
      this.isChanged = true
    },
  }
}
</script>

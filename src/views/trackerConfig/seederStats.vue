<template>
  <div class="app-container" v-loading="loading">
    <div style="margin-bottom: 10px">
      <el-input placeholder="worker pid, url or number" v-model="value" style="width: 350px; margin-right: 5px">
        <template slot="prepend" >
          <el-select v-model="action" slot="prepend" placeholder="Select" style="width: 110px">
            <el-option label="Restart" value="restart"></el-option>
            <el-option label="RestartAll" value="restart_all"></el-option>
            <el-option label="Stop" value="stop"></el-option>
            <el-option label="StopAll" value="stop_all"></el-option>
            <el-option label="Workers" value="ping"></el-option>
          </el-select>
        </template>
      </el-input>
      <el-button type="warning" @click="doAction()">{{ $t('common.ok') }}</el-button>
    </div>
    <vue-json-pretty
        showIcon
        showLineNumber
        :showDoubleQuotes="false"
        :data="jsonData" />
  </div>
</template>

<script>
import axios from 'axios'
import { formatTraffic } from '@/utils/format'
import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';
export default {
  name: "AdminSeederStats",
  components: {
    VueJsonPretty,
  },
  data() {
    return {
      loading: false,
      url: '',
      accessToken: '',
      jsonData: {},
      action: '',
      value: '',
    }
  },
  mounted() {
    const { url, accessToken } = this.$route.query
    this.url = url
    this.accessToken = accessToken
    this.getStats()
    this.timer = setInterval(() => {
      this.getStats()
    }, 20000)
  },
  methods: {
    doAction() {
      this.loading = true
      if (this.action === 'restart' || this.action === 'stop') {
        const pids = this.value.split(' ').filter(pid => !!pid).map(pid => Number(pid))
        for (let pid of pids) {
          axios.post(`${this.url}/${this.action}/${pid}`, {}, {
            headers: {
              "X-Access-Token": this.accessToken || undefined,
            }
          }).finally(() => {
            this.loading = false
          })
        }
      } else if (this.action === 'ping') {
        axios.post(`${this.url}/${this.action}`, {
          workers: Number(this.value),
        }, {
          headers: {
            "X-Access-Token": this.accessToken || undefined,
          }
        }).finally(() => {
          this.loading = false
        })
      } else if (this.action === 'restart_all' || this.action === 'stop_all') {
        axios.post(`${this.url}/${this.action}`, {}, {
          headers: {
            "X-Access-Token": this.accessToken || undefined,
          }
        }).finally(() => {
          this.loading = false
        })
      }
      this.value = ''
      this.action = ''
    },
    getStats() {
      this.loading = true
      axios.get(this.url+'/stats',{
        headers: {
          "X-Access-Token": this.accessToken || undefined,
        }
      }).then(res => {
        const json = res.data
        const { master, workers } = json
        master.memory = this.formatValue(master.memory)
        if (master.averageUplink) {
          master.averageUplink = `${Math.round(master.averageUplink)}Mbps`
        }
        if (workers) {
          Object.keys(workers).forEach(key => {
            const worker = workers[key]
            if (worker.seedFrom) {
              worker.seedFrom = new Date(worker.seedFrom)
              worker.uploaded = this.formatValue(worker.uploaded)
              worker.downloaded = this.formatValue(worker.downloaded)
            }
            if (worker.averageUplink) {
              worker.averageUplink = `${Math.round(worker.averageUplink)}Mbps`
            }
            if (worker.diskCacheSize) {
              worker.diskCacheSize = this.formatValue(worker.diskCacheSize)
            }
            if (worker.memory) {
              worker.memory = this.formatValue(worker.memory)
            }
          })
        }
        this.jsonData = json
      }).finally(() => {
        this.loading = false
      })
    },
    formatValue(value) {
      const obj = formatTraffic(value)
      return `${obj.num}${obj.unit}`
    }
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
}
</script>

<style scoped>

</style>

<template>
  <div class="app-container" v-loading="loading">
    <div style="margin-bottom: 10px">
      <el-input placeholder="worker pid, url or number" v-model="value" style="width: 350px; margin-right: 5px">
        <template slot="prepend" >
          <el-select v-model="action" slot="prepend" placeholder="Select" style="width: 110px">
            <el-option label="Restart" value="restart"></el-option>
            <el-option label="Kill" value="kill"></el-option>
            <el-option label="Migrate" value="copy"></el-option>
            <el-option label="Workers" value="ping"></el-option>
            <el-option label="Limits" value="limits"></el-option>
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
import { actionSeeder, copySeeder } from '@/api/user/seeder'
import { getID } from '@/utils/auth'
import { formatTraffic } from '@/utils/format'
import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';

export default {
  name: "seederStats",
  components: {
    VueJsonPretty,
  },
  mounted() {
    const { sid } = this.$route.query
    this.sid = sid
    const uid = getID()
    this.getStats(uid, sid)
    this.timer = setInterval(() => {
      this.getStats(uid, sid)
    }, 20000)
  },
  methods: {
    copyTo() {
      const infos = []
      const json = this.jsonData
      if (json.workers) {
        Object.keys(json.workers).forEach(key => {
          const worker = json.workers[key]
          if (worker.channelId) {
            infos.push({
              channel: worker.channelId,
              priority: worker.priority,
              live: !worker.isVod,
              keepAlive: worker.keepAlive,
            })
          }
        })
      }
      this.loading = true
      copySeeder(getID(), {
        infos,
        target: this.value,
      }).then(() => {
        this.$notify({
          title: this.$t('common.success'),
          type: 'success'
        });
        this.value = ''
        this.action = ''
      }).finally(() => {
        this.loading = false
      })
    },
    doAction() {
      if (this.action === 'copy') {
        this.copyTo()
        return
      }
      if (!this.action) return
      this.loading = true
      const data = {
        action: this.action,
      }
      if (this.action === 'ping' || this.action === 'limits') {
        data.workers = Number(this.value)
      } else {
        const pids = this.value.split(' ').filter(pid => !!pid).map(pid => Number(pid))
        if (pids.length === 1) {
          data.pid = pids[0]
        } else {
          data.pids = pids
        }
      }
      actionSeeder(getID(), this.sid, data).then(() => {
        this.$notify({
          title: this.$t('common.success'),
          type: 'success'
        });
        this.value = ''
        this.action = ''
      }).finally(() => {
        this.loading = false
      })
    },
    getStats(uid, sid) {
      this.loading = true
      actionSeeder(uid, sid, {
        action: 'stats'
      }).then(resp => {
        const json = JSON.parse(resp.data)
        const { master, workers } = json;
        if (master) {
          master.memory = this.formatValue(master.memory)
          if (master.averageUplink) {
            master.averageUplink = `${Math.round(master.averageUplink)}Mbps`
          }
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
  data() {
    return {
      loading: false,
      action: '',
      sid: 0,
      value: '',
      jsonData: {},
    }
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
}
</script>

<style scoped>

</style>

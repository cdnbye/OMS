<template>
  <div class="app-container" v-loading="loading">
    <div style="margin-bottom: 10px">
      <el-input placeholder="worker pid or url" v-model="pidOrUrl" style="width: 350px; margin-right: 5px">
        <template slot="prepend" >
          <el-select v-model="action" slot="prepend" placeholder="Select" style="width: 100px">
            <el-option label="Restart" value="restart"></el-option>
            <el-option label="Kill" value="kill"></el-option>
            <el-option label="Migrate" value="copy"></el-option>
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
        target: this.pidOrUrl,
      }).then(() => {
        this.$notify({
          title: this.$t('common.success'),
          type: 'success'
        });
        this.pidOrUrl = ''
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
      const pid = Number(this.pidOrUrl)
      if (!pid || !this.action) return
      this.loading = true
      actionSeeder(getID(), this.sid, {
        action: this.action,
        pid,
      }).then(() => {
        this.$notify({
          title: this.$t('common.success'),
          type: 'success'
        });
        this.pidOrUrl = ''
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
        if (json.workers) {
          Object.keys(json.workers).forEach(key => {
            const worker = json.workers[key]
            if (worker.seedFrom) {
              worker.seedFrom = new Date(worker.seedFrom)
            }
          })
        }
        this.jsonData = json
      }).finally(() => {
        this.loading = false
      })
    }
  },
  data() {
    return {
      loading: false,
      action: '',
      sid: 0,
      pidOrUrl: '',
      jsonData: {}
    }
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
}
</script>

<style scoped>

</style>

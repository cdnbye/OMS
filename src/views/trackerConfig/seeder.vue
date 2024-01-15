<template>
  <el-row :gutter="20" class="panel-group">
    <template v-for="item in list">
      <el-col :key="item.url" :xs="24" :sm="12" :lg="4" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-description">
            <div class="card-panel-name">{{item.name}}</div>
            <span class="card-panel-num">{{item.url}}</span>
            <template v-if="item.failed">
              <div class="card-panel-text" style="color: red">failed</div>
            </template>
            <template v-else>
              <div class="card-panel-text" :style="{color: item.workers === 0 ? 'red' : ''}">workers: {{ item.workers }}</div>
              <div class="card-panel-text">full: {{ item.full }}</div>
              <div class="card-panel-text" :style="{color: item.bandwidth === 0 ? 'red' : ''}">bandwidth: {{ item.bandwidth }}</div>
              <div class="card-panel-text">currentUplink: {{ item.currentUplink }}</div>
              <div class="card-panel-text">version: {{ item.version }}</div>
              <el-button type="primary" size="mini"  @click="gotoStats(item)">Stats</el-button>
            </template>
          </div>
        </div>
      </el-col>
    </template>
  </el-row>
</template>

<script>
import axios from 'axios'
let int = null

export default {
  name: 'Seeder',
  data() {
    return {
      list: [
        { url: 'http://43.129.228.44:8080', failed: false, bandwidth: 0, uplink: 0, workers: 0, full: false, name: 'hk', accessToken: '&dfgd$15~', version: '' },
        { url: 'http://106.52.254.88:8080', failed: false, bandwidth: 0, uplink: 0, workers: 0, full: false, name: 'gz', accessToken: '&dfgd$15~', version: '' },
        { url: 'http://1.117.87.171:8080', failed: false, bandwidth: 0, uplink: 0, workers: 0, full: false, name: 'sh', accessToken: '&dfgd$15~', version: '' },
        { url: 'http://62.210.122.93:8080', failed: false, bandwidth: 0, uplink: 0, workers: 0, full: false, name: 'fr', accessToken: '&dfgd$15~', version: '' },
        { url: 'http://42.193.53.102:8080', failed: false, bandwidth: 0, uplink: 0, workers: 0, full: false, name: 'cd', accessToken: '&dfgd$15~', version: '' },
        { url: 'http://49.233.52.182:8080', failed: false, bandwidth: 0, uplink: 0, workers: 0, full: false, name: 'pk', accessToken: '&dfgd$15~', version: '' },
        { url: 'http://208.87.242.157:8080', failed: false, bandwidth: 0, uplink: 0, workers: 0, full: false, name: 'op-us-1', version: '' },
        { url: 'http://91.193.182.168:8080', failed: false, bandwidth: 0, uplink: 0, workers: 0, full: false, name: 'ru-1', version: '' },
        { url: 'http://38.180.105.134:8080', failed: false, bandwidth: 0, uplink: 0, workers: 0, full: false, name: 'tr-1', version: '' },
        { url: 'http://195.20.17.176:8080', failed: false, bandwidth: 0, uplink: 0, workers: 0, full: false, name: 'il-1', version: '' },
        { url: 'http://135.148.67.87:8080', failed: false, bandwidth: 0, uplink: 0, workers: 0, full: false, name: 'us-1', version: '' },
        { url: 'http://51.81.42.244:8080', failed: false, bandwidth: 0, uplink: 0, workers: 0, full: false, name: 'us-2', version: '' },
        { url: 'http://135.148.144.167:8080', failed: false, bandwidth: 0, uplink: 0, workers: 0, full: false, name: 'us-3', version: '' },
        { url: 'http://15.204.49.174:8080', failed: false, bandwidth: 0, uplink: 0, workers: 0, full: false, name: 'us-4', version: '' },
        { url: 'http://51.81.42.243:8080', failed: false, bandwidth: 0, uplink: 0, workers: 0, full: false, name: 'us-5', version: '' },
        { url: 'http://135.148.144.173:8080', failed: false, bandwidth: 0, uplink: 0, workers: 0, full: false, name: 'us-6', version: '' },
        { url: 'http://167.114.90.238:8080', failed: false, bandwidth: 0, uplink: 0, workers: 0, full: false, name: 'ca-1', version: '' },
        { url: 'http://167.114.90.237:8080', failed: false, bandwidth: 0, uplink: 0, workers: 0, full: false, name: 'ca-2', version: '' },
        { url: 'http://198.244.144.230:8080', failed: false, bandwidth: 0, uplink: 0, workers: 0, full: false, name: 'uk-1', version: '' },
        { url: 'http://51.68.169.109:8080', failed: false, bandwidth: 0, uplink: 0, workers: 0, full: false, name: 'ge-1', version: '' },
        { url: 'http://176.119.203.244:8080', failed: false, bandwidth: 0, uplink: 0, workers: 0, full: false, name: 'ge-2', version: '' },
        { url: 'http://38.180.9.40:8080', failed: false, bandwidth: 0, uplink: 0, workers: 0, full: false, name: 'ih-sg-1', version: '' },
        { url: 'http://38.180.37.144:8080', failed: false, bandwidth: 0, uplink: 0, workers: 0, full: false, name: 'kz-1', version: '' },
        { url: 'http://78.111.102.162:8080', failed: false, bandwidth: 0, uplink: 0, workers: 0, full: false, name: 'br-1', version: '' },
        { url: 'http://176.97.69.27:8080', failed: false, bandwidth: 0, uplink: 0, workers: 0, full: false, name: 'ih-au-1', version: '' },
        { url: 'http://38.180.95.224:8080', failed: false, bandwidth: 0, uplink: 0, workers: 0, full: false, name: 'ih-hk-1', version: '' },
        { url: 'http://217.195.200.133:8080', failed: false, bandwidth: 0, uplink: 0, workers: 0, full: false, name: 'uae-1', version: '' },
      ]
    }
  },
  created() {
    this.loopGetData()
  },
  beforeDestroy() {
    clearTimeout(int)
  },
  methods: {
    gotoStats(item) {
      const { url, accessToken, name } = item
      this.$router.push({
        name: 'AdminSeederStats',
        query: {
          url,
          accessToken,
          name,
        }
      })
    },
    fetchData() {
      this.list.forEach(item => {
        const url = `${item.url}/ping`
        axios.post(url, {}, {
          headers: {
            "X-Access-Token": item.accessToken || undefined,
          }
        })
            .then(res => {
              const { data } = res
              if (data.ret === 0) {
                item.failed = false
                item.bandwidth = data.bandwidth
                item.currentUplink = Math.round(data.currentUplink)
                item.workers = data.workers
                item.full = data.full || false
                item.version = data.version
              } else {
                item.failed = true
              }
            })
            .catch(err => {
              console.error(err)
              item.failed = true
            })
      })
    },
    loopGetData() {
      this.fetchData()
      int = setTimeout(() => {
        this.loopGetData()
      }, 15000);
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.panel-group {
  margin-top: 18px;
  .card-panel-col{
    margin-bottom: 20px;
  }
  .card-panel {
    height: 175px;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);
    .card-panel-description {
      text-align: right;
      //line-height: 42px;
      font-weight: bold;
      margin: 15px;
      margin-left: 0;
      .card-panel-text {
        line-height: 20px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
      }
      .card-panel-num {
        font-size: 16px;
      }
      .card-panel-name {
        text-align: left;
        margin-left: 5px;
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
      }
    }
  }
}
</style>

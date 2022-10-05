<template>
  <el-row :gutter="20" class="panel-group">
    <template v-for="item in list">
      <el-col :key="item.url" :xs="24" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-description">
            <span class="card-panel-num">{{item.value}}</span>
            <div class="card-panel-text">{{item.url}}</div>
            <div class="card-panel-name">{{item.name}}</div>
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
  name: 'Signal',
  data() {
    return {
      token: 'RF9ix9jkZhdA',
      list: [
        { url: 'https://signal.cdnbye.com/total_count', value: 0, name: '香港' },
        { url: 'https://signal.web3-lab.com:7078/total_count', value: 0, name: '香港' },
        { url: 'https://signalcloud.cdnbye.com/total_count', value: 0, name: '德国' },
        // { url: 'https://signalcloud.p2pengine.net:8089/total_count', value: 0, name: '德国' },
        { url: 'https://signalcloud.web3-lab.com:7078/total_count', value: 0, name: '德国' },
        { url: 'https://opensignal.cdnbye.com/total_count', value: 0, name: '美国' },
        { url: 'https://opensignal.web3-lab.com:7078/total_count', value: 0, name: '美国' },
        { url: 'https://ca.cdnbye.com/count', value: 0, name: '加拿大' },
        { url: 'https://ca.p2pengine.net:8089/count', value: 0, name: '加拿大' },
        { url: 'https://sg.cdnbye.com/count', value: 0, name: '新加坡' },
        { url: 'https://sg.p2pengine.net:8089/count', value: 0, name: '新加坡' },
        { url: 'https://as.cdnbye.com/count', value: 0, name: '悉尼' },
        { url: 'https://as.p2pengine.net:8089/count', value: 0, name: '悉尼' },
        { url: 'https://se.cdnbye.com/count', value: 0, name: '斯德哥尔摩' },
        { url: 'https://se.p2pengine.net:8089/count', value: 0, name: '斯德哥尔摩' },
        { url: 'https://korea.cdnbye.com/count', value: 0, name: '首尔' },
        { url: 'https://korea.p2pengine.net:8089/count', value: 0, name: '首尔' },
        { url: 'https://jp.cdnbye.com/count', value: 0, name: '东京' },
        { url: 'https://jp.p2pengine.net:8089/count', value: 0, name: '东京' },
        { url: 'https://id.cdnbye.com/count', value: 0, name: '孟买' },
        { url: 'https://id.p2pengine.net:8089/count', value: 0, name: '孟买' },
        { url: 'https://br.cdnbye.com/count', value: 0, name: '圣保罗' },
        { url: 'https://signal.p2pengine.net:8089/count', value: 0, name: '香港' },
        { url: 'http://signal.ubtvmarket.com:8077/total_count', value: 0, name: '香港' },
        { url: 'https://signal.swarmcloud.net/count', value: 0, name: '上海' },
        { url: 'https://pk.swarmcloud.net/count', value: 0, name: '北京' },
        { url: 'https://cd.swarmcloud.net/count', value: 0, name: '成都' },
        { url: 'http://119.28.136.195:8077/count', value: 0, name: 'cdnbye' },
        { url: 'http://119.28.74.92:8077/count', value: 0, name: 'master-live' },
        { url: 'http://119.28.74.92/count', value: 0, name: 'master-live' },
        { url: 'http://124.156.138.240:8077/count', value: 0, name: 'slave-live' },
        { url: 'http://124.156.138.240/count', value: 0, name: 'slave-live' },
        { url: 'http://119.28.136.195/count', value: 0, name: 'cdnbye' },
        { url: 'http://43.134.199.138/count', value: 0, name: 'cdnbye-2' },
        { url: 'http://43.129.228.44/count', value: 0, name: 'cdnbye-3' },
        { url: 'http://43.154.211.238/count', value: 0, name: 'cdnbye-4' },
        { url: 'http://43.154.209.102/count', value: 0, name: 'cdnbye-5' },
        { url: 'http://43.154.40.235/count', value: 0, name: 'cdnbye-6' },
        { url: 'http://43.154.49.215/count', value: 0, name: 'cdnbye-7' },
        { url: 'http://43.154.53.74/count', value: 0, name: 'cdnbye-8' },
        { url: 'http://43.154.166.99/count', value: 0, name: 'cdnbye-9' },
        { url: 'http://43.155.116.14/count', value: 0, name: 'cdnbye-10' },
        { url: 'http://43.157.32.236/count', value: 0, name: 'eu-1' },
        { url: 'http://43.131.39.155/count', value: 0, name: 'eu-2' },
        { url: 'http://43.131.50.73/count', value: 0, name: 'eu-3' },
        { url: 'http://43.131.38.224/count', value: 0, name: 'eu-4' },
        { url: 'http://43.157.49.248/count', value: 0, name: 'eu-5' },
        { url: 'http://43.157.2.188/count', value: 0, name: 'eu-6' },
        { url: 'http://43.131.40.66/count', value: 0, name: 'eu-7' },
        { url: 'http://43.131.59.5/count', value: 0, name: 'eu-8' },
        { url: 'http://43.131.29.153/count', value: 0, name: 'eu-9' },
        { url: 'http://43.157.47.140/count', value: 0, name: 'eu-10' },
        { url: 'http://43.131.45.141/count', value: 0, name: 'eu-12' },
        { url: 'http://43.131.29.226/count', value: 0, name: 'eu-13' },
        { url: 'http://43.157.7.153/count', value: 0, name: 'eu-14' },
        { url: 'http://43.157.64.66/count', value: 0, name: 'eu-15' },
        { url: 'http://43.157.66.89/count', value: 0, name: 'eu-16' },
        { url: 'http://43.157.30.17/count', value: 0, name: 'eu-17' },
        { url: 'http://43.157.79.234/count', value: 0, name: 'eu-18' },
        { url: 'http://43.157.32.236:7077/count', value: 0, name: 'eu-1' },
        { url: 'http://43.131.39.155:7077/count', value: 0, name: 'eu-2' },
        { url: 'http://43.131.50.73:7077/count', value: 0, name: 'eu-3' },
        { url: 'http://43.131.38.224:7077/count', value: 0, name: 'eu-4' },
        { url: 'http://43.157.49.248:7077/count', value: 0, name: 'eu-5' },
        { url: 'http://43.157.2.188:7077/count', value: 0, name: 'eu-6' },
        { url: 'http://43.131.40.66:7077/count', value: 0, name: 'eu-7' },
        { url: 'http://43.131.59.5:7077/count', value: 0, name: 'eu-8' },
        { url: 'http://43.131.29.153:7077/count', value: 0, name: 'eu-9' },
        { url: 'http://43.157.47.140:7077/count', value: 0, name: 'eu-10' },
        { url: 'http://43.131.45.141:7077/count', value: 0, name: 'eu-12' },
        { url: 'http://43.131.29.226:7077/count', value: 0, name: 'eu-13' },
        { url: 'http://43.157.7.153:7077/count', value: 0, name: 'eu-14' },
        { url: 'http://43.157.64.66:7077/count', value: 0, name: 'eu-15' },
        { url: 'http://43.157.66.89:7077/count', value: 0, name: 'eu-16' },
        { url: 'http://43.157.30.17:7077/count', value: 0, name: 'eu-17' },
        { url: 'http://43.157.79.234:7077/count', value: 0, name: 'eu-18' },
        { url: 'http://43.153.91.36/count', value: 0, name: 'us-1' },
        { url: 'http://43.153.32.156/count', value: 0, name: 'us-2' },
        { url: 'http://43.153.20.4/count', value: 0, name: 'us-3' },
        { url: 'http://43.153.52.120/count', value: 0, name: 'us-4' },
        { url: 'http://43.153.69.243/count', value: 0, name: 'us-5' },
        { url: 'http://43.153.30.126/count', value: 0, name: 'us-6' },
        { url: 'http://43.135.166.77/count', value: 0, name: 'us-7' },
        { url: 'http://43.153.26.15/count', value: 0, name: 'us-8' },
        { url: 'http://43.153.71.21/count', value: 0, name: 'us-9' },
        { url: 'http://43.135.161.66/count', value: 0, name: 'us-10' },
        { url: 'http://43.135.159.196/count', value: 0, name: 'us-11' },
        { url: 'http://43.153.84.233/count', value: 0, name: 'us-12' },
        { url: 'http://43.153.106.237/count', value: 0, name: 'us-13' },
        { url: 'http://43.153.33.153/count', value: 0, name: 'us-14' },
        { url: 'http://43.153.57.117/count', value: 0, name: 'us-15' },
        { url: 'http://43.153.10.122/count', value: 0, name: 'us-16' },
        { url: 'http://43.153.13.133/count', value: 0, name: 'us-17' },
        { url: 'http://43.153.67.114/count', value: 0, name: 'us-18' },
        { url: 'http://43.153.38.157/count', value: 0, name: 'us-19' },
        { url: 'http://43.153.64.45/count', value: 0, name: 'us-20' },
        { url: 'http://43.153.91.36:7077/count', value: 0, name: 'us-1' },
        { url: 'http://43.153.32.156:7077/count', value: 0, name: 'us-2' },
        { url: 'http://43.153.20.4:7077/count', value: 0, name: 'us-3' },
        { url: 'http://43.153.52.120:7077/count', value: 0, name: 'us-4' },
        { url: 'http://43.153.69.243:7077/count', value: 0, name: 'us-5' },
        { url: 'http://43.153.30.126:7077/count', value: 0, name: 'us-6' },
        { url: 'http://43.135.166.77:7077/count', value: 0, name: 'us-7' },
        { url: 'http://43.153.26.15:7077/count', value: 0, name: 'us-8' },
        { url: 'http://43.153.71.21:7077/count', value: 0, name: 'us-9' },
        { url: 'http://43.135.161.66:7077/count', value: 0, name: 'us-10' },
        { url: 'http://43.135.159.196:7077/count', value: 0, name: 'us-11' },
        { url: 'http://43.153.84.233:7077/count', value: 0, name: 'us-12' },
        { url: 'http://43.153.106.237:7077/count', value: 0, name: 'us-13' },
        { url: 'http://43.153.33.153:7077/count', value: 0, name: 'us-14' },
        { url: 'http://43.153.57.117:7077/count', value: 0, name: 'us-15' },
        { url: 'http://43.153.10.122:7077/count', value: 0, name: 'us-16' },
        { url: 'http://43.153.13.133:7077/count', value: 0, name: 'us-17' },
        { url: 'http://43.153.67.114:7077/count', value: 0, name: 'us-18' },
        { url: 'http://43.153.38.157:7077/count', value: 0, name: 'us-19' },
        { url: 'http://43.153.64.45:7077/count', value: 0, name: 'us-20' },
      ]
    }
  },
  mounted() {
    this.loopGetData()
  },
  beforeDestroy() {
    clearTimeout(int)
  },
  methods: {
    fetchData() {
      this.list.forEach(item => {
        const url = `${item.url}?token=${this.token}`
        axios.get(url)
          .then(res => {
            if(typeof res.data === 'number')
              item.value = res.data
          })
          .catch(err => {
            item.value = 0
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

<style rel="stylesheet/scss" lang="scss">
  .panel-group {
    margin-top: 18px;
    .card-panel-col{
      margin-bottom: 20px;
    }
    .card-panel {
      height: 108px;
      font-size: 12px;
      position: relative;
      overflow: hidden;
      color: #666;
      background: #fff;
      box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
      border-color: rgba(0, 0, 0, .05);
      .card-panel-description {
        text-align: right;
        line-height: 42px;
        font-weight: bold;
        margin: 20px;
        margin-left: 0;
        .card-panel-text {
          line-height: 18px;
          color: rgba(0, 0, 0, 0.45);
          font-size: 16px;
        }
        .card-panel-num {
          font-size: 24px;
        }
        .card-panel-name {
          margin-top: 3px;
          line-height: 18px;
          color: rgba(0, 0, 0, 0.45);
          font-size: 16px;
        }
      }
    }
  }
</style>

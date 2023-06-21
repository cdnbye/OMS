<template>
  <el-row :gutter="20" class="panel-group">
    <template v-for="item in list">
      <el-col :key="item.url" :xs="24" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-description">
            <div class="card-panel-name">{{item.name}}</div>
            <span class="card-panel-num" :style="{color: item.value === 0 ? 'red' : ''}">{{item.value}}</span>
            <div class="card-panel-text">{{item.url}} {{ item.version ? ' ' + item.version : '' }}</div>
            <template v-if="item.certs.length > 0" v-for="cert in item.certs">
              <div class="card-panel-text">{{cert.name}} {{ cert.expireAt }}</div>
            </template>
          </div>
        </div>
      </el-col>
    </template>
  </el-row>
</template>

<script>
import axios from 'axios'
import moment from "moment";

let int = null

export default {
  name: 'Signal',
  data() {
    return {
      token: 'RF9ix9jkZhdA',
      list: [
        { url: 'https://signal.cdnbye.com/total_count', value: 0, name: '香港' },
        { url: 'https://signalcloud.cdnbye.com/total_count', value: 0, name: '法兰克福' },
        { url: 'https://opensignal.cdnbye.com/total_count', value: 0, name: '硅谷' },
        { url: 'https://sg.cdnbye.com/total_count', value: 0, name: '新加坡' },
        { url: 'https://fr.cdnbye.com/info', value: 0, name: '巴黎' },
        { url: 'https://fr.web3-lab.com:8443/count', value: 0, name: '巴黎' },
        { url: 'https://fr.p2pengine.net:2053/count', value: 0, name: '巴黎' },
        { url: 'https://jp.cdnbye.com/info', value: 0, name: '东京' },
        { url: 'https://jp.p2pengine.net:8089/info', value: 0, name: '东京' },
        { url: 'https://br.cdnbye.com/info', value: 0, name: '圣保罗' },
        { url: 'https://ru.cdnbye.com/info', value: 0, name: '莫斯科' },
        { url: 'http://signal.ubtvmarket.com:8077/total_count', value: 0, name: '香港' },
        { url: 'https://signal.swarmcloud.net/info', value: 0, name: '上海' },
        { url: 'https://gz.swarmcloud.net/total_count', value: 0, name: '广州' },
        { url: 'https://pk.swarmcloud.net/info', value: 0, name: '北京' },
        { url: 'https://cd.swarmcloud.net/info', value: 0, name: '成都' },
        { url: 'http://119.28.74.92:8077/count', value: 0, name: 'master-live' },
        { url: 'http://124.156.138.240:8077/count', value: 0, name: 'slave-live' },
        { url: 'http://43.134.199.138/info', value: 0, name: 'cdnbye-2' },
        { url: 'http://43.129.228.44/info', value: 0, name: 'cdnbye-3' },
        { url: 'http://43.154.211.238/info', value: 0, name: 'cdnbye-4' },
        { url: 'http://43.154.209.102/info', value: 0, name: 'cdnbye-5' },
        { url: 'http://43.154.40.235/info', value: 0, name: 'cdnbye-6' },
        { url: 'http://43.154.49.215/info', value: 0, name: 'cdnbye-7' },
        { url: 'http://43.154.53.74/info', value: 0, name: 'cdnbye-8' },
        { url: 'http://43.154.166.99/info', value: 0, name: 'cdnbye-9' },
        { url: 'http://43.155.116.14/info', value: 0, name: 'cdnbye-10' },
        { url: 'http://43.154.49.170/info', value: 0, name: 'cdnbye-11' },
        { url: 'http://43.134.203.230/info', value: 0, name: 'cdnbye-12' },
        { url: 'http://43.154.120.28/info', value: 0, name: 'cdnbye-13' },
        { url: 'http://43.154.219.36/info', value: 0, name: 'cdnbye-14' },
        { url: 'http://43.154.0.207/info', value: 0, name: 'cdnbye-15' },
        { url: 'http://43.157.32.236/info', value: 0, name: 'eu-1' },
        { url: 'http://43.157.49.248/info', value: 0, name: 'eu-5' },
        { url: 'http://162.62.223.111/info', value: 0, name: 'eu-7' },
        { url: 'http://43.157.93.100/info', value: 0, name: 'eu-9' },
        { url: 'http://43.157.47.140/info', value: 0, name: 'eu-10' },
        { url: 'http://43.157.60.82/info', value: 0, name: 'eu-11' },
        { url: 'http://43.157.89.228/info', value: 0, name: 'eu-12' },
        { url: 'http://43.131.47.169/info', value: 0, name: 'eu-13' },
        { url: 'http://43.131.13.92/info', value: 0, name: 'eu-14' },
        { url: 'http://43.157.64.66/info', value: 0, name: 'eu-15' },
        { url: 'http://43.157.66.89/info', value: 0, name: 'eu-16' },
        { url: 'http://43.157.30.17/info', value: 0, name: 'eu-17' },
        { url: 'http://43.157.79.234/info', value: 0, name: 'eu-18' },
        { url: 'http://43.153.91.36/info', value: 0, name: 'us-1' },
        { url: 'http://43.153.32.156/info', value: 0, name: 'us-2' },
        { url: 'http://43.153.20.4/info', value: 0, name: 'us-3' },
        { url: 'http://43.153.52.120/info', value: 0, name: 'us-4' },
        { url: 'http://43.153.69.243/info', value: 0, name: 'us-5' },
        { url: 'http://43.153.30.126/info', value: 0, name: 'us-6' },
        { url: 'http://43.135.166.77/info', value: 0, name: 'us-7' },
        { url: 'http://43.153.26.15/info', value: 0, name: 'us-8' },
        { url: 'http://43.135.161.66/info', value: 0, name: 'us-10' },
        { url: 'http://43.135.159.196/info', value: 0, name: 'us-11' },
        { url: 'http://43.153.57.117/info', value: 0, name: 'us-15' },
        { url: 'http://43.153.10.122/info', value: 0, name: 'us-16' },
        { url: 'http://43.153.13.133/info', value: 0, name: 'us-17' },
        { url: 'http://43.153.67.114/info', value: 0, name: 'us-18' },
        { url: 'http://170.106.119.248/info', value: 0, name: 'us-19' },
        { url: 'http://170.106.82.82/info', value: 0, name: 'us-20' },
        { url: 'http://43.159.60.196/info', value: 0, name: 'sg-1' },
        { url: 'http://43.156.10.47/info', value: 0, name: 'sg-2' },
        { url: 'http://129.226.201.3/info', value: 0, name: 'sg-3' },
        { url: 'http://43.159.44.110/info', value: 0, name: 'sg-4' },
        { url: 'http://43.134.178.215/info', value: 0, name: 'sg-5' },
        { url: 'http://43.156.89.164/info', value: 0, name: 'sg-6' },
        { url: 'http://43.156.115.238/info', value: 0, name: 'sg-7' },
        { url: 'http://43.153.202.33/info', value: 0, name: 'sg-8' },
        { url: 'http://129.226.223.57/info', value: 0, name: 'sg-9' },
        { url: 'http://129.226.198.66/info', value: 0, name: 'sg-10' },
        { url: 'http://43.153.192.104/info', value: 0, name: 'sg-11' },
        { url: 'http://43.156.49.159/info', value: 0, name: 'sg-12' },
        { url: 'http://43.134.170.16/info', value: 0, name: 'sg-13' },
        { url: 'http://43.156.47.106/info', value: 0, name: 'sg-14' },
        { url: 'http://43.156.127.56/info', value: 0, name: 'sg-15' },
        { url: 'http://106.52.254.88/info', value: 0, name: 'gz-1' },
        { url: 'http://43.139.105.176/info', value: 0, name: 'gz-2' },
        { url: 'http://106.53.103.36/info', value: 0, name: 'gz-3' },
        { url: 'http://43.139.190.60/info', value: 0, name: 'gz-4' },
        { url: 'http://123.207.66.25/info', value: 0, name: 'gz-5' },
        { url: 'http://114.132.73.214/info', value: 0, name: 'gz-6' },
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
    fetchData() {
      this.list.forEach(item => {
        const url = `${item.url}?token=${this.token}`
        axios.get(url)
          .then(res => {
            item.certs = []
            if (typeof res.data === 'number') {
              item.value = res.data
            } else if (typeof res.data.data === 'object') {
              const { data } = res.data
              item.value = data.current_connections
              item.version = data.version

            } else if (typeof res.data === 'object') {
              const { data } = res
              item.value = data.current_connections
              item.version = data.version
              if (data.cert_info) {
                item.certs.push({
                  name: data.cert_info.name,
                  expireAt: moment(data.cert_info.expire_at).format('YY-MM-DD:HH'),
                })
              } else if (data.cert_infos && data.cert_infos.length > 0) {
                data.cert_infos.forEach(cert => {
                  item.certs.push({
                    name: cert.name,
                    expireAt: moment(cert.expire_at).format('YY-MM-DD:HH'),
                  })
                })
              }
            }
          })
          .catch(err => {
            console.error(err)
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

<style rel="stylesheet/scss" lang="scss" scoped>
  .panel-group {
    margin-top: 18px;
    .card-panel-col{
      margin-bottom: 20px;
    }
    .card-panel {
      //height: 108px;
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
        margin: 15px;
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
          float: left;
          margin-left: 5px;
          line-height: 18px;
          color: rgba(0, 0, 0, 0.45);
          font-size: 16px;
        }
      }
    }
  }
</style>

<template>
  <el-row :gutter="20" class="panel-group">
    <template v-for="item in list">
      <el-col :key="item.url" :xs="24" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-description">
            <div class="card-panel-name">{{item.name}}</div>
            <span class="card-panel-num" :style="{color: item.value === -1 ? 'red' : ''}">{{item.value}}</span>
            <div class="card-panel-text">{{item.url}} {{ item.version ? ' ' + item.version : '' }}</div>
            <template v-if="item.certs.length > 0" v-for="cert in item.certs">
              <div class="card-panel-text" :style="{color: cert.isExpiredSoon ? 'red' : ''}">{{cert.name}} {{ cert.expireAt }}</div>
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

const EXPIRE_LIMIT = 30;   // days

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
        { url: 'https://gz.swarmcloud.net/total_count', value: 0, name: '广州' },
        { url: 'https://fr.cdnbye.com/info', value: 0, name: '巴黎' },
        { url: 'https://br1.cdnbye.com/info', value: 0, name: '圣保罗-tx' },
        { url: 'https://br.peerhub.net:2096/info', value: 0, name: '圣保罗' },
        { url: 'https://ru.cdnbye.com/info', value: 0, name: '莫斯科' },
        { url: 'https://us.peerhub.net:2096/info', value: 0, name: '美国' },
        { url: 'https://za.cdnbye.com/info', value: 0, name: '南非' },
        { url: 'https://pk.p2pengine.net:8089/info', value: 0, name: '北京' },
        { url: 'http://43.132.190.148/info', value: 0, name: 'cdnbye-1' },
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
        { url: 'http://43.132.227.42/info', value: 0, name: 'cdnbye-16' },
        { url: 'http://43.129.186.47/info', value: 0, name: 'cdnbye-17' },
        { url: 'http://119.28.189.230/info', value: 0, name: 'cdnbye-18' },
        { url: 'http://43.129.25.71/info', value: 0, name: 'cdnbye-19' },
        { url: 'http://43.157.96.48/info', value: 0, name: 'eu-1' },
        { url: 'http://43.157.111.101/info', value: 0, name: 'eu-2' },
        { url: 'http://43.157.7.215/info', value: 0, name: 'eu-3' },
        { url: 'http://43.131.51.25/info', value: 0, name: 'eu-4' },
        { url: 'http://43.131.41.92/info', value: 0, name: 'eu-5' },
        { url: 'http://43.131.34.85/info', value: 0, name: 'eu-6' },
        { url: 'http://43.131.25.44/info', value: 0, name: 'eu-7' },
        { url: 'http://162.62.57.166/info', value: 0, name: 'eu-8' },
        { url: 'http://43.131.19.249/info', value: 0, name: 'eu-9' },
        { url: 'http://43.131.53.249/info', value: 0, name: 'eu-10' },
        { url: 'http://43.157.97.162/info', value: 0, name: 'eu-11' },
        { url: 'http://43.157.105.67/info', value: 0, name: 'eu-12' },
        { url: 'http://43.131.54.143/info', value: 0, name: 'eu-13' },
        { url: 'http://43.157.0.236/info', value: 0, name: 'eu-14' },
        { url: 'http://43.157.95.234/info', value: 0, name: 'eu-15' },
        { url: 'http://43.157.88.119/info', value: 0, name: 'eu-16' },
        { url: 'http://43.157.97.174/info', value: 0, name: 'eu-17' },
        { url: 'http://49.51.74.179/info', value: 0, name: 'us-2' },
        { url: 'http://43.135.155.11/info', value: 0, name: 'us-3' },
        { url: 'http://43.153.50.57/info', value: 0, name: 'us-4' },
        { url: 'http://43.153.71.95/info', value: 0, name: 'us-5' },
        { url: 'http://43.153.68.228/info', value: 0, name: 'us-6' },
        { url: 'http://43.153.99.68/info', value: 0, name: 'us-7' },
        { url: 'http://170.106.196.173/info', value: 0, name: 'us-8' },
        { url: 'http://170.106.137.142/info', value: 0, name: 'us-9' },
        { url: 'http://170.106.183.3/info', value: 0, name: 'us-10' },
        { url: 'http://170.106.188.223/info', value: 0, name: 'us-11' },
        { url: 'http://43.153.12.42/info', value: 0, name: 'us-12' },
        { url: 'http://49.51.52.181/info', value: 0, name: 'us-13' },
        { url: 'http://43.153.56.28/info', value: 0, name: 'us-14' },
        { url: 'http://49.51.201.183/info', value: 0, name: 'us-15' },
        { url: 'http://43.130.41.33/info', value: 0, name: 'us-16' },
        { url: 'http://170.106.154.167/info', value: 0, name: 'us-17' },
        { url: 'http://43.153.67.114/info', value: 0, name: 'us-18' },
        { url: 'http://43.159.60.196/info', value: 0, name: 'sg-1' },
        { url: 'http://124.156.194.246/info', value: 0, name: 'sg-2' },
        { url: 'http://43.128.71.178/info', value: 0, name: 'sg-3' },
        { url: 'http://43.156.39.146/info', value: 0, name: 'sg-4' },
        { url: 'http://43.156.54.151/info', value: 0, name: 'sg-5' },
        { url: 'http://129.226.212.8/info', value: 0, name: 'sg-6' },
        { url: 'http://43.134.52.198/info', value: 0, name: 'sg-7' },
        { url: 'http://43.134.94.188/info', value: 0, name: 'sg-8' },
        { url: 'http://43.134.52.80/info', value: 0, name: 'sg-9' },
        { url: 'http://43.128.104.72/info', value: 0, name: 'sg-10' },
        { url: 'http://43.134.180.241/info', value: 0, name: 'sg-11' },
        { url: 'http://43.156.54.5/info', value: 0, name: 'sg-12' },
        { url: 'http://43.134.27.161/info', value: 0, name: 'sg-13' },
        { url: 'http://43.134.3.224/info', value: 0, name: 'sg-16' },
        { url: 'http://150.109.21.143/info', value: 0, name: 'sg-17' },
        { url: 'http://43.134.112.106/info', value: 0, name: 'sg-18' },
        { url: 'http://43.133.61.195/info', value: 0, name: 'sg-19' },
        { url: 'http://43.134.31.190/info', value: 0, name: 'sg-20' },
        { url: 'http://106.52.254.88/info', value: 0, name: 'gz-1' },
        { url: 'http://43.139.190.60/info', value: 0, name: 'gz-4' },
        { url: 'http://43.138.216.187/info', value: 0, name: 'gz-7' },
        { url: 'http://175.178.128.46/info', value: 0, name: 'gz-8' },
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
            } else if (typeof res.data === 'object') {
              const { data } = res
              item.value = data.current_connections
              item.version = data.version
              if (data.cert_info) {
                item.certs.push({
                  name: data.cert_info.name,
                  expireAt: moment(data.cert_info.expire_at).format('YY-MM-DD:HH'),
                  isExpiredSoon: moment(data.cert_info.expire_at).diff(moment(), 'day') <= EXPIRE_LIMIT,
                })
              } else if (data.cert_infos && data.cert_infos.length > 0) {
                data.cert_infos.forEach(cert => {
                  item.certs.push({
                    name: cert.name,
                    expireAt: moment(cert.expire_at).format('YY-MM-DD:HH'),
                    isExpiredSoon: moment(cert.expire_at).diff(moment(), 'day') <= EXPIRE_LIMIT,
                  })
                })
              }
            }
          })
          .catch(err => {
            console.error(err)
            item.value = -1
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

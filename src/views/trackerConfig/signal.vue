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
        { url: 'https://signalcloud.cdnbye.com/total_count', value: 0, name: '德国' },
        { url: 'https://signalcloud.p2pengine.net:8089/total_count', value: 0, name: '德国' },
        { url: 'https://signalcloud.web3-lab.com:7078/total_count', value: 0, name: '德国' },
        { url: 'https://opensignal.cdnbye.com/count', value: 0, name: '美国' },
        { url: 'https://as.cdnbye.com/count', value: 0, name: '悉尼' },
        { url: 'https://korea.cdnbye.com/count', value: 0, name: '首尔' },
        { url: 'https://jp.cdnbye.com/count', value: 0, name: '东京' },
        { url: 'https://id.cdnbye.com/count', value: 0, name: '孟买' },
        { url: 'https://signal.cdnbye.com/total_count', value: 0, name: '香港' },
        { url: 'https://signal.p2pengine.net:8089/total_count', value: 0, name: '香港' },
        { url: 'https://signal.web3-lab.com:7078/total_count', value: 0, name: '香港' },
        { url: 'http://signal.ubtvmarket.com:8077/total_count', value: 0, name: '香港' },
        { url: 'https://signal.swarmcloud.net/count', value: 0, name: '上海' },
        { url: 'http://119.28.136.195:8088/count', value: 0, name: 'cdnbye' },
        { url: 'http://43.154.238.224:8088/count', value: 0, name: 'cdnbye-2' },
        { url: 'http://43.129.228.44:8088/count', value: 0, name: 'cdnbye-3' },
        { url: 'http://43.154.236.139:8088/count', value: 0, name: 'cdnbye-4' },
        { url: 'http://43.154.90.162:8088/count', value: 0, name: 'cdnbye-5' },
        { url: 'http://43.154.75.14:8088/count', value: 0, name: 'cdnbye-6' },
        { url: 'http://43.155.108.221:8088/count', value: 0, name: 'cdnbye-7' },
        { url: 'http://43.154.82.157:8088/count', value: 0, name: 'cdnbye-8' },
        { url: 'http://119.28.136.195:8077/count', value: 0, name: 'cdnbye' },
        { url: 'http://119.28.74.92:8077/count', value: 0, name: 'master-live' },
        { url: 'http://124.156.138.240:8077/count', value: 0, name: 'slave-live' },
        { url: 'http://119.28.136.195/count', value: 0, name: 'cdnbye' },
        { url: 'http://43.154.238.224/count', value: 0, name: 'cdnbye-2' },
        { url: 'http://43.129.228.44/count', value: 0, name: 'cdnbye-3' },
        { url: 'http://43.154.236.139/count', value: 0, name: 'cdnbye-4' },
        { url: 'http://43.154.90.162/count', value: 0, name: 'cdnbye-5' },
        { url: 'http://43.154.75.14/count', value: 0, name: 'cdnbye-6' },
        { url: 'http://43.155.108.221/count', value: 0, name: 'cdnbye-7' },
        { url: 'http://43.154.82.157/count', value: 0, name: 'cdnbye-8' },
        { url: 'http://43.131.61.158:7077/count', value: 0, name: 'eu-0' },
        { url: 'http://43.131.43.170:7077/count', value: 0, name: 'eu-1' },
        { url: 'http://43.131.61.158/count', value: 0, name: 'eu-0' },
        { url: 'http://43.131.43.170/count', value: 0, name: 'eu-1' },
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

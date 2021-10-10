<template>
  <el-row :gutter="20" class="panel-group">
    <template v-for="item in list">
      <el-col :key="item.url" :xs="24" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-description">
            <span class="card-panel-num">{{item.value}}</span>
            <div class="card-panel-text">{{item.url}}</div>
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
      list: [
        { url: 'https://signalcloud.cdnbye.com/count', value: 0 },
        { url: 'https://signal.cdnbye.com/count', value: 0 },
        { url: 'https://opensignal.cdnbye.com/count', value: 0 },
        { url: 'https://signal.p2pengine.net:8089/count', value: 0 },
        { url: 'http://signal.ubtvmarket.com:8077/total_count', value: 0 },
        { url: 'https://signal.swarmcloud.net/count', value: 0 },
        { url: 'https://hk.p2pengine.net:8089/total_count', value: 0 },
        { url: 'http://43.129.211.18:8088/count', value: 0 },
        { url: 'http://43.129.228.44:8088/count', value: 0 },
        { url: 'http://119.28.136.195:8088/count', value: 0 },
        { url: 'http://124.156.158.249:8088/count', value: 0 },
        { url: 'http://119.28.74.92:8088/count', value: 0 },
        { url: 'http://124.156.138.240:8088/count', value: 0 },
        { url: 'http://124.156.158.249:8077/count', value: 0 },
        { url: 'http://119.28.74.92:8077/count', value: 0 },
        { url: 'http://124.156.138.240:8077/count', value: 0 },
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
        const url = `${item.url}`
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
        margin: 26px;
        margin-left: 0;
        .card-panel-text {
          line-height: 18px;
          color: rgba(0, 0, 0, 0.45);
          font-size: 16px;
        }
        .card-panel-num {
          font-size: 24px;
        }
      }
    }
  }
</style>

<template>
  <el-row :gutter="20" class="panel-group">
    <template v-for="item in list">
      <el-col :key="item.url" :xs="24" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-description">
            <span class="card-panel-num">{{item.value}}</span>
            <div class="card-panel-text">{{item.url}}连接数</div>
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
        { url: 'signalcloud.cdnbye.com', value: 0 },
        { url: 'signal.cdnbye.com', value: 0 },
        { url: 'opensignal.gcvow.top', value: 0 },
        { url: 'opensignal.cdnbye.com', value: 0 },
        { url: 'signal.p2pengine.net:8089', value: 0 },
        { url: 'p2p.bjxkhc.com:8089', value: 0 },
        { url: 'signal.dianzhenkeji.com', value: 0 },
        { url: 'signal.hdtvcdn.com:7078', value: 0 },
        { url: 'sigyy.dianzhenkeji.com', value: 0 },
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
        const url = `https://${item.url}/count`
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

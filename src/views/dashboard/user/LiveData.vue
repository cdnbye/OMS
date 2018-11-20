<template>
  <el-row :gutter="20" class="panel-group">
    <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-description">
          <span class="card-panel-num">{{ statis.online }}</span>
          <div class="card-panel-text">当前在线人数</div>
        </div>
      </div>
    </el-col>

    <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-description">
          <span class="card-panel-num">{{ statis.traffic_p2p.num }}</span>
          <div class="card-panel-text">今日P2P流量({{statis.traffic_p2p.unit}})</div>
        </div>
      </div>
    </el-col>
    
    <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-description">
          <span class="card-panel-num">{{ statis.frequency_day }}</span>
          <div class="card-panel-text">今日服务人数</div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { fetchGlobalData } from '@/api/user/liveData'
import { formatTraffic } from '@/utils/format'

let int = undefined

export default {
  name: 'PanelGroup',
  data() {
    return {
      statis: {
        online: 0,
        traffic_p2p: {
          num: 0,
          unit: 'KB'
        },
        frequency_day: 0,
      }
    }
  },
  mounted() {
    const _this = this
    this.getData()
    int = setInterval(function() {
      _this.getData()
    }, 10000)
  },
  beforeDestroy() {
    clearInterval(int)
  },
  methods: {
    getData() {
      fetchGlobalData().then(res => {
        const { data } = res
        this.statis.online = data.num_rt
        this.statis.traffic_p2p = formatTraffic(data.traffic_p2p_day)
        this.statis.frequency_day = data.api_frequency_day
      }).catch(err => {
        console.log(err)
      })
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

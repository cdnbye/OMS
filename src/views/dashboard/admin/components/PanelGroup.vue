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
          <span class="card-panel-num">{{ statis.bandwidth_p2p.num }}</span>
          <div class="card-panel-text">当前P2P带宽({{ statis.bandwidth_p2p.unit }})</div>
        </div>
      </div>
    </el-col>

    <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-description">
          <span class="card-panel-num">{{ statis.bandwidth_http.num }}</span>
          <div class="card-panel-text">当前HTTP带宽({{ statis.bandwidth_http.unit }})</div>
        </div>
      </div>
    </el-col>

    <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-description">
          <span class="card-panel-num">{{ statis.p2p_rate }}</span>
          <div class="card-panel-text">当前P2P分享率(%)</div>
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
          <div class="card-panel-text">今日服务次数</div>
        </div>
      </div>
    </el-col>

    <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-description">
          <span class="card-panel-num">{{ statis.hostNum }}</span>
          <div class="card-panel-text">活跃网站/APP总数</div>
        </div>
      </div>
    </el-col>

    <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-description">
          <span class="card-panel-num">{{ statis.max_online }}</span>
          <div class="card-panel-text">历史最高在线人数</div>
        </div>
      </div>
    </el-col>

  </el-row>
</template>

<script>
import { fetchLiveTimeData } from '@/api/liveData'
import { fetchHostNum } from '@/api/userDomain'
import { formatBandwidth, formatTraffic } from '@/utils/format'

let int = undefined

export default {
  name: 'PanelGroup',
  data() {
    return {
      statis: {
        online: 0,
        max_online: 0,
        p2p_rate: 0,

        hostNum: 0,

        bandwidth_p2p: {
          num: 0,
          unit: 'kbps'
        },
        bandwidth_http: {
          num: 0,
          unit: 'kbps'
        },

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
    _this.getData()
    int = setInterval(function() {
      _this.getData()
    }, 20000)
  },
  destroyed() {
    clearInterval(int)
  },
  methods: {
    getData() {
        fetchLiveTimeData().then(res => {
        const { data } = res
        this.statis.online = data.num_rt
        this.statis.max_online = data.max_num
        this.statis.bandwidth_p2p = formatBandwidth(data.rt_bw_p2p)

        this.statis.bandwidth_http = formatBandwidth(data.rt_bw_http)
        this.statis.p2p_rate = (data.p2p_rate_rt * 100).toFixed(2)

        this.statis.traffic_p2p = formatTraffic(data.traffic_p2p_day)

        this.statis.frequency_day = data.api_frequency_day
        this.$emit('numChange', data.num_rt)
        //接入网站总数
      }).catch(err => {
        console.log(err)
      })
      fetchHostNum().then(res => {
          this.statis.hostNum = res.data.num
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

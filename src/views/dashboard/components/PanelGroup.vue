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
          <div class="card-panel-text">今日服务人数</div>
        </div>
      </div>
    </el-col>

    <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-description">
          <span class="card-panel-num">{{ statis.max_online_week }}</span>
          <div class="card-panel-text">过去七天最高在线人数</div>
        </div>
      </div>
    </el-col>

    <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-description">
          <span class="card-panel-num">{{ statis.bandwidth_p2p_week.num }}</span>
          <div class="card-panel-text">过去七天P2P带宽峰值({{ statis.bandwidth_p2p_week.unit }})</div>
        </div>
      </div>
    </el-col>

    <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-description">
          <span class="card-panel-num">{{ statis.p2p_rate_week }}</span>
          <div class="card-panel-text">过去七天P2P分享率(%)</div>
        </div>
      </div>
    </el-col>
    
    <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-description">
          <span class="card-panel-num">{{ statis.frequency_week }}</span>
          <div class="card-panel-text">过去七天服务人数</div>
        </div>
      </div>
    </el-col>

    <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-description">
          <span class="card-panel-num">{{ statis.max_online_month }}</span>
          <div class="card-panel-text">近1月最高在线人数</div>
        </div>
      </div>
    </el-col>

    <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-description">
          <span class="card-panel-num">{{ statis.traffic_p2p_month.num }}</span>
          <div class="card-panel-text">近1月P2P流量({{statis.traffic_p2p_month.unit}})</div>
        </div>
      </div>
    </el-col>

    <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-description">
          <span class="card-panel-num">{{ statis.bandwidth_p2p_month.num }}</span>
          <div class="card-panel-text">近1月P2P带宽峰值({{ statis.bandwidth_p2p_month.unit }})</div>
        </div>
      </div>
    </el-col>

    <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-description">
          <span class="card-panel-num">{{ statis.p2p_rate_month }}</span>
          <div class="card-panel-text">近1月P2P分享率(%)</div>
        </div>
      </div>
    </el-col>

    <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-description">
          <span class="card-panel-num">{{ statis.frequency_month }}</span>
          <div class="card-panel-text">近1月服务人数</div>
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

    <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-description">
          <span class="card-panel-num">{{ statis.hostNum }}</span>
          <div class="card-panel-text">活跃域名总数</div>
        </div>
      </div>
    </el-col>

  </el-row>
</template>

<script>
import { fetchGlobalData } from '@/api/liveData'
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
        max_online_week: 0,
        max_online_month: 0,

        p2p_rate: 0,
        p2p_rate_week: 0,
        p2p_rate_month: 0,

        hostNum: 0,

        bandwidth_p2p: {
          num: 0,
          unit: 'kbps'
        },
        bandwidth_p2p_week: {
          num: 0,
          unit: 'kbps'
        },
        bandwidth_p2p_month: {
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
        traffic_p2p_month: {
          num: 0,
          unit: 'KB'
        },

        frequency_day: 0,
        frequency_week: 0,
        frequency_month: 0
      }
    }
  },
  mounted() {
    const _this = this
    _this.getData()
    fetchHostNum().then(res => {
      _this.statis.hostNum = res.data.num
    })
    int = setInterval(function() {
      _this.getData()
    }, 10000)
  },
  destroyed() {
    clearInterval(int)
  },
  methods: {
    getData() {
      fetchGlobalData().then(res => {
        const { data } = res
        this.statis.online = data.num_rt
        this.statis.max_online = data.max_num
        this.statis.max_online_week = data.max_num_7
        this.statis.max_online_month = data.max_num_month
        this.statis.bandwidth_p2p = formatBandwidth(data.rt_bw_p2p)
        this.statis.bandwidth_p2p_week = formatBandwidth(data.bwp_p2p_7)
        this.statis.bandwidth_p2p_month = formatBandwidth(data.bwp_p2p_month)
        this.statis.bandwidth_http = formatBandwidth(data.rt_bw_http)
        this.statis.p2p_rate = (data.p2p_rate_rt * 100).toFixed(2)
        this.statis.p2p_rate_week = (data.p2p_rate_7 * 100).toFixed(2)
        this.statis.p2p_rate_month = (data.p2p_rate_month * 100).toFixed(2)
        this.statis.traffic_p2p = formatTraffic(data.traffic_p2p_day)
        this.statis.traffic_p2p_month = formatTraffic(data.traffic_p2p_30)

        this.statis.frequency_day = data.api_frequency_day
        this.statis.frequency_week = data.api_frequency_7
        this.statis.frequency_month = data.api_frequency_30
        this.$emit('numChange', data.num_rt)
        //接入网站总数
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

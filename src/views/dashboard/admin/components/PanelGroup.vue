<template>
  <el-row :gutter="20" class="panel-group">
    <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
      <card :num="statis.online"
            :duration="500"
            desc="当前在线人数"
            :color="statis.online > 500000 ? 'red' : ''"
      >
      </card>
    </el-col>

    <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
      <card :num="statis.bandwidth_p2p.num"
            :duration="500"
            :decimals="2"
            :desc="`当前P2P带宽(${statis.bandwidth_p2p.unit})`">
      </card>
    </el-col>

    <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
      <card :num="statis.bandwidth_http.num"
            :duration="500"
            :decimals="2"
            :desc="`当前HTTP带宽(${statis.bandwidth_http.unit})`">
      </card>
    </el-col>

    <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
      <card :num="statis.p2p_rate"
            :duration="500"
            :decimals="2"
            desc="当前P2P效率(%)"
            :color="statis.p2p_rate < 30 ? 'red' : ''"
      >
      </card>
    </el-col>

    <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
      <card :num="statis.traffic_p2p.num"
            :duration="500"
            :decimals="2"
            :desc="`今日P2P流量(${statis.traffic_p2p.unit})`">
      </card>
    </el-col>

    <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
      <card :num="statis.traffic_http.num"
            :duration="500"
            :decimals="2"
            :desc="`今日HTTP流量(${statis.traffic_http.unit})`">
      </card>
    </el-col>

    <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
      <card :num="statis.frequency_day"
            :duration="500"
            desc="今日服务次数">
      </card>
    </el-col>

    <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
      <card :num="statis.hostNum"
            :duration="500"
            desc="活跃网站/APP总数">
      </card>
    </el-col>

    <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
      <card :num="statis.max_online"
            :duration="500"
            desc="历史最高在线人数">
      </card>
    </el-col>
  </el-row>
</template>

<script>
import { fetchLiveTimeData } from '@/api/liveData'
import { fetchHostNum } from '@/api/userDomain'
import { formatBandwidth, formatTraffic } from '@/utils/format'
import Card from '@/components/Card'

let timer = undefined

export default {
  name: 'PanelGroup',
  components: {
    Card,
  },
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

        traffic_http: {
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
    timer = setInterval(function() {
      _this.getData()
    }, 20000)
  },
  destroyed() {
    clearInterval(timer)
  },
  methods: {
    getData() {
        fetchLiveTimeData().then(res => {
        const { data } = res
        this.statis.online = data.num_rt
        this.statis.max_online = data.max_num
        this.statis.bandwidth_p2p = formatBandwidth(data.rt_bw_p2p)

        this.statis.bandwidth_http = formatBandwidth(data.rt_bw_http)
        this.statis.p2p_rate = Number((data.p2p_rate_rt * 100).toFixed(2))

        this.statis.traffic_p2p = formatTraffic(data.traffic_p2p_day)
        this.statis.traffic_http = formatTraffic(data.traffic_http_day)

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

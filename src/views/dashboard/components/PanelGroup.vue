<template>
  <el-row :gutter="40" class="panel-group">
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-description">
          <div class="card-panel-text">在线</div>
          <count-to :start-val="0" :end-val="statis.online" :duration="1500" class="card-panel-num"/>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-description">
          <div class="card-panel-text">最高在线</div>
          <count-to :start-val="0" :end-val="statis.max_online" :duration="1500" class="card-panel-num"/>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-description">
          <div class="card-panel-text">一周最高在线</div>
          <count-to :start-val="0" :end-val="statis.max_online_week" :duration="1500" class="card-panel-num"/>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-description">
          <div class="card-panel-text">一月最高在线</div>
          <count-to :start-val="0" :end-val="statis.max_online_month" :duration="1500" class="card-panel-num"/>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-description">
          <div class="card-panel-text">P2P带宽</div>
          <count-to :start-val="0" :end-val="statis.bandwidth_p2p" :duration="1500" class="card-panel-num"/>
          (Kbps)
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-description">
          <div class="card-panel-text">P2P一周带宽</div>
          <count-to :start-val="0" :end-val="statis.bandwidth_p2p_week" :duration="1500" class="card-panel-num"/>
          (Kbps)
        </div>
      </div>
    </el-col>

    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-description">
          <div class="card-panel-text">P2P一月带宽</div>
          <count-to :start-val="0" :end-val="statis.bandwidth_p2p_month" :duration="1500" class="card-panel-num"/>
          (Kbps)
        </div>
      </div>
    </el-col>
     <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-description">
          <div class="card-panel-text">P2P率</div>
          <count-to :start-val="0" :end-val="statis.p2p_rate_week" :duration="1500" class="card-panel-num"/>
          ‰
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-description">
          <div class="card-panel-text">Http带宽</div>
          <count-to :start-val="0" :end-val="statis.bandwidth_http" :duration="1500" class="card-panel-num"/>
          (Kbps)
        </div>
      </div>
    </el-col>

    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-description">
          <div class="card-panel-text">Http一周带宽</div>
          <count-to :start-val="0" :end-val="statis.bandwidth_http_week" :duration="1500" class="card-panel-num"/>
          (Kbps)
        </div>
      </div>
    </el-col>

    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-description">
          <div class="card-panel-text">Http一月带宽</div>
          <count-to :start-val="0" :end-val="statis.bandwidth_http_month" :duration="1500" class="card-panel-num"/>
          (Kbps)
        </div>
      </div>
    </el-col>

  </el-row>
</template>

<script>
import CountTo from 'vue-count-to'
import { fetchLiveData } from '@/api/liveData'
import { formatBandwidth } from '@/utils/format'

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
        bandwidth_p2p: 0,
        bandwidth_p2p_week: 0,
        bandwidth_p2p_month: 0,
        bandwidth_http: 0,
        bandwidth_http_week: 0,
        bandwidth_http_month: 0,
        p2p_rate_week: 0
      }
    }
  },
  components: {
    CountTo
  },
  mounted() {
    const _this = this
    _this.getData()
    int = setInterval(function() {
      _this.getData()
    }, 5000)
  },
  destroyed() {
    clearInterval(int)
  },
  methods: {
    getData() {
      fetchLiveData().then(res => {
        const { data } = res
        this.statis.online = data.num_rt
        this.statis.max_online = data.max_num
        this.statis.max_online_week = data.max_num_7
        this.statis.max_online_month = data.max_num_month

        // this.statis.bandwidth_p2p = formatBandwidth(data.rt_bw_p2p)
        // this.statis.bandwidth_p2p_week = formatBandwidth(data.bwp_p2p_7)
        // this.statis.bandwidth_p2p_month = formatBandwidth(data.bwp_p2p_month)
        // this.statis.bandwidth_http = formatBandwidth(data.rt_bw_http)
        // this.statis.bandwidth_http_week = formatBandwidth(data.bwp_http_7)
        // this.statis.bandwidth_http_month = formatBandwidth(data.bwp_http_month)

        this.statis.bandwidth_p2p = data.rt_bw_p2p
        this.statis.bandwidth_p2p_week = data.bwp_p2p_7
        this.statis.bandwidth_p2p_month = data.bwp_p2p_month
        this.statis.bandwidth_http = data.rt_bw_http
        this.statis.bandwidth_http_week = data.bwp_http_7
        this.statis.bandwidth_http_month = data.bwp_http_month
        this.statis.p2p_rate_week = Number((data.p2p_rate_7 * 1000).toFixed())
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
    margin-bottom: 32px;
  }
  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);
    &:hover {
      .icon-people {
         background: #40c9c6;
      }
      .icon-message {
        background: #36a3f7;
      }
      .icon-money {
        background: #f4516c;
      }
    }
    .icon-people {
      color: #40c9c6;
    }
    .icon-message {
      color: #36a3f7;
    }
    .icon-money {
      color: #f4516c;
    }
    .card-panel-description {
      // float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;
      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }
      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}
</style>

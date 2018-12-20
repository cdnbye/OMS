<template>
  <div>
    <el-row :gutter="20" class="panel-group">
      <el-col :xs="24" :sm="12" :lg="8" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-description">
            <span class="card-panel-num">{{ statis.online }}</span>
            <div class="card-panel-text">{{ $t('dashboard.online') }}</div>
          </div>
        </div>
      </el-col>

      <el-col :xs="24" :sm="12" :lg="8" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-description">
            <span class="card-panel-num">{{ statis.traffic_p2p.num }}</span>
            <div class="card-panel-text">{{ $t('dashboard.p2pTraffic') }}({{statis.traffic_p2p.unit}})</div>
          </div>
        </div>
      </el-col>
      
      <el-col :xs="24" :sm="12" :lg="8" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-description">
            <span class="card-panel-num">{{ statis.frequency_day }}</span>
            <div class="card-panel-text">{{ $t('dashboard.serveNum') }}</div>
          </div>
        </div>
      </el-col>
    </el-row>

    <Dis />

    <el-dialog
      :visible.sync="tipVisible"
      :width="device === 'mobile' ? '80%' : '30%'">
      <span>{{ $t('dashboard.tip') }}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="tipVisible = false">{{ $t('common.cancel')}}</el-button>
        <el-button type="primary" @click="handlePush">{{$t('dashboard.goBind')}}</el-button>
      </span>
    </el-dialog>
    
  </div>
</template>

<script>
import { fetchGlobalData, fetchNum } from '@/api/user/liveData'
import { fetchUserDomain } from '@/api/userDomain'
import { formatTraffic } from '@/utils/format'
import { mapGetters } from 'vuex'
import Cookies from 'js-cookie'
import store from '@/store'

import Dis from './Distribution'

let int = undefined

export default {
  name: 'PanelGroup',
  components: {
    Dis
  },
  data() {
    return {
      tipVisible: false,
      statis: {
        online: 0,
        traffic_p2p: {
          num: 0,
          unit: 'KB'
        },
        frequency_day: 0,
      },
    }
  },
  computed: {
    ...mapGetters([
      'currentDomain',
      'device'
    ])
  },
  mounted() {
    this.getData()
    const _this = this
    int = setInterval(function() {
      _this.getData()
    }, 10000)
  },
  beforeDestroy() {
    clearInterval(int)
  },
  methods: {
    getData() {
      if(this.currentDomain.id) {
        fetchGlobalData(this.currentDomain.uid, this.currentDomain.id).then(res => {
          const { data } = res
          this.statis.online = data.num_rt
          this.statis.traffic_p2p = formatTraffic(data.traffic_p2p_day)
          this.statis.frequency_day = data.api_frequency_day
        }).catch(err => {
          console.log(err)
        })
      } else {
        this.tipVisible = true
      }
    },
    handlePush() {
      this.tipVisible = false
      this.$router.push('/user/user_domain')
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
  p {
      text-align: left;
      a {
        color: #337ab7;
        cursor: pointer;
        &:hover {
          color: rgb(32, 160, 255);
        }
      }
    }
</style>

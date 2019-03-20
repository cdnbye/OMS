<template>
  <div>
    <div style="text-align: left; margin: 20px">
    <SwitchDomain :finishSelect="handleSwitchDomain" />
    </div>
    <el-row :gutter="20" class="panel-group">
      <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-description">
            <span class="card-panel-num">{{ statis.online | positive }}</span>
            <div class="card-panel-text">{{ $t('dashboard.online') }}</div>
          </div>
        </div>
      </el-col>

      <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="tip">
            <PointTip :content="$t('dashboard.p2pTip')" />
          </div>
          <div class="card-panel-description">
            <span class="card-panel-num">{{ statis.traffic_p2p.num }}</span>
            <div class="card-panel-text">{{ $t('dashboard.p2pTraffic') }}({{ statis.traffic_p2p.unit }})</div>
          </div>
        </div>
      </el-col>
      
      <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-description">
            <span class="card-panel-num">{{ statis.frequency_day }}</span>
            <div class="card-panel-text">{{ $t('dashboard.serveNum') }}</div>
          </div>
        </div>
      </el-col>

      <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-description">
            <span class="card-panel-num">{{ statis.num_max }}</span>
            <div class="card-panel-text">{{ $t('dashboard.maxOnlineNum') }}</div>
          </div>
        </div>
      </el-col>
    </el-row>

    <Dis :data="disData"/>
    <NoBindTip :tipVisible="tipVisible" :handleClose="handleCloseTip" />
    
  </div>
</template>

<script>
import { fetchGlobalData, fetchNum, fetchDisData } from '@/api/user/liveData'
import { formatTraffic, formatPieData } from '@/utils/format'
import { fetchUserDomain } from '@/api/userDomain'
import { mapGetters } from 'vuex'
import store from '@/store'

import SwitchDomain from '@/components/SwitchDomain'
import NoBindTip from '@/components/NoBindTip'
import Dis from './Distribution'

import PointTip from '@/components/PointTip'

let int = undefined

export default {
  name: 'LiveData',
  components: {
    Dis,
    NoBindTip,
    SwitchDomain,
    PointTip
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
        num_max: 0
      },
      disData: {
        versionData: [],
        tagData: [],
        deviceData: [],
        liveData: [],
        netTypeData: []
      }
    }
  },
  computed: {
    ...mapGetters([
      'currentDomain',
      'device',
      'userValidDomain'
    ])
  },
  mounted() {
    if(this.$route.params.id && this.$route.params.uid) {
      console.log('has router')
      this.loopGetData(this.$route.params.uid, this.$route.params.id, this.$route.params.hostId)
    } else {
      console.log('has not router')
      this.getUserDomain()
    }
  },
  beforeDestroy() {
    clearInterval(int)
  },
  methods: {
    getData(uid, id, hostId) {
      fetchGlobalData(uid, id, hostId).then(res => {
        const { data } = res
        this.statis.online = data.num_rt
        this.statis.traffic_p2p = formatTraffic(data.traffic_p2p_day)
        this.statis.frequency_day = data.api_frequency_day
        this.statis.num_max = data.num_max
      }).catch(err => {
        console.log(err)
      })
      fetchDisData(uid, id, 'version', hostId).then(res => {
        if(res.data) {
          this.disData.versionData = formatPieData(res.data)
        }
      })
      fetchDisData(uid, id, 'tag', hostId).then(res => {
        if(res.data) {
          this.disData.tagData = formatPieData(res.data)
        }
      })
      fetchDisData(uid, id, 'device', hostId).then(res => {
        if(res.data) {
          this.disData.deviceData = formatPieData(res.data)
        }
      })
      fetchDisData(uid, id, 'live', hostId).then(res => {
        if(res.data) {
          this.disData.liveData = formatPieData(res.data)
        }
      })
      fetchDisData(uid, id, 'netType', hostId).then(res => {
        if(res.data) {
          this.disData.netTypeData = formatPieData(res.data)
        }
      })
    },
    loopGetData(uid, id, hostId) {
      const _this = this
      _this.getData(uid, id, hostId)
      int = setInterval(function() {
        _this.getData(uid, id, hostId)
      }, 20000)
    },
    handleSwitchDomain(uid, id) {
      clearInterval(int)
      this.loopGetData(uid, id)
    },
    handleCloseTip() {
      this.tipVisible = false
    },
    getUserDomain() {
      fetchUserDomain(1, 10).then(res => {
        if(res.data) {
          let hasValidDomain = false
          if(!this.currentDomain.id) {
            for (let i = 0; i < res.data.length; i++) {
              if(res.data[i].isValid === 1) {
                store.dispatch('setDomain', res.data)
                store.dispatch('setCurrentDomain', res.data[i])
                hasValidDomain = true
                break
              }
            }
          } else {
            for (let i = 0; i < res.data.length; i++) {
              if(res.data[i].isValid === 1) {
                hasValidDomain = true
                break
              }
            }
          }
          if(hasValidDomain) {
            const validDomain = res.data.filter(item => item.isValid === 1)
            store.dispatch('setValidDomain', validDomain)
            this.loopGetData(this.currentDomain.uid, this.currentDomain.id)
          } else {
            this.tipVisible = true
          }
        } else {
          this.tipVisible = true
        }
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
  .tip {
    position: absolute;
    font-size: 15px;
    top: 0;
    right: 0;
    padding: 10px;
  }
</style>

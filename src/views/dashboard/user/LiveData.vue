<template>
  <div>
    <el-row :gutter="20" class="panel-group">
      <el-col :xs="24" :sm="12" :lg="8" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-description">
            <span class="card-panel-num">{{ statis.online | positive }}</span>
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

    <Dis :data="disData"/>

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
import { fetchGlobalData, fetchNum, fetchDisData } from '@/api/user/liveData'
import { fetchUserDomain } from '@/api/userDomain'
import { formatTraffic, formatPieData } from '@/utils/format'
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
      'device'
    ])
  },
  mounted() {
    console.log('===')
    console.log(this.$route.params)
    if(this.$route.params.id && this.$route.params.uid) {
      console.log('has router')
      this.loopGetData(this.$route.params.uid, this.$route.params.id, this.$route.params.hostId)
    } else {
      console.log('has not router')
      if(!this.currentDomain.id) {
        this.getUserDomain()
      } else {
        this.loopGetData(this.currentDomain.uid, this.currentDomain.id)
      }
    }
    // if(!this.currentDomain.id) {
    //   this.getUserDomain()
    // } else {
    //   this.loopGetData()
    // }
  },
  beforeDestroy() {
    clearInterval(int)
  },
  methods: {
    // getData() {
    //   fetchGlobalData(this.currentDomain.uid, this.currentDomain.id).then(res => {
    //     const { data } = res
    //     this.statis.online = data.num_rt
    //     this.statis.traffic_p2p = formatTraffic(data.traffic_p2p_day)
    //     this.statis.frequency_day = data.api_frequency_day
    //   }).catch(err => {
    //     console.log(err)
    //   })
    //   fetchDisData(this.currentDomain.uid, this.currentDomain.id, 'version').then(res => {
    //     if(res.data) {
    //       this.disData.versionData = formatPieData(res.data)
    //     }
    //   })
    //   fetchDisData(this.currentDomain.uid, this.currentDomain.id, 'tag').then(res => {
    //     if(res.data) {
    //       this.disData.tagData = formatPieData(res.data)
    //     }
    //   })
    //   fetchDisData(this.currentDomain.uid, this.currentDomain.id, 'device').then(res => {
    //     if(res.data) {
    //       this.disData.deviceData = formatPieData(res.data)
    //     }
    //   })
    //   fetchDisData(this.currentDomain.uid, this.currentDomain.id, 'live').then(res => {
    //     if(res.data) {
    //       this.disData.liveData = formatPieData(res.data)
    //     }
    //   })
    //   fetchDisData(this.currentDomain.uid, this.currentDomain.id, 'netType').then(res => {
    //     if(res.data) {
    //       this.disData.netTypeData = formatPieData(res.data)
    //     }
    //   })
    // },

    // loopGetData() {
    //   const _this = this
    //   _this.getData()
    //   int = setInterval(function() {
    //     _this.getData()
    //   }, 20000)
    // },

    getData(uid, id, hostId) {
      fetchGlobalData(uid, id, hostId).then(res => {
        const { data } = res
        this.statis.online = data.num_rt
        this.statis.traffic_p2p = formatTraffic(data.traffic_p2p_day)
        this.statis.frequency_day = data.api_frequency_day
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
    handlePush() {
      this.tipVisible = false
      this.$router.push('/user/domain')
    },
    getUserDomain() {
      fetchUserDomain(1, 10).then(res => {
        if(res.data) {
          for (let i = 0; i < res.data.length; i++) {
            if(res.data[i].isValid === 1) {
              store.dispatch('setDomain', res.data)
              store.dispatch('setCurrentDomain', res.data[i])
              this.loopGetData(res.data[i].uid, res.data[i].id)
              break
            }
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
</style>

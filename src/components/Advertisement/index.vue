<template>
  <div class="ad-container">

    <div id="first-ad" :style="device==='mobile'?'height: 45px; width: 100%':'width: 405px; height: 45px; float: left'">
      <div class="operate">
        <span class="word">广告</span>
        <span class="btn" @click="handleClose('first-ad')"><i class="el-icon-close"/></span>
      </div>
    </div>

    <div id="second-ad" :style="device==='mobile'?'height: 45px; width: 100%':'width: 405px; height: 45px; float: right'">
      <div class="operate">
        <span class="word">广告</span>
        <span class="btn" @click="handleClose('second-ad')"><i class="el-icon-close"/></span>
      </div>
    </div>

    <div id="ad">
      <div class="operate">
        <span class="word">广告</span>
        <span class="btn" @click="handleClose('ad')"><i class="el-icon-close"/></span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import config from '../../../config/adConfig'

export default {
  name: 'Advertisement',
  data() {
    return {
      firstShow: true,
      config: config
    }
  },
  computed: {
    ...mapGetters([
      'roles',
      'device'
    ])
  },
  watch: {
    device(val) {
      if(val === 'mobile') {
        const _this = this
        _this.handleClose('second-ad')
        setTimeout(() => {
          _this.handleShow('second-ad')          
        }, config.afterShow);
      }
    },
    firstShow(val) {
      if(!val) {
        const container = document.getElementsByClassName('ad-container')[0]
        container.style.display = 'block'
      }
    }
  },
  mounted(){
    const _this = this
    if(this.roles.indexOf('user') > -1) {
      _this.initADImage()
      if(_this.config.showTop) {
        _this.handleShow('first-ad')
        _this.handleShow('second-ad')
      }
      if(_this.config.showBot) {
        setTimeout(() => {
          _this.handleShow('ad')
        }, config.afterShow)
      }
    }
  },
  methods: {
    initADImage() {
      const leftTopAD = document.getElementById('first-ad')
      const rightTopAD = document.getElementById('second-ad')
      const botAD = document.getElementById('ad')
      const leftImg = require(`../../assets/ads/${this.config.leftTopAD}`)
      const rightImg = require(`../../assets/ads/${this.config.rightTopAD}`)
      const botImg = require(`../../assets/ads/${this.config.botAD}`)
      leftTopAD.style.backgroundImage = 'url(' + leftImg + ')'
      rightTopAD.style.backgroundImage = 'url(' + rightImg + ')'
      botAD.style.backgroundImage = 'url(' + botImg + ')'
    },
    handleShow(id) {
      const ad = document.getElementById(id)
      ad.style.display = 'block'
      const _this = this
      setTimeout(() => {
        _this.handleClose(id)
      }, config.afterHide)
    },
    handleClose(id) {
      if(id === 'first-ad') {
        this.firstShow = false
      }
      const ad = document.getElementById(id)
      ad.style.display = 'none'
    }
  }
}
</script>

<style lang="scss" scoped>
  .ad-container {
    display: flex;
    display: -webkit-flex; /* Safari */
    justify-content: space-between;
  }
  #ad {
    display: none;
    position: fixed;
    width: 240px;
    height: 240px;
    right: 0;
    bottom: 0;
    // background: url('./ad.jpg') no-repeat center;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 240px 240px;
    z-index: 999;
  }
  .operate {
    height: 20px;
    .word {
      float: left;
      font-size: 12px;
      padding: 3px;
      background-color: transparent;
      color: cadetblue;
    }
    .btn {
      float: right;
      cursor: pointer;
    }
  }
  #first-ad {
    display: none;
    margin: 8px 0;
    // background: url('./lookfor.jpg') no-repeat center;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
  }
  #second-ad {
    display: none;
    margin: 8px 0;
    // background: url('./lookfor.jpg') no-repeat center;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
  }
</style>

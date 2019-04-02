<template>
  <div>

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

//多久显示广告 单位：毫秒
const afterShow = 15000
//显示后多久自动关闭 单位：毫秒
const afterHide = 15000

export default {
  name: 'Advertisement',
  props: {
    show: {
      type: Boolean,
      required: true
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
        }, afterShow);
      }
    }
  },
  mounted(){
    const _this = this
    if(this.show && this.roles.indexOf('user') > -1) {
      _this.handleShow('first-ad')
      _this.handleShow('second-ad')

      setTimeout(() => {
        _this.handleShow('ad')
      }, afterShow)
    }
  },
  methods: {
    handleShow(id) {
      const ad = document.getElementById(id)
      ad.style.display = 'block'
      setTimeout(() => {
        ad.style.display = 'none'        
      }, afterHide)
    },
    handleClose(id) {
      const ad = document.getElementById(id)
      ad.style.display = 'none'
    }
  }
}
</script>

<style lang="scss" scoped>
  #ad {
    display: none;
    position: fixed;
    width: 240px;
    height: 240px;
    right: 0;
    bottom: 0;
    background: url('./ad.jpg') no-repeat center;
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
    background: url('./lookfor.jpg') no-repeat center;
    background-size: 100% 100%;
  }
  #second-ad {
    display: none;
    margin: 8px 0;
    background: url('./lookfor.jpg') no-repeat center;
    background-size: 100% 100%;
  }
</style>

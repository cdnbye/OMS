<template>
  <div id="ad">
    <div class="operate">
      <span class="word">广告</span>
      <span class="btn" @click="handleClose"><i class="el-icon-close"/></span>
    </div>
  </div>
</template>

<script>
//广告显示的图片
import Advert from './ad.jpg'
import { mapGetters } from 'vuex'

//多久显示广告 单位：毫秒
const afterShow = 15000
//显示后多久自动关闭 单位：毫秒
const afterHide = 15000
let int = null

export default {
  name: 'Advertisement',
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      img: Advert
    }
  },
  computed: {
    ...mapGetters([
      'device',
      'roles'
    ])
  },
  watch: {
    device(val) {
      if(val === 'mobile') {
        clearTimeout(int)
      }
    }
  },
  mounted(){
    const _this = this
    if(this.show && this.roles.indexOf('user') > -1) {
      int = setTimeout(() => {
        _this.showAD()
      }, afterShow)
    }
  },
  beforeDestroy() {
    clearTimeout(int)
  },
  methods: {
    showAD() {
      const ad = document.getElementById('ad')
      ad.style.display = 'block'
      setTimeout(() => {
        ad.style.display = 'none'        
      }, afterHide)
    },
    handleClose() {
      const ad = document.getElementById('ad')
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
    .operate {
      height: 20px;
      .word {
        float: left;
        padding: 3px;
        background-color: #fff;
        color: cadetblue;
      }
      .btn {
        float: right;
        cursor: pointer;
      }
    }
  }
</style>

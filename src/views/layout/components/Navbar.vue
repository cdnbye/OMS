<template>
  <div class="navbar">
    <hamburger :toggle-click="toggleSideBar" :is-active="sidebar.opened" class="hamburger-container"/>
    <el-tag class="current-zone" type="info" effect="plain">
      {{ $t('navbar.currZone') }}{{ currZone }}
      <PointTip style="font-size: 14px; margin-left: 5px" :content="$t('navbar.zoneTip')" />
    </el-tag>
    <div class="right-menu">

      <switch-domain v-if="showDomain && device!=='mobile'" class="switchdomain "/>
      <lang-select class="international right-menu-item"/>

      <el-dropdown class="avatar-container right-menu-item" trigger="click">
        <div class="avatar-wrapper">
          <div v-if="userName" class="username-wrapper">
            {{ userName }}
          </div>
          <img v-else v-bind:src="Avatar" class="user-avatar"/>
          <i class="el-icon-caret-bottom"/>
        </div>
        <el-dropdown-menu slot="dropdown" style="text-align: center">
          <a target="_blank" href="https://swarmcloud.net/views/">
            <el-dropdown-item>
              {{ $t('navbar.dosAddress') }}
            </el-dropdown-item>
          </a>

          <router-link to="/user/edit">
            <el-dropdown-item>
              {{ $t('navbar.myInfo') }}
            </el-dropdown-item>
          </router-link>

          <el-dropdown-item>
            <span style="display:block" @click="showTimeZone">{{ $t('dashboard.changeUTC') }}</span>
          </el-dropdown-item>

          <el-dropdown-item divided>
            <span style="display:block" @click="logout">{{ $t('navbar.logOut') }}</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <time-zone :visible="timeZoneVisible" @hide="timeZoneVisible = false"></time-zone>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Hamburger from '@/components/Hamburger'
import LangSelect from '@/components/LangSelect'
import Logo from '@/assets/logo.png'
import PointTip from '@/components/PointTip'
import SwitchDomain from '@/components/SwitchDomain'
import TimeZone from '@/components/TimeZone'
import {getItem, removeItem} from "@/utils/storage";

export default {
  data() {
    return {
      timeZoneVisible: false,
      showDomain: true,
      Avatar: Logo,
      currZone: '',
      userName: '',
    }
  },
  components: {
    Hamburger,
    LangSelect,
    SwitchDomain,
    TimeZone,
    PointTip,
  },
  created() {
    this.showDomain = !this.roles.includes('admin')

  },
  mounted() {
    this.currZone = this.getCurrZone()
    const profile = getItem('profile')
    if (profile) this.userName = profile.name
  },
  watch: {
    language() {
      this.currZone = this.getCurrZone()
    },
    profile() {
      const profile = getItem('profile')
      if (profile) this.userName = profile.name
    }
  },
  computed: {
    ...mapGetters([
      'language',
      'sidebar',
      'device',
      'roles',
      'profile'
    ])
  },
  methods: {
    showTimeZone() {
      this.timeZoneVisible = true
    },
    getCurrZone() {
      const loc = getItem('loc')
      if (loc === 'cn') {
        return this.$t('auth.consoleCN')
      }
      if (loc === 'hk') {
        return this.$t('auth.consoleHK')
      }
      if (loc === 'us') {
        return this.$t('auth.consoleUSA')
      }
    },
    toggleSideBar() {
      this.$store.dispatch('toggleSideBar')
    },
    logout() {
      removeItem('profile')
      this.$store.dispatch('LogOut').then(() => {
        // location.reload()// In order to re-instantiate the vue-router object to avoid bugs
        this.$router.push(`/login?redirect=${this.$route.fullPath}`)
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  position: relative;
  height: 50px;
  //line-height: 50px;
  border-radius: 0px !important;
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .current-zone {
    float: left;
    margin-top: 10px;
    margin-left: 5px;
  }
  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    line-height: 18px;
    //height: auto;
    display: flex;
    //justify-content: space-between;
    align-items: center;
    float: right;
    //padding-right: 16px;

    .right-menu-item {
      display: inline-block;
      margin: 0 5px;
      //font-size: 24px;
      //color: #5a5e66;
      //vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }
    //.screenfull {
    //  height: 20px;
    //  width: 20px;
    //  background-color: #1f2d3d;
    //
    //}
    .international{
      vertical-align: center;
      margin-top: 10px;
    }
    .switchdomain {
      white-space: nowrap;
      margin-right: 10px;
      right: 50px;
      height: 20px;
      width: 20px;
      margin-top: -8px;
    }
    .avatar-container {
      height: 50px;
      margin-right: 25px;
      cursor: pointer;
      .avatar-wrapper {
        margin-top: 8px;
        position: relative;
        .username-wrapper {
          margin-top: 20px;
          margin-right: 5px;
          position: relative;
          width: 140px;
          font-weight: bold;
          font-size: 13px;
          word-wrap: break-word;
          word-break: normal;
          text-align: right;
        }
        .user-avatar {
          height: 30px;
          width: 30px;
          border-radius: 10px;
          margin-top: 5px;
        }
        .el-icon-caret-bottom {
          position: absolute;
          right: -17px;
          top: 16px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>

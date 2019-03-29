<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <template v-for="(item,index) in levelList">
        <el-breadcrumb-item v-if="item.meta.title" :key="item.path">
          <span v-if="item.redirect==='noredirect'||index==levelList.length-1" class="no-redirect">{{ generateTitle(item.meta.title) }}</span>
          <router-link v-else :to="item.redirect||item.path">{{ generateTitle(item.meta.title) }}</router-link>
        </el-breadcrumb-item>
      </template>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
import { generateTitle } from '@/utils/i18n'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      levelList: null
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  created() {
    this.getBreadcrumb()
  },
  methods: {
    generateTitle,
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => item.name)
      const first = matched[0]
      if (first && first.name.trim().toLocaleLowerCase() !== 'LiveData'.toLocaleLowerCase() && first.name.trim().toLocaleLowerCase() !== 'UserLiveData'.toLocaleLowerCase()) {
        matched = this.roles.indexOf('admin') > -1
          ? [{ path: '/liveData', meta: { title: 'liveData' }}].concat(matched)
          : [{ path: '/user/liveData', meta: { title: 'liveData' }}].concat(matched)
      }
      this.levelList = matched
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .app-breadcrumb.el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 10px;
    .no-redirect {
      color: #97a8be;
      cursor: text;
    }
  }
</style>

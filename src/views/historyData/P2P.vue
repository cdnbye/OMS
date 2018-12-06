<template>
  <component :is="currentRole"/>
</template>

<script>
import { mapGetters } from 'vuex'
import adminP2P from './admin/P2P'
import userP2P from './user/P2P'

export default {
  name: 'P2P',
  components: { adminP2P, userP2P },
  data() {
    return {
      currentRole: 'adminP2P'
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {
    if (!this.roles.includes('admin')) {
      this.currentRole = 'userP2P'
    }
  }
}
</script>

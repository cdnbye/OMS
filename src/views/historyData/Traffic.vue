<template>
  <component :is="currentRole"/>
</template>

<script>
import { mapGetters } from 'vuex'
import adminTraffic from './admin/Traffic'
import userTraffic from './user/Traffic'

export default {
  name: 'Traffic',
  components: { adminTraffic, userTraffic },
  data() {
    return {
      currentRole: 'adminTraffic'
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {
    if (!this.roles.includes('admin')) {
      this.currentRole = 'userTraffic'
    }
  }
}
</script>

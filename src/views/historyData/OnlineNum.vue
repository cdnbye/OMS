<template>
  <component :is="currentRole"/>
</template>

<script>
import { mapGetters } from 'vuex'
import adminOnline from './admin/Online'
import userOnline from './user/Online'

export default {
  name: 'Online',
  components: { adminOnline, userOnline },
  data() {
    return {
      currentRole: 'adminOnline'
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {
    if (!this.roles.includes('admin')) {
      this.currentRole = 'userOnline'
    }
  }
}
</script>

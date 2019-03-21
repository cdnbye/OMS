<template>
  <component :is="currentRole"/>
</template>

<script>
import { mapGetters } from 'vuex'
import adminWorld from './admin/World'
import userWorld from './user/World'

export default {
  name: 'World',
  components: { adminWorld, userWorld },
  data() {
    return {
      currentRole: 'adminWorld'
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {
    if (!this.roles.includes('admin')) {
      this.currentRole = 'userWorld'
    }
  }
}
</script>

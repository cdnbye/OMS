<template>
  <component :is="currentRole"/>
</template>

<script>
import { mapGetters } from 'vuex'
import adminChina from './admin/China'
import userChina from './user/China'

export default {
  name: 'China',
  components: { adminChina, userChina },
  data() {
    return {
      currentRole: 'adminChina'
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {
    if (!this.roles.includes('admin')) {
      this.currentRole = 'userChina'
    }
  }
}
</script>

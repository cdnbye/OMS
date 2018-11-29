<template>
  <div>
    <component :is="currentRole"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import adminDistribution from './admin/Distribution'
import userDistribution from './user/Distribution'

export default {
  name: 'Distribution',
  components: { adminDistribution, userDistribution },
  data() {
    return {
      currentRole: 'adminDistribution'
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {
    if (!this.roles.includes('admin')) {
      this.currentRole = 'userDistribution'
    }
  }
}
</script>

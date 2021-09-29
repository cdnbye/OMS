<template>
    <component :is="currentRole"/>
</template>

<script>
    import { mapGetters } from 'vuex'
    import adminUSA from './admin/USA'
    import userUSA from './user/USA'

    export default {
        name: 'USA',
        components: { adminUSA, userUSA },
        data() {
            return {
                currentRole: 'adminUSA'
            }
        },
        computed: {
            ...mapGetters([
                'roles'
            ])
        },
        created() {
            if (!this.roles.includes('admin')) {
                this.currentRole = 'userUSA'
            }
        }
    }
</script>

<template>
  <div>
    <el-carousel height="30px" indicator-position="none" :interval="5000" arrow="never">
      <el-carousel-item v-if="showCheckin">
        <el-button size="mini" type="success" @click="handleCheckin"
                   v-loading="loading"
                   style="font-size: medium">
          {{ $t('dashboard.checkin') }}
        </el-button>
      </el-carousel-item>
      <el-carousel-item>
        <el-button size="mini" type="primary" @click="handleInvite"
                   style="font-size: medium">
          {{ $t('dashboard.invite') }}
        </el-button>
      </el-carousel-item>
      <el-carousel-item v-if="profile.mobile === ''">
        <el-button size="mini" @click="handleBonus"
                   style="font-size: medium">
          {{ $t('dashboard.bonus') }}
        </el-button>
      </el-carousel-item>
      <el-carousel-item>
        <el-button size="mini" @click="handleBonus"
                   style="font-size: medium; color: goldenrod">
          {{ $t('dashboard.rechargeBonus') }}
        </el-button>
      </el-carousel-item>
    </el-carousel>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { checkIn } from '@/api/user/package'
import { setItemWithExpiration } from '@/utils/storage'
import { getItem } from '@/utils/storage'
export default {
  name: "Carousel",
  data() {
    return {
      loading: false,
      showCheckin: true,
    }
  },
  mounted() {
    if (!!getItem('checkin')) {
      this.showCheckin = false
    }
  },
  computed: {
    ...mapGetters([
      'currentDomain',
      'profile',
    ])
  },
  methods: {
    handleBonus() {
      this.$router.push('/user/edit')
    },
    handleInvite() {
      this.$router.push('/user/commission')
    },
    handleCheckin() {
      if(this.currentDomain.id !== undefined) {
        this.loading = true
        checkIn(this.currentDomain.uid, {user_id: this.currentDomain.uid})
            .then(res => {
              if(res.data.repeat) {
                this.$messageBox.alert(this.$t('dashboard.haveChecked'), {
                  confirmButtonText: this.$t('common.ok')
                })
              } else {
                this.$messageBox.confirm(this.$t('dashboard.checkinSuccess'), {
                  type: 'success',
                  confirmButtonText: this.$t('common.ok'),
                  showCancelButton: false
                })
              }
              this.loading = false
              setItemWithExpiration('checkin', 1, 3600*12*1000)
              this.showCheckin = false
            })
            .catch(err => {
              this.$messageBox.confirm(this.$t('dashboard.checkinFail'), {
                type: 'error',
                confirmButtonText: this.$t('common.ok'),
                showCancelButton: false
              })
              this.loading = false
              console.log(err)
            })
      } else {
        this.$messageBox.confirm(this.$t('dashboard.tip'), {
          confirmButtonText: this.$t('common.ok'),
          cancelButtonText: this.$t('common.cancel')
        })
            .then(() => {
              this.$router.push('/user/domain')
            })
            .catch(() => {
              return
            })
      }
    },
  }
}
</script>

<style scoped>

</style>

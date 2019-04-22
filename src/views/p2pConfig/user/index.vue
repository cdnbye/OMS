<template>
  <div :style="device === 'mobile' ? '' : 'padding: 30px 120px'">
    <el-alert :title="$t('p2pConfig.desc')" style="margin-bottom: 20px" />
    <el-table border :data="tableData" v-loading="loading">
      <el-table-column align="center" prop="domain" :label="$t('domainTable.domain')"></el-table-column>
      <el-table-column align="center" :formatter="formatterStatus" :label="$t('p2pConfig.status')">
        <template slot-scope="scope">
          <span :style="scope.row.blocked?'color: red':''">
            {{ formatterStatus(scope.row) }}
          </span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('domainTable.operation')" align="center">
        <template slot-scope="scope">
          <el-switch v-if="!scope.row.blocked" :value="!scope.row.disable_p2p" active-color="#13ce66" inactive-color="#ff4949" @change="value => handleSwitchChange(scope.row, value)"> </el-switch>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { fetchUserDomain } from '@/api/userDomain'
import { p2pConfig } from '@/api/user/p2pConfig'
import { mapGetters } from 'vuex'

export default {
  name: 'P2PConfig',
  data() {
    return {
      loading: false,
      tableData: [],
      switchValue: true
    }
  },
  computed: {
    ...mapGetters([
      'device'
    ])
  },
  mounted() {
    this.fetchTableData(1, 20)
  },
  methods: {
    formatterStatus(row) {
      if(row.blocked) {
        return this.$t('p2pConfig.illegal')
      }
      return row.disable_p2p ? this.$t('p2pConfig.close') : this.$t('p2pConfig.open')
    },
    fetchTableData(page, pageSize) {
      this.loading = true
      fetchUserDomain(page, pageSize).then(res => {
        if(res.data) {
          this.tableData = res.data.filter(item => item.isValid === 1 )
        }
        this.loading = false
      }).catch(err => {
        this.loading = false
        console.log(err)
      })
    },
    // 检查是否可以关闭P2P
    // checkCanCloseP2P() {
    //   let openNum = 0
    //   this.tableData.forEach(item => {
    //     if(!item.blocked && !item.disable_p2p)
    //       openNum += 1
    //   })
    //   return openNum >= 2 ? true : false
    // },
    handleP2PConfig(uid, id, data) {
      this.loading = true
      p2pConfig(uid, id, data)
        .then(res => {
          if(res.data.succeed) {
            this.$message({
              message: this.$t('p2pConfig.configSuccess'),
              type: 'success'
            })
            this.tableData.forEach(item => {
              if(item.id === id) {
                item.disable_p2p = data.disable
              }
            })
          } else {
            this.$message.error(this.$t('p2pConfig.configFail'))
          }
          this.loading = false
        })
        .catch(err => {
          this.loading = false
          console.log(err)
        })
    },
    handleSwitchChange(domain, value) {
      const data = { disable: !value }
      this.handleP2PConfig(domain.uid, domain.id, data)
      // if(value) {
      //   this.handleP2PConfig(domain.uid, domain.id, data)
      // } else {
      //   if(this.checkCanCloseP2P()) {
      //     this.handleP2PConfig(domain.uid, domain.id, data)
      //   } else {
      //     this.$messageBox.alert(this.$t('p2pConfig.switchErr'), {
      //       confirmButtonText: this.$t('common.ok')
      //     })
      //   }
      // }
    }
  },
}
</script>

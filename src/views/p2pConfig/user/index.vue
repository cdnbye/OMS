<template>
  <div :style="device === 'mobile' ? '' : 'padding: 30px 120px'">
    <el-table border :data="tableData" v-loading="loading">
      <el-table-column align="center" prop="domain" :label="$t('domainTable.domain')"></el-table-column>
      <el-table-column align="center" prop="isValid" :formatter="formatter" :label="$t('domainTable.status')"></el-table-column>
      <el-table-column :label="$t('domainTable.operation')" align="center">
        <template slot-scope="scope">
          <el-switch :value="!scope.row.disable_p2p" active-color="#13ce66" inactive-color="#ff4949" @change="value => handleSwitchChange(scope.row, value)"> </el-switch>
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
    fetchTableData(page, pageSize) {
      this.loading = true
      fetchUserDomain(page, pageSize).then(res => {
        if(res.data) {
          this.tableData = [...res.data]
        }
        this.loading = false
      }).catch(err => {
        this.loading = false
        console.log(err)
      })
    },
    formatter(row) {
      return row.isValid === 0 ? this.$t('domainTable.unavailable') : this.$t('domainTable.available')
    },
    handleSwitchChange(domain, value) {
      p2pConfig(domain.uid, domain.id, {disable: !value})
        .then(res => {
          if(res.data.succeed) {
            this.$message({
              message: this.$t('p2pConfig.configSuccess'),
              type: 'success'
            })
            this.tableData.forEach(item => {
              if(item.id === domain.id) {
                item.disable_p2p = !value
              }
            })
          } else {
            this.$message.error(this.$t('p2pConfig.configFail'))
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
}
</script>

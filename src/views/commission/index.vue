<template>
  <div class="app-container">
    <el-alert
        :description="$t('invitation.tip')"
        show-icon>
    </el-alert>
    <el-row style="float: left; margin-top: 10px">
      <template >
        <el-col :xs="10" :sm="4" :lg="2">
          <el-button style="float: 'left'" type="primary" @click="handleCopy($event)">{{ $t('invitation.copy') }}</el-button>
        </el-col>
      </template>
    </el-row>

    <el-table :data="tableData" style="width: 100%" v-loading="loading">
      <el-table-column :label="$t('invitation.date')" align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.created_at }}</span>
        </template>
      </el-table-column>

      <el-table-column :label="$t('invitation.from')" align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.from }}</span>
        </template>
      </el-table-column>

      <el-table-column :label="$t('invitation.price')" align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.original_price }}</span>
        </template>
      </el-table-column>

      <el-table-column :label="$t('order.currency')" align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.currency }}</span>
        </template>
      </el-table-column>

      <el-table-column :label="$t('invitation.status')" align="center">
        <template slot-scope="scope">
          <el-tag
              :key="scope.row.id"
              size="small"
              type="success"
              effect="plain">
            {{ $t('invitation.done') }}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column :label="$t('invitation.commission')" align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.amount }}</span>
        </template>
      </el-table-column>
    </el-table>

    <div class="pagination-container">
      <el-pagination
          layout="sizes, prev, pager, next"
          :page-sizes="[10, 20, 50, 100]"
          :page-size="tableParam.pageSize"
          :current-page="tableParam.page"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import PointTip from '@/components/PointTip'
import { fetchInviteRecords } from '@/api/user/invite'
import { getID } from '@/utils/auth'
import clip from '@/utils/clipboard'
import { getItem } from '@/utils/storage'
import { LOCATION } from '@/constant'
import moment from 'moment'
export default {
  name: "Invitation",
  components: {
    PointTip,
  },
  data() {
    return {
      loading: false,
      tableData: [],
      tableParam: {
        page: 1,
        pageSize: 10
      },
    }
  },
  created() {
    this.fetchTableData()
  },
  methods: {
    fetchTableData(page=this.tableParam.page, pageSize=this.tableParam.pageSize) {
      this.loading = true
      fetchInviteRecords(getID(), page, pageSize).then(res => {
        const { data } = res
        if(data) {
          const { data } = res
          data.forEach(item => {
            item.created_at = moment(item.created_at).format('YYYY-MM-DD HH:mm')
          })
          this.tableData = data
        } else {
          this.tableData = []
        }
        this.loading = false
      }).catch(err => {
        this.tableData = []
        this.loading = false
        console.log(err)
      })
    },
    handleCopy() {
      const origin = location.origin + location.pathname + '#/signup'
      const profile = getItem('profile')
      if (!profile) return
      const link = `${origin}?zone=${getItem(LOCATION)}&inviter=${encodeURIComponent(profile.email)}`
      clip(link, event)
    },
    handleSizeChange(pageSize) {
      this.tableParam.pageSize = pageSize
      this.fetchTableData()
    },
    handleCurrentChange(page) {
      this.tableParam.page = page
      this.fetchTableData()
    },
  }
}
</script>

<style scoped>

</style>

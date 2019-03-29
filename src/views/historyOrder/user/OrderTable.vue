<template>
  <div :style="device === 'mobile' ? {} : {padding: '30px 120px'}">
    <el-table :data="orderData.slice((currentPage-1)*pageSize, currentPage*pageSize)">
      <el-table-column align="left" prop="created_at" label="创建时间"></el-table-column>
      <el-table-column align="left" prop="payment" label="支付方式"></el-table-column>
      <el-table-column align="left" prop="price" label="价格"></el-table-column>
      <el-table-column align="left" prop="trade_status" label="状态"></el-table-column>
    </el-table>
    <el-pagination style="margin-top: 20px" layout="prev, pager, next" :total="total" :page-size="pageSize" :current-page="currentPage" @current-change="cueerntPageChange"></el-pagination>
  </div>
</template>

<script>
import { fetchOrder } from '@/api/user/order'
import { getID } from '@/utils/auth'
import moment from 'moment'
import { mapGetters } from 'vuex'

export default {
  name: 'OrderTable',
  data() {
    return {
      orderData: [],
      total: 0,
      pageSize: 10,
      currentPage: 1
    }
  },
  computed: {
    ...mapGetters([
      'device'
    ])
  },
  mounted() {
    this.handleGetOrder()
  },
  methods: {
    cueerntPageChange(current) {
      this.currentPage = current
    },
    formatData(data) {
      data.forEach(item => {
        item.created_at = moment(item.created_at).format('YYYY-MM-DD HH:mm:ss')
        switch (item.trade_status) {
          case 'WAIT_BUYER_PAY':
            item.trade_status = 'wait'
            break;

          case 'TRADE_SUCCESS':
            item.trade_status = 'succ'
            break;

          case 'TRADE_FINISHED':
            item.trade_status = 'succ'
            break;

          case 'TRADE_CLOSED':
            item.trade_status = 'fail'
            break;
        
          default:
            break;
        }
      })
      return data
    },
    handleGetOrder() {
      fetchOrder(getID())
        .then(res => {
          if(res.data) {
            this.orderData = this.formatData(res.data.orders)
            this.total = res.data.orders.length
          }
        })
        .catch(err => {
          this.orderData = []
          this.total = 0
          console.log(err)
        })
    }
  }
}
</script>

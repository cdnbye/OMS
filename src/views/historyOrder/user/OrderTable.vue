<template>
  <div :style="device === 'mobile' ? {} : {padding: '30px 120px'}" v-loading="payLoading" :element-loading-text="$t('package.payLoadingTip')">
    <el-table border :data="orderData" v-loading="tableLoading" style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="table-expand">
          <template v-for="item in props.row.details">
            <template v-if="item.amount">
              <el-form-item :label="$t('order.packageName')" :key="item.order_id">
                <span>{{ item.subject }}</span>
              </el-form-item>
              <el-form-item :label="$t('order.amount')" :key="item.order_id">
                <span>{{ item.amount }}</span>
              </el-form-item>
              <el-form-item :label="$t('order.totalTraffic')" :key="item.order_id">
                <span>{{ item.traffic*item.amount }} TB</span>
              </el-form-item>
            </template>
          </template>
        </el-form>
      </template>
    </el-table-column>

      <el-table-column align="center" prop="created_at" :label="$t('order.createTime')"></el-table-column>
      <el-table-column align="center" prop="type" :label="$t('order.type')" :formatter="formatterType"></el-table-column>
      <el-table-column align="center" prop="payment" :label="$t('order.payMethod')" :formatter="formatterPayMethod"></el-table-column>
      <el-table-column align="center" prop="price" :label="$t('order.price')"></el-table-column>
      <el-table-column align="center" prop="currency" :label="$t('order.currency')"></el-table-column>

      <el-table-column align="center"  :label="$t('order.status')">
        <template slot-scope="scope" :formatter="formatterStatus">
          <el-tag size="medium" :type="tagStatus(scope.row.trade_status)">
            {{ formatterStatus(scope.row) }}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column fixed="right" align="center" :label="$t('order.action')">
        <template slot-scope="scope">
          <el-button v-if="scope.row.trade_status === 'WAIT_BUYER_PAY'" type="primary" size="mini" @click="handlePay(scope.row)">{{ $t('order.pay') }}</el-button>
          <el-popover
            :style="device==='mobile'?'':'margin-left: 10px'"
            trigger="manual"
            placement="top"
            width="200"
            :ref="'popover-' + scope.row.order_id">
            <p>{{ $t('order.tip') }}</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="pClose(scope.row.order_id)">{{ $t('common.cancel') }}</el-button>
              <el-button type="primary" size="mini" @click="handleCloseOrder(scope.row)">{{ $t('common.ok') }}</el-button>
            </div>
            <template v-if="scope.row.trade_status === 'WAIT_BUYER_PAY'">
              <el-button slot="reference" type="danger" size="mini" @click="pShow(scope.row.order_id)">{{ $t('order.close') }}</el-button>
            </template>
          </el-popover>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination style="margin-top: 20px" layout="prev, pager, next" :total="total" :page-size="pageSize" :current-page="currentPage" @current-change="cueerntPageChange"></el-pagination>
  </div>
</template>

<script>
import { fetchOrder, closeOrder } from '@/api/user/order'
import { fetchPayUrl } from '@/api/user/package'
import { getID } from '@/utils/auth'
import { mapGetters } from 'vuex'
import moment from 'moment'

export default {
  name: 'OrderTable',
  data() {
    return {
      tableLoading: false,
      payLoading: false,

      orderData: [],
      total: 0,
      pageSize: 10,
      currentPage: 1
    }
  },
  computed: {
    ...mapGetters([
      'device',
      'language'
    ])
  },
  mounted() {
    this.handleGetOrder()
  },
  methods: {
    tagStatus(tradeStatus) {
      return (tradeStatus==='WAIT_BUYER_PAY' || tradeStatus==='TRADE_PROCESSING')
          ?'':tradeStatus==='TRADE_CLOSED'?'danger':'success'
    },
    pClose(id) {
      this.$refs[`popover-` + id].doClose()
    },
    pShow(id) {
      this.$refs[`popover-` + id].doShow()
    },
    handleCloseOrder(order) {
      closeOrder(getID(), order.order_id)
        .then(res => {
          // this.$message({
          //   message: this.$t('common.closeSuccess'),
          //   type: 'success'
          // })
          this.$notify({
              title: this.$t('common.success'),
              message: this.$t('common.closeSuccess'),
              type: 'success'
          });
          this.handleGetOrder()
          this.pClose(order.order_id)
        })
        .catch(err => {
          this.pClose(order.order_id)
          console.log(err)
        })
    },
    formatterType(row) {
      let type = ''
      if(row.type === 'flow_packet_cn' || row.type === 'flow_packet_en'){
        type = this.$t('order.flowPackage')
      } else {
        type = this.language === 'en' ? row.details[0].subject : row.details[0].subject
      }
      return type
    },
    formatterStatus(row, column) {
      let status = ''
      switch (row.trade_status) {
        case 'WAIT_BUYER_PAY':
          status = this.$t('order.waitPay')
          break;
        case 'TRADE_PROCESSING':
          status = this.$t('order.processing')
          break;
        case 'TRADE_SUCCESS':
          status = this.$t('order.finish')
          break;
        case 'TRADE_FINISHED':
          status = this.$t('order.finish')
          break;
        case 'TRADE_CLOSED':
          status = this.$t('order.fail')
          break;
        default:
          break;
        }
        return status
    },
    cueerntPageChange(current) {
      this.currentPage = current
      this.handleGetOrder()
    },
    formatterPayMethod(row) {
      switch (row.payment) {
        case 'alipay':
          return this.$t('order.alipay')
        case 'paypal':
          return 'Paypal'
        case 'crypto':
          return 'Coinbase'
      }
    },
    formatData(data) {
      if (!data) data = []
      data.forEach(item => {
        item.created_at = moment(item.created_at).format('YYYY-MM-DD HH:mm:ss')
      })
      return data
    },
    handleGetOrder() {
      this.tableLoading = true
      fetchOrder(getID(), this.currentPage, this.pageSize)
        .then(res => {
          this.tableLoading = false
          if(res.data) {
            this.orderData = this.formatData(res.data.orders)
            this.total = res.data.total
          }
        })
        .catch(err => {
          this.tableLoading = false
          this.orderData = []
          this.total = 0
          console.log(err)
        })
    },
    handlePay(order) {
      this.$router.push({
        name: 'OrderDetail',
        query: {
          currency: order.currency,
          orderID: order.order_id,
          totalPrice: order.price,
          buyData: JSON.stringify(order.details)
        }
      })
      // this.payLoading = true
      // fetchPayUrl(order.payment, order.order_id, this.device)
      //   .then(res => {
      //     if(res.data.available) {
      //       window.location.href = `${res.data.pay_url}`
      //     } else {
      //       this.$messageBox.confirm(this.$t('package.systemError'), {
      //         type: 'error',
      //         confirmButtonText: this.$t('common.ok'),
      //         showCancelButton: false
      //       })
      //     }
      //   })
      //   .catch(err => {
      //     this.payLoading = false
      //     console.log(err)
      //   })
    }
  }
}
</script>

<style lang="css" scoped>
  .table-expand {
    font-size: 0;
  }
  .table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .table-expand .el-form-item {
    text-align: center;
    margin-right: 0;
    margin-bottom: 0;
    width: 33%;
  }
</style>

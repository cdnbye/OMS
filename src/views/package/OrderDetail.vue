<template>
  <div :style="device === 'mobile' ? {} : {padding: '30px 120px'}">
    <el-table :data="tableData" border>
      <el-table-column align="left" prop="subject" :label="$t('package.packageInfo')"></el-table-column>
      <el-table-column align="left" prop="price" :label="$t('package.unitPrice')"></el-table-column>
      <el-table-column align="left" prop="buyCount" :label="$t('package.quantity')"></el-table-column>
      <el-table-column align="left" prop="total" :label="$t('package.expense')"></el-table-column>
    </el-table>
    <div class="pay-submit">
      <el-card shadow="never">
        <div>
          <div class="cost">
            <span>{{ $t('package.total') }}</span>
            <span class="price">
              <span>{{ payMethod === 'alipay' ? '￥' : '$' }}</span>
              <em>{{ totalPrice }}</em>
            </span>
          </div>
          <el-button type="warning" @click="payClick">{{ $t('package.confirmPurchase') }}</el-button>
        </div>
      </el-card>
    </div>
    <!-- <el-dialog :visible.sync="payVisible" :width="device === 'mobile' ? '80%' : '30%'">
      <span>请在新打开的支付页面上完成付款</span>
      <span>支付完成前请勿关闭页面！</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="payVisible = false">取消订单</el-button>
        <el-button type="primary" @click="payVisible = false">已完成支付</el-button>
      </span>
    </el-dialog> -->

    <el-dialog :visible.sync="cantBuyVisible" :width="device === 'mobile' ? '80%' : '30%'">
      <span>{{ $t('package.systemError') }}</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="cantBuyVisible = false">{{ $t('common.ok') }}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getID } from '@/utils/auth'
import { createOrder, fetchPayUrl } from '@/api/user/package'

export default {
  name: 'OrderDetail',
  data() {
    return {
      // payVisible: false,
      cantBuyVisible: false,
      tableData: [],
      payMethod: '',
      totalPrice: 0
    }
  },
  computed: {
    ...mapGetters([
      'device'
    ])
  },
  mounted() {
    if(this.$route.params.payMethod) {
      this.tableData = [...this.$route.params.buyData]
      this.tableData.forEach(item => {
        item.total = (item.buyCount * item.price).toFixed(2)
      })
      this.payMethod = this.$route.params.payMethod
      this.totalPrice = this.$route.params.totalPrice
    } else {
      this.$router.push('/user/package')
    }
  },
  methods: {
    payClick() {
      this.handleCreateOrder()
    },
    handleCreateOrder() {
      const data = {
        price: Number(this.totalPrice),
        payment: this.payMethod,
        goods: [],
        goods_type: this.payMethod === 'alipay' ? 'flow_packet_cn' : 'flow_packet_en'
      }
      this.tableData.forEach(item => {
        data.goods.push({
          subject: item.subject,
          traffic: item.traffic,
          price: item.price,
          amount: item.buyCount
        })
      })
      createOrder(getID(), data)
        .then(res => {
          this.handleFetchPayUrl(res.data.order_id)
        })
        .catch(err => {
          console.log(err)
        })
    },
    handleFetchPayUrl(orderID) {
      fetchPayUrl(this.payMethod, orderID, this.device)
        .then(res => {
          if(res.data.available) {
            this.payVisible = true
            window.location.href = `${res.data.pay_url}`
          } else {
            this.cantBuyVisible = true
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  .pay-submit {
    margin-top: 20px;
    text-align: right;
  }
  .cost {
    display: inline-block;
    margin-right: 20px;
    .price {
      span {
        vertical-align: top;
        font-size: 16px;
        line-height: 20px;
        margin-right: 5px;
        color: #ed711f;
      }
      em {
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 30px;
        color: #ed711f;
      }
    }
    
  }
</style>

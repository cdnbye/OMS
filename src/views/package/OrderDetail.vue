<template>
  <div :style="device === 'mobile' ? {} : {padding: '30px 120px'}" v-loading="payLoading" :element-loading-text="$t('package.payLoadingTip')">
    <el-table :data="tableData" border>
      <el-table-column align="left" prop="subject" :label="$t('package.packageInfo')"></el-table-column>
      <el-table-column align="left" prop="price" :label="$t('package.unitPrice')"></el-table-column>
      <el-table-column align="left" prop="amount" :label="$t('package.quantity')"></el-table-column>
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
import { fetchPayUrl } from '@/api/user/package'

export default {
  name: 'OrderDetail',
  data() {
    return {
      payLoading: false,
      cantBuyVisible: false,
      tableData: [],
      payMethod: '',
      totalPrice: 0,
      orderID: 0
    }
  },
  computed: {
    ...mapGetters([
      'device'
    ])
  },
  mounted() {
    if(this.$route.query.payMethod) {
      this.tableData = [...JSON.parse(this.$route.query.buyData)]
      this.tableData.forEach(item => {
        item.total = (item.amount * item.price).toFixed(2)
      })
      this.payMethod = this.$route.query.payMethod
      this.totalPrice = this.$route.query.totalPrice
      this.orderID = this.$route.query.orderID
    } else {
      this.$router.push('/user/package')
    }
  },
  methods: {
    payClick() {
      this.handleFetchPayUrl()
    },
    handleFetchPayUrl() {
      this.payLoading = true
      fetchPayUrl(this.payMethod, this.orderID, this.device)
        .then(res => {
          this.payLoading = false
          if(res.data.available) {
            this.payVisible = true
            window.location.href = `${res.data.pay_url}`
          } else {
            this.cantBuyVisible = true
          }
        })
        .catch(err => {
          this.payLoading = false
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

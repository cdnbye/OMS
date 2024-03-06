<template>
  <div :style="device === 'mobile' ? {} : {padding: '30px 250px'}" v-loading="payLoading" :element-loading-text="$t('package.payLoadingTip')">
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
              <em> {{ totalPrice }}</em>
              <span>{{ currency === 'CNY' ? ' ￥' : ' $' }}</span>
            </span>
          </div>
          <div class="payMethod">
            <img v-if="currency === 'CNY'" style="" :src="payImg.ali" @click="alipayClick" />

            <img v-if="currency !== 'CNY' && showPaypal" style="" :src="payImg.paypal" @click="paypalClick" />
<!--            <div v-if="currency !== 'CNY'">-->
<!--              <img style="width: 150px" :src="payImg.credit" />-->
<!--            </div>-->
            <img v-if="currency !== 'CNY' && showCrypto" style="" :src="payImg.coinbase" @click="coinbaseClick" />
            <img v-if="currency !== 'CNY' && showStripe" style="" :src="payImg.stripe" @click="stripeClick" />

          </div>
        </div>
      </el-card>
    </div>
    <el-dialog :visible.sync="stripeVisible" :width="device === 'mobile' ? '80%' : '30%'">
      <stripe-element-payment
          ref="stripeRef"
          :pk="stripePK"
          :elements-options="stripeElementsOptions"
          :confirm-params="stripeConfirmParams"
          @element-ready="onStripeElementReady"
          @error="onStripeError"
      />
      <span v-show="stripePayVisible" slot="footer" class="dialog-footer">
        <el-button type="primary" :loading="stripePayLoading" @click="handleStripePayClick">Pay Now</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { fetchPayUrl, fetchPayMethods } from '@/api/user/package'
import { StripeElementPayment } from '@vue-stripe/vue-stripe';

export default {
  name: 'OrderDetail',
  components: {
    StripeElementPayment,
  },
  data() {
    return {
      showCrypto: true,
      showPaypal: true,
      showStripe: true,
      payImg: {
        ali: require('../../assets/ali_pay.png'),
        paypal: require('../../assets/paypal.jpeg'),
        coinbase: require('../../assets/coinbase.png'),
        stripe: require('../../assets/stripe.png'),
        // credit: require('../../assets/credit_card.png')
      },
      payLoading: false,
      stripeVisible: false,
      stripePayVisible: false,
      tableData: [],
      currency: '',
      totalPrice: 0,
      orderID: 0,
      // stripe
      stripePK: '',
      stripeElementsOptions: {
        appearance: {}, // appearance options
      },
      stripeConfirmParams: {
        return_url: '', // success url
      },
      stripePayLoading: false,
    }
  },
  computed: {
    ...mapGetters([
      'device'
    ]),
  },
  mounted() {
    if(this.$route.query.currency) {
      this.payLoading = true
      fetchPayMethods().then(({ data }) => {
        this.payLoading = false
        this.showCrypto = data.coinbase
        this.showPaypal = data.paypal
        this.showStripe = data.stripe
        this.formatData()
      }).catch(err => {
        this.payLoading = false
        console.log(err)
      })
    } else {
      this.$router.push('/shopping/package')
    }
  },
  methods: {
    formatData() {
      try {
        this.tableData = [...JSON.parse(this.$route.query.buyData)]
        // console.log(this.tableData)
        this.tableData.forEach(item => {
          item.total = item.amount ? (item.amount * item.price).toFixed(2) : item.price.toFixed(2)
          if(!item.amount) {
            item.amount = 1
          }
        })
      } catch (e) {
        console.error(e)
        this.$router.push('/')
      }
      this.currency = this.$route.query.currency
      this.totalPrice = this.$route.query.totalPrice
      this.orderID = this.$route.query.orderID
    },
    paypalClick() {
      this.handleFetchPayUrl('paypal')
    },
    alipayClick() {
      this.handleFetchPayUrl('alipay')
    },
    coinbaseClick() {
      this.handleFetchPayUrl('crypto')
    },
    stripeClick() {
      this.handleFetchPayUrl('stripe')
    },
    handleFetchPayUrl(payMethod) {
      this.payLoading = true
      fetchPayUrl(payMethod, this.orderID, this.device)
        .then(({ data }) => {
          if (!data.available) {
            return
          }
          if (payMethod === 'stripe') {
            const { client_secret, return_url, public_key } = data
            this.stripePK = public_key
            this.stripeConfirmParams.return_url = return_url
            this.stripeElementsOptions.clientSecret = client_secret
            this.stripeVisible = true
          } else {
            this.payLoading = false
            window.location.href = `${data.pay_url}`
          }
        })
        .catch(err => {
          this.payLoading = false
          console.log(err)
        })
    },
    handleStripePayClick(){
      this.$refs.stripeRef.submit()
      this.stripePayLoading = true
    },
    onStripeElementReady() {
      this.stripePayVisible = true
      this.payLoading = false
    },
    onStripeError(err) {
      const { message } = err
      this.stripePayLoading = false
      this.$notify.error({
        title: this.$t('common.error'),
        message: message,
      });
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
  .payMethod {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 10px;
    >img {
      cursor: pointer;
      width: 160px;
    }
  }
</style>

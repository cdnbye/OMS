<template>
  <div class="package" :style="device === 'mobile' ? {} : {padding: '30px 120px'}">
    <!-- 套餐顶部说明 -->
    <el-alert style="margin-bottom: 20px" type="info" show-icon :title="$t('package.packageSubTitle')" :description="$t('package.monthlyPackageSub')" />

    <el-dialog
        :title="$t('package.comfirmCreate')"
        :visible.sync="dialogVisible"
        :width="device === 'mobile' ? '80%' : '30%'"
        center>
      <template v-if="!subject.upgrade">
        <p>{{$t('order.packageName')}}: {{ subject.subject }}</p>
        <p>{{$t('package.totalMonths')}}: {{ subject.amount }}</p>
        <p>{{$t('package.totalPrice')}}: {{ totalPriceDisplay }}</p>
      </template>
      <el-checkbox v-if="balance > 0" :disabled="totalPrice === 0" v-model="useBalance">
        {{ $t('package.useBalance') }} ({{ balance }})
      </el-checkbox>
      <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">{{ $t('common.cancel') }}</el-button>
      <el-button type="primary" @click="handleBuy">{{ this.$t('common.ok') }}</el-button>
    </span>
    </el-dialog>

    <template v-for="item in packages">
      <el-row :key="item.subject" :style="{'margin-bottom':'20px'}">
        <el-col :span="24">
          <el-card shadow="never" :body-style="device==='mobile'?'padding: 20px 10px':''">
            <template v-if="currency === 'CNY'">
              <div class="container">
                <div class="item-desc">
                  <em class="shop-card-em" :style="device==='mobile'?{'fontSize': '16px'}:{'fontSize': '20px'}">{{ item.subject }}</em>
                  <span class="shop-card-tips" :style="item.original_price - item.price > 0 ? {display: 'inline-block'} : {display: 'none'}">
                    立减 ￥ {{ (item.original_price - item.price).toFixed(2) }}
                  </span>
                  <span class="shop-card-txt">{{ item.leftDays }}天有效</span>
                </div>
                <div class="item-price">
                  <span class="price">
                    <span v-if="item.upgrade"><strong>+</strong></span>
                    <span>￥</span>
                    <em>{{ item.price }}</em>
                    <s v-if="item.price !== item.original_price">￥{{ item.original_price }}</s>
                  </span>
                </div>
                <div class="count">
                  <el-input-number v-if="!item.upgrade" v-model="item.amount" style="margin-right: 10px" placeholder="月数" controls-position="right" size="small" :min="0" :max="12"></el-input-number>
                  <el-button :disabled="item.amount===0" type="warning" @click="showDialog(item)">{{item.upgrade ? '升級' : '購買'}}</el-button>
                </div>
              </div>
            </template>

            <template v-else>
              <div class="container">
                <div class="item-desc">
                  <em class="shop-card-em" :style="device==='mobile'?{'fontSize': '16px'}:{'fontSize': '20px'}">{{ item.subject }}</em>
                  <span class="shop-card-tips" :style="item.original_price - item.price >0 ? {display: 'inline-block'} : {display: 'none'}">
                    {{((item.original_price - item.price)/item.original_price * 100).toFixed(1)}}% off
                  </span>
                  <span class="shop-card-txt">{{ item.leftDays }} days period</span>
                </div>
                <div class="item-price">
                  <span class="price">
                    <span v-if="item.upgrade"><strong>+</strong></span>
                    <span>$</span>
                    <em>{{ item.price }}</em>
                    <s v-if="item.price !== item.original_price">${{ item.original_price }}</s>
                  </span>
                </div>
                <div class="count">
                  <el-input-number v-if="!item.upgrade" v-model="item.amount" style="margin-right: 10px" placeholder="months" controls-position="right" size="small" :min="0" :max="12"></el-input-number>
                  <el-button :disabled="item.amount===0" type="warning" @click="showDialog(item)">{{item.upgrade ? 'Upgrade' :  'Buy'}}</el-button>
                </div>
              </div>
            </template>
          </el-card>
        </el-col>
      </el-row>
    </template>
  </div>
</template>

<script>
import { fetchMonthlyPackage, createOrder } from '@/api/user/package'
import { mapGetters } from 'vuex'
import { getID } from '@/utils/auth'

export default {
  name: 'Package',
  data() {
    return {
      dialogVisible: false,
      currency: '',
      packages: [],
      selectPackage: {
        cn: [],
        en: []
      },
      subject: {},
      useBalance: false,
      balance: 0,
      totalPrice: 0,
    }
  },
  mounted() {
    this.getPackageData()
  },
  computed: {
    ...mapGetters([
      'device',
      'language',
    ]),
    totalPriceDisplay() {
      if (!this.useBalance) return this.totalPrice
      if (this.balance >= this.totalPrice) {
        return  0
      }
      return Number((this.totalPrice - this.balance).toFixed(1))
    }
  },
  methods: {
    getPackageData() {
      fetchMonthlyPackage(getID())
        .then(res => {
          const { data } = res
          const attachLeftDays = (item) => {
            if (item.upgrade) {
              item.leftDays = data.left_days
              item.amount = 1
            } else if (item.type.toLowerCase().startsWith('annual')) {
              item.leftDays = 365
            } else {
              item.leftDays = 30
            }
          }

          if(this.language==='zh') {
            this.currency = 'CNY'
            this.balance = data.balance_cny
            this.packages = [...data.list_cn]
            this.packages.forEach(item => {
              attachLeftDays(item)
              this.selectPackage.cn.push({...item,})
            })
          } else {
            this.currency = 'USD'
            this.balance = data.balance_usd
            this.packages = [...data.list_en]
            this.packages.forEach(item => {
              attachLeftDays(item)
              this.selectPackage.en.push({...item})
            })
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    dialogClose() {
      this.$router.push('/')
    },
    handleCreateOrder(data, realPrice) {
      createOrder(getID(), data)
        .then(res => {
          if (res.data.finished) {
            this.$router.push({
              path: '/',
              query: {
                is_payed: true,
              }
            })
          } else {
            this.$router.push({
              name: 'OrderDetail',
              query: {
                currency: this.currency,
                orderID: res.data.order_id,
                totalPrice: realPrice,
                buyData: JSON.stringify(data.goods)
              }
            })
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    showDialog(subject) {
      this.dialogVisible = true
      this.subject = subject
      this.totalPrice = Number(subject.price) * subject.amount
    },
    handleBuy() {
      let realPrice = this.totalPrice
      if (this.useBalance) {
        if (this.balance >= this.totalPrice) {
          realPrice = 0
        } else {
          realPrice = Number((this.totalPrice - this.balance).toFixed(1))
        }
      }
      const data = {
        price: this.totalPrice,
        currency: this.currency,
        goods: [this.subject],
        goods_type: this.currency === 'CNY' ? 'monthly_packet_cn' : 'monthly_packet_en',
        customized: this.subject.customized,
        upgrade: this.subject.upgrade,
        balance_used: this.totalPrice - realPrice,
      }
      this.handleCreateOrder(data, realPrice)
    },

  }
}
</script>

<style lang="scss" scoped>
  em {
    font-style: normal;
    font-weight: 400;
  }
  .package {
    img {
      vertical-align: middle;
      width: 100px;
      height: auto;
    }
  }
  .container {
    .item-desc {
      display: inline-block;
      width: 33.3%;
      text-align: left;
      .shop-card-em {
        color: #333;
        vertical-align: middle;
        margin-right: 5px;
      }
      .shop-card-txt {
        display: block;
        color: #8d99a6;
        font-size: 14px;
        padding-top: 3px;
      }
      .shop-card-tips {
        vertical-align: middle;
        color: #ff7200;
        border: 1px solid #ff7200;
        font-size: 12px;
        line-height: 12px;
        padding: 2px 5px 1px;
        border-radius: 2px;
      }
    }
    .item-price {
      display: inline-block;
      text-align: right;
      width: 33.3%;
      .price {
        span {
          vertical-align: top;
          font-size: 14px;
          line-height: 14px;
          margin-right: 3px;
          color: #ed711f;
        }
        em {
          font-size: 24px;
          line-height: 24px;
          color: #ed711f;
        }
        s {
          font-size: 12px;
          color: #999;
          display: inline-block;
        }
      }
    }
    .count {
      display: inline-block;
      width: 33.3%;
      text-align: right;
    }
  }
</style>

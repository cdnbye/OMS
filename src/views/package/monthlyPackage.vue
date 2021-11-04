<template>
  <div class="package" :style="device === 'mobile' ? {} : {padding: '30px 120px'}">
    <!-- 进入页面首先选择支付方式提示框 -->
    <el-dialog
      :title="$t('package.payMethod')"
      :visible.sync="payVisible"
      :width="device === 'mobile' ? '80%' : '30%'"
      :before-close="dialogClose">
      <el-radio v-if="language==='en'" v-model="paySelect" label="paypal">
        <img :src="payImg.paypal" />
      </el-radio>
      <!--<el-radio v-if="language==='en'" v-model="paySelect" label="btc">-->
        <!--<img style="width: 60px" :src="payImg.btc" />-->
      <!--</el-radio>-->
      <el-radio v-model="paySelect" label="alipay">
        <img :src="payImg.ali" />
      </el-radio>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleSelect">{{ $t('common.ok') }}</el-button>
      </span>
    </el-dialog>
    <!-- 套餐顶部说明 -->
    <el-alert style="margin-bottom: 20px" type="info" show-icon :title="$t('package.packageSubTitle')" :description="$t('package.monthlyPackageSub')" />

    <template v-for="item in packages">
      <el-row :key="item.subject" :style="{'margin-bottom':'20px'}">
        <el-col :span="24">
          <el-card shadow="never" :body-style="device==='mobile'?'padding: 20px 10px':''">
            <template v-if="paySelect === 'alipay'">
              <div class="container">
                <div class="item-desc">
                  <em class="shop-card-em" :style="device==='mobile'?{'fontSize': '16px'}:{'fontSize': '20px'}">{{ item.subject }}</em>
                  <span class="shop-card-tips" :style="item.original_price - item.price > 0 ? {display: 'inline-block'} : {display: 'none'}">
                    立减 ￥ {{ (item.original_price - item.price).toFixed(2) }}
                  </span>
                  <span class="shop-card-txt">{{ item.type.indexOf('month') > -1 ? '30天有效' : '365天有效' }}</span>
                </div>
                <div class="item-price">
                  <span class="price">
                    <span>￥</span>
                    <em>{{ item.price }}</em>
                    <s v-if="item.price !== item.original_price">￥{{ item.original_price }}</s>
                  </span>
                </div>
                <div class="count">
                  <el-button type="warning" @click="handleBuy(item)">购买</el-button>
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
                  <span class="shop-card-txt">{{ item.type.indexOf('month') > -1 ? '30 days period' : '365 days period' }}</span>
                </div>
                <div class="item-price">
                  <span class="price">
                    <span>$</span>
                    <em>{{ item.price }}</em>
                    <s v-if="item.price !== item.original_price">${{ item.original_price }}</s>
                  </span>
                </div>
                <div class="count">
                  <el-button type="warning" @click="handleBuy(item)">Buy</el-button>
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
      payVisible: true,
      paySelect: '',
      payImg: {
        ali: require('../../assets/ali_pay.png'),
        paypal: require('../../assets/paypal.jpeg'),
        // btc: require('../../assets/btc.png')
      },
      packages: [],
      selectPackage: {
        cn: [],
        en: []
      }
    }
  },
  computed: {
    ...mapGetters([
      'device',
      'language',
    ])
  },
  methods: {
    getPackageData() {
      fetchMonthlyPackage(getID())
        .then(res => {
          if(this.paySelect === 'alipay') {
            this.packages = [...res.data.list_cn]
            this.packages.forEach(item => {
              this.selectPackage.cn.push({...item, amount: 0})
            })
          } else {
            this.packages = [...res.data.list_en]
            this.packages.forEach(item => {
              this.selectPackage.en.push({...item, amount: 0})
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
    handleSelect() {
      if (this.paySelect === '') return
      if (this.paySelect === 'btc') {
          window.open('https://www.cdnbye.com/en/views/prices.html#cryptocurrency-wallet')
      } else {
          this.payVisible = false
          this.getPackageData()
      }
    },
    handleCreateOrder(data) {
      createOrder(getID(), data)
        .then(res => {
          this.$router.push({
            name: 'OrderDetail',
            query: {
              payMethod: this.paySelect,
              orderID: res.data.order_id,
              totalPrice: data.price,
              buyData: JSON.stringify(data.goods)
            }
          })
        })
        .catch(err => {
          console.log(err)
        })
    },
    handleBuy(subject) {
      // if (this.paySelect === 'paypal' && Number(subject.price) >= 50) {
      //     this.$messageBox.alert(this.$t('package.payAnotherWay'), {
      //         distinguishCancelAndClose: true,
      //         confirmButtonText: this.$t('common.ok'),
      //         callback: action => {
      //             if (action === 'confirm') {
      //                 window.open(`https://www.cdnbye.com/en/views/prices.html#cryptocurrency-wallet`)
      //             }
      //         }
      //     });
      //     return
      // }
      this.$messageBox.confirm(this.$t('package.comfirmCreate'), {
          distinguishCancelAndClose: true,
          confirmButtonText: this.$t('common.ok'),
          cancelButtonText: this.$t('common.cancel')
      })
          .then(() => {
              const data = {
                  price: Number(subject.price),
                  payment: this.paySelect,
                  goods: [subject],
                  goods_type: this.paySelect === 'alipay' ? 'monthly_packet_cn' : 'monthly_packet_en',
                  customized: subject.customized,
              }
              this.handleCreateOrder(data)
              // console.log(subject)
          })
    }
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

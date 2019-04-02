<template>
  <div class="package" :style="device === 'mobile' ? {} : {padding: '30px 120px'}">
    <!-- 进入页面首先选择支付方式提示框 -->
    <el-dialog
      :title="$t('package.payMethod')"
      :visible.sync="payVisible"
      :width="device === 'mobile' ? '80%' : '30%'"
      :before-close="dialogClose">
      <el-radio v-model="paySelect" label="alipay">
        <img :src="payImg.ali" />
      </el-radio>
      <el-radio v-model="paySelect" label="paypal">
        <img :src="payImg.paypal" />
      </el-radio>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleSelect">{{ $t('common.ok') }}</el-button>
      </span>
    </el-dialog>
    <!-- 没有选择套餐点击购买时的提示框 -->
    <el-dialog
      :title="$t('package.noBuyTitle')"
      :width="device === 'mobile' ? '80%' : '30%'"
      :visible.sync="noSelectVisible">
      {{$t('package.noBuyTip')}}
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="noSelectVisible = false">{{ $t('common.cancel') }}</el-button>
        <el-button type="primary" @click="noSelectVisible = false">{{ $t('common.ok') }}</el-button>
      </span>
    </el-dialog>

    <el-alert style="margin-bottom: 20px" type="info" show-icon :title="$t('package.packageSubTitle')" :description="$t('package.packageSub')" />

    <template v-for="(item, index) in packages">
      <el-row :key="item.subject" style="margin-bottom: 20px">
        <el-col :span="24">
          <el-card shadow="never">
            <template v-if="paySelect === 'alipay'">
              <div class="container">
                <div class="item-desc">
                  <em class="shop-card-em">{{ item.traffic }}TB</em>
                  <span class="shop-card-tips" :style="item.original_price - item.price > 0 ? {display: 'inline-block'} : {display: 'none'}">
                    立减 ￥ {{ (item.original_price - item.price).toFixed(2) }}
                  </span>
                  <span class="shop-card-txt">永久有效</span>
                </div>
                <div class="item-price">
                  <span class="price">
                    <span>￥</span>
                    <em>{{ item.price }}</em>
                    <s v-if="item.price !== item.original_price">￥{{ item.original_price }}</s>
                  </span>
                </div>
                <div class="count">
                  <el-input-number v-model="selectPackage.cn[index].amount" size="mini" :min="0" @change="value => selectCountChange(value, item)"></el-input-number>
                </div>
              </div>
            </template>

            <template v-else>
              <div class="container">
                <div class="item-desc">
                  <em class="shop-card-em">{{ item.traffic }}TB</em>
                  <span class="shop-card-tips" :style="item.original_price - item.price >0 ? {display: 'inline-block'} : {display: 'none'}">
                    {{((item.original_price - item.price)/item.original_price * 100).toFixed(1)}}% off
                  </span>
                  <span class="shop-card-txt">Permanently</span>
                </div>
                <div class="item-price">
                  <span class="price">
                    <span>$</span>
                    <em>{{ item.price }}</em>
                    <s v-if="item.price !== item.original_price">${{ item.original_price }}</s>
                  </span>
                </div>
                <div class="count">
                  <el-input-number v-model="selectPackage.en[index].amount" size="mini" :min="0" @change="value => selectCountChange(value, item)"></el-input-number>
                </div>
              </div>
            </template>
          </el-card>
        </el-col>
      </el-row>
    </template>
    <el-card :body-style="{'text-align': 'left', 'position': 'fixed', 'bottom': 0, 'width': '100%', 'z-index': 99, 'background-color': '#fff'}">
      <div v-if="paySelect === 'alipay'">
        <div class="buy">
          <div class="tip">
            总计费用：
          </div>
          <div class="total-price">
            <em>{{totalPrice}} <span class="unit">RMB</span></em>
          </div>
        </div>
        <el-button type="warning" @click="handleBuyClick">创建订单</el-button>
      </div>
      <div v-else>
        <div class="buy">
          <div class="tip">
            Total cost:
          </div>
          <div class="total-price">
            <em>{{totalPrice}} <span class="unit">USD</span></em>
          </div>
        </div>
        <el-button type="warning" @click="handleBuyClick">Create order</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import { fetchPackage, createOrder } from '@/api/user/package'
import { mapGetters } from 'vuex'
import { getID } from '@/utils/auth'

import Alipay from '@/assets/ali_pay.png'
import Paypal from '@/assets/paypal.jpeg'

export default {
  name: 'Package',
  data() {
    return {
      payVisible: true,
      noSelectVisible: false,
      paySelect: 'alipay',
      payImg: {
        ali: Alipay,
        paypal: Paypal
      },
      totalPrice: 0,
      packages: [],
      selectPackage: {
        cn: [],
        en: []
      }
    }
  },
  computed: {
    ...mapGetters([
      'device'
    ])
  },
  methods: {
    getPackageData() {
      fetchPackage()
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
    selectCountChange(value, item) {
      this.getTotalPrice()
    },
    handleSelect() {
      this.payVisible = false
      this.getPackageData()
    },
    getTotalPrice() {
      let total = 0
      if(this.selectPackage.cn.length > 0) {
        this.selectPackage.cn.forEach(item => {
          if(item.amount > 0) {
            total += item.price * item.amount
          }
        })
      } else {
        this.selectPackage.en.forEach(item => {
          if(item.amount > 0) {
            total += item.price * item.amount
          }
        })
      }
      this.totalPrice = total.toFixed(2)
    },
    handleCreateOrder() {
      const data = {
        price: Number(this.totalPrice),
        payment: this.paySelect,
        goods: [],
        goods_type: this.paySelect === 'alipay' ? 'flow_packet_cn' : 'flow_packet_en'
      }
      const selected = this.paySelect === 'alipay' ? this.selectPackage.cn : this.selectPackage.en
      data.goods = selected.filter(item => item.amount > 0)
      createOrder(getID(), data)
        .then(res => {
          this.$router.push({
            name: 'OrderDetail',
            query: {
              payMethod: this.paySelect,
              orderID: res.data.order_id,
              totalPrice: this.totalPrice,
              buyData: JSON.stringify(data.goods)
            }
          })
        })
        .catch(err => {
          console.log(err)
        })
    },
    handleBuyClick() {
      this.totalPrice <= 0
        ? this.noSelectVisible = true
        : this.handleCreateOrder()
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
    display: -webkit-flex; /* Safari */
    display: flex;
    justify-content: space-between;
    .item-desc {
      text-align: left;
      flex-grow: 2;
      .shop-card-em {
        font-size: 24px;
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
      flex-grow: 1;
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
  }
  .tip {
    font-size: 14px;
    display: inline-block;
    width: 95px;
    vertical-align: top;
  }
  .total-price {
    display: inline-block;
    vertical-align: top;
    color: #ed711f;
    em {
      font-size: 25px;
      line-height: 20px;
      .unit {
        font-size: 16px;
      }
    }
  }
  .buy {
    margin-bottom: 12px;
  }
</style>

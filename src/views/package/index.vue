<template>
  <div class="package">
    <el-dialog
      title="付款方式"
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
        <el-button type="primary" @click="handleSelect">确 定</el-button>
      </span>
    </el-dialog>
    <template v-for="(item, index) in packages">
      <el-row :key="item.subject" style="margin-bottom: 20px">
        <el-col :span="24">
          <el-card shadow="never">
            <div class="container">
              <div class="item-desc">
                <em class="shop-card-em">{{ item.subject }}</em>
              </div>
              <div class="item-price">
                <span class="price">
                  <span>{{ paySelect === 'alipay' ? '￥' : '$'}}</span>
                  <em>{{ item.price }}</em>
                  <s v-if="item.price !== item.original_price">{{ paySelect === 'alipay' ? '￥' : '$'}}{{ item.original_price }}</s>
                </span>
              </div>
              <div v-if="paySelect === 'alipay'" class="count">
                <el-input-number v-model="inputNumber.cn[index]" size="mini" :min="0" @change="value => selectCountChange(value, item)"></el-input-number>
              </div>
              <div v-else class="count">
                <el-input-number v-model="inputNumber.en[index]" size="mini" :min="0" @change="value => selectCountChange(value, item)"></el-input-number>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </template>
    <el-card>
      <div>
        <div class="tip">
          总计费用：
        </div>
        <div class="total-price">
          <em>{{totalPrice}}</em>
        </div>
      </div>
      <el-button type="warning">立即购买</el-button>
    </el-card>
  </div>
</template>

<script>
import { fetchPackage } from '@/api/user/package'
import { mapGetters } from 'vuex'
import Alipay from '@/assets/ali_pay.png'
import Paypal from '@/assets/paypal.jpeg'

export default {
  name: 'Package',
  data() {
    return {
      payVisible: true,
      paySelect: 'alipay',
      payImg: {
        ali: Alipay,
        paypal: Paypal
      },
      totalPrice: '0.00',
      packageData: {},
      packages: [],
      inputNumber: {
        cn: [],
        en: []
      }
    }
  },
  mounted() {
    this.getPackageData()
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
          this.packageData = {...res.data}
        })
        .catch(err => {
          console.log(err)
        })
    },
    dialogClose() {
      this.$router.go(-1)
    },
    selectCountChange(value, item) {
      console.log(value)
      console.log(item)
    },
    handleSelect() {
      this.payVisible = false
      if(this.paySelect === 'alipay') {
        this.packages = [...this.packageData.list_cn]
        this.packages.forEach(item => {
          this.inputNumber.cn.push(0)
        })
      } else {
        this.packages = [...this.packageData.list_en]
        this.packages.forEach(item => {
          this.inputNumber.en.push(0)
        })
      }
      console.log(this.inputNumber)
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
      .shop-card-em {
        font-size: 24px;
        color: #333;
        vertical-align: middle;
        margin-right: 5px;
      }
    }
    .item-price {
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
    }
  }
</style>

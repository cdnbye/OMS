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
              <span>{{payMethod === 'alipay' ? '￥' : '$'}}</span>
              <em>{{totalPrice}}</em>
            </span>
          </div>
          <el-button type="warning">{{ $t('package.confirmPurchase') }}</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'OrderDetail',
  data() {
    return {
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
    console.log(this.$route.params)
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

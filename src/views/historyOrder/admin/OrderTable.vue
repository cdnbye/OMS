<template>
  <div :style="device === 'mobile' ? {} : {padding: '30px 120px'}" v-loading="payLoading" :element-loading-text="$t('package.payLoadingTip')">
    <el-row :gutter="20" style="margin-bottom: 20px">
      <el-col :xs="24" :sm="12" :lg="6">
        <el-input
            class="filter-item"
            prefix-icon="el-icon-search"
            placeholder="请输入UID"
            v-model="searchValue"
            @keyup.enter.native="keywordsChange"/>
      </el-col>
      <el-col :xs="24" :sm="12" :lg="6">
        <el-select v-model="selectValue" @change="selectChange" placeholder="支付方式" class="filter-item">
          <el-option
              v-for="item in selectOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          >
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-table border :data="orderData" v-loading="tableLoading" style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="table-expand">
          <template v-for="item in props.row.details">
            <template>
              <el-form-item :label="$t('order.packageName')" :key="item.order_id">
                <span>{{ item.subject }}</span>
              </el-form-item>
              <el-form-item v-if="item.amount" :label="$t('order.amount')" :key="item.order_id">
                <span>{{ item.amount }}</span>
              </el-form-item>
              <el-form-item v-if="!item.type && item.amount && item.traffic" :label="$t('order.totalTraffic')" :key="item.order_id">
                <span>{{ item.traffic*item.amount }} TB</span>
              </el-form-item>
              <el-form-item v-if="item.upgrade" :label="$t('order.upgraded')" :key="item.order_id">
              </el-form-item>
            </template>
            <el-form-item v-if="props.row.balance_used" :label="$t('package.useBalance')">
              <span>{{ props.row.balance_used }}</span>
            </el-form-item>
          </template>
        </el-form>
      </template>
    </el-table-column>

      <el-table-column align="center" prop="order_id" label="ID"></el-table-column>
      <el-table-column align="center" prop="uid" label="UID"></el-table-column>
      <el-table-column align="center" prop="created_at" :label="$t('order.createTime')"></el-table-column>
      <el-table-column align="center" prop="type" :label="$t('order.type')" :formatter="formatterType"></el-table-column>
      <el-table-column align="center" prop="payment" :label="$t('order.payMethod')" :formatter="formatterPayMethod"></el-table-column>
      <el-table-column align="center" prop="price" :label="$t('order.price')"></el-table-column>
      <el-table-column align="center" prop="currency" :label="$t('order.currency')"></el-table-column>

    </el-table>
    <el-pagination style="margin-top: 20px"
                   :small="device === 'mobile'"
                   :layout="device === 'mobile' ? 'prev, pager, next' : 'sizes, prev, pager, next'"
                   :page-sizes="[10, 20, 50, 100]"
                   :page-size="pageSize"
                   :current-page="currentPage"
                   @size-change="handleSizeChange"
                   @current-change="currentPageChange"
    ></el-pagination>
  </div>
</template>

<script>
import { fetchTrades } from '@/api/finance'
import { mapGetters } from 'vuex'
import moment from 'moment'
import { formatterPayMethod } from '@/utils/format'

export default {
  name: 'OrderTable',
  data() {
    return {
      tableLoading: false,
      payLoading: false,
      orderData: [],
      pageSize: 10,
      currentPage: 1,
      searchValue: '',
      selectValue: '',
      selectOptions: [
        {
          label: 'All',
          value: ''
        },
        {
          label: 'Alipay',
          value: 'alipay'
        },
        {
          label: 'Paypal',
          value: 'paypal'
        },
        {
          label: 'Crypto',
          value: 'crypto'
        },
        {
          label: 'Stripe',
          value: 'stripe'
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'device',
      'language'
    ])
  },
  created() {
    this.resetFilters()
    this.handleGetOrder()
  },
  methods: {
    resetFilters() {
      this.filters = [
        {
          name: 'payment',
          value: false
        },
        {
          name: 'uid',
          value: false
        },
      ]
    },
    formatterPayMethod(row) {
      return formatterPayMethod(row)
    },
    formatterType(row) {
      let type = ''
      if (row.type.startsWith('flow_packet')){
        type = this.$t('order.flowPackage')
      } else if (row.type.startsWith('monthly_packet')) {
        type = this.$t('order.monthlyPlan')
      } else if (row.type.startsWith('recharge')) {
        type = this.$t('order.recharge')
      }
      return type
    },
    handleSizeChange(pageSize) {
      this.pageSize = pageSize
      this.handleGetOrder()
    },
    currentPageChange(current) {
      this.currentPage = current
      this.handleGetOrder()
    },
    formatData(data) {
      if (!data) data = []
      const showInvoiceDate = moment('2023-09-19')
      data.forEach(item => {
        const createdAt = moment(item.created_at)
        item.created_at = createdAt.format('YYYY-MM-DD HH:mm:ss')
        if (createdAt.isAfter(showInvoiceDate)) {
          item.showInvoice = true
        }
      })
      return data
    },
    handleGetOrder() {
      this.tableLoading = true
      fetchTrades(this.currentPage, this.pageSize, this.filters)
        .then(res => {
          this.tableLoading = false
          if(res.data) {
            this.orderData = this.formatData(res.data.orders)
          }
        })
        .catch(err => {
          this.tableLoading = false
          this.orderData = []
          console.log(err)
        })
    },
    keywordsChange(e) {
      const uid = e.target.value.trim()
      this.filters.forEach(item => {
        if(item.name === 'uid')
          item.value = uid
      })
      this.handleGetOrder()
    },
    selectChange(val) {
      this.filters.forEach(item => {
        if(item.name === 'payment')
          item.value = this.selectValue
      })
      this.handleGetOrder()
    },
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
    width: 25%;
  }
</style>

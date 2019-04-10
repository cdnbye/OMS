<template>
  <div class="app-main" v-loading="loading">
    <el-row :gutter="20" class="panel-group">
      <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-description">
            <span class="card-panel-num">{{ financeData.payed_num }}</span>
            <div class="card-panel-text">付费用户数</div>
          </div>
        </div>
      </el-col>

      <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-description">
            <span class="card-panel-num">{{ financeData.active_payed_num }}</span>
            <div class="card-panel-text">活跃付费用户数</div>
          </div>
        </div>
      </el-col>

      <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-description">
            <span class="card-panel-num">{{ financeData.total_num }}</span>
            <div class="card-panel-text">总用户数</div>
          </div>
        </div>
      </el-col>

      <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-description">
            <span class="card-panel-num">{{ financeData.total_num_bound }}</span>
            <div class="card-panel-text">绑定域名的用户数</div>
          </div>
        </div>
      </el-col>

      <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-description">
            <span class="card-panel-num">{{ financeData.income_rmb_today }}</span>
            <div class="card-panel-text">今日人民币收入</div>
          </div>
        </div>
      </el-col>

      <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-description">
            <span class="card-panel-num">{{ financeData.income_usd_today }}</span>
            <div class="card-panel-text">今日美元收入</div>
          </div>
        </div>
      </el-col>

      <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-description">
            <span class="card-panel-num">{{ financeData.orders_rmb_today }}</span>
            <div class="card-panel-text">今日人民币订单数</div>
          </div>
        </div>
      </el-col>

      <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-description">
            <span class="card-panel-num">{{ financeData.orders_usd_today }}</span>
            <div class="card-panel-text">今日美元订单数</div>
          </div>
        </div>
      </el-col>

      <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-description">
            <span class="card-panel-num">{{ (financeData.income_rmb).toFixed(2) }}</span>
            <div class="card-panel-text">总的人民币收入</div>
          </div>
        </div>
      </el-col>

      <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-description">
            <span class="card-panel-num">{{ (financeData.income_usd).toFixed(2) }}</span>
            <div class="card-panel-text">总的美元收入</div>
          </div>
        </div>
      </el-col>

      <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-description">
            <span class="card-panel-num">{{ financeData.orders_rmb }}</span>
            <div class="card-panel-text">总的人民币订单数</div>
          </div>
        </div>
      </el-col>

      <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-description">
            <span class="card-panel-num">{{ financeData.orders_usd }}</span>
            <div class="card-panel-text">总的美元订单数</div>
          </div>
        </div>
      </el-col>

      <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-description">
            <span class="card-panel-num">{{ financeData.orders_total }}</span>
            <div class="card-panel-text">总订单数</div>
          </div>
        </div>
      </el-col>

      <el-col :xs="24" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-description">
            <span class="card-panel-num">{{ financeData.orders_closed }}</span>
            <div class="card-panel-text">关闭订单数</div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { financeInfo } from '@/api/finance'

export default {
  name: 'Finance',
  data() {
    return {
      loading: false,
      financeData: {}
    }
  },
  mounted() {
    this.getFinanceData()
  },
  methods: {
    getFinanceData() {
      this.loading = true
      financeInfo()
        .then(res => {
          if(res.data) {
            this.financeData = {...res.data}
            this.loading = false
          }
        })
        .catch(err => {
          this.loading = false
          console.log(err)
        })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .panel-group {
    margin-top: 18px;
    .card-panel-col{
      margin-bottom: 20px;
    }
    .card-panel {
      height: 108px;
      font-size: 12px;
      position: relative;
      overflow: hidden;
      color: #666;
      background: #fff;
      box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
      border-color: rgba(0, 0, 0, .05);
      .card-panel-description {
        text-align: right;
        line-height: 42px;
        font-weight: bold;
        margin: 26px;
        margin-left: 0;
        .card-panel-text {
          line-height: 18px;
          color: rgba(0, 0, 0, 0.45);
          font-size: 16px;
        }
        .card-panel-num {
          font-size: 24px;
        }
      }
    }
  }
</style>

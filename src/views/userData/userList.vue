<template>
<div class="app-container">
  <el-row :gutter="20" style="margin-bottom: 20px">
    <el-col :xs="24" :sm="12" :lg="6">
      <el-select v-model="selectValue" @change="selectChange" class="filter-item">
        <el-option
          v-for="item in selectOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-col>
    <el-col :xs="8" :sm="12" :lg="4">
      <el-checkbox v-model="showAdmin" @change="showAdminUser">显示管理员</el-checkbox>
    </el-col>
    <el-col :xs="8" :sm="12" :lg="4">
      <el-checkbox v-model="showWhitelist" @change="showWhitelistUser">白名单用户</el-checkbox>
    </el-col>
    <el-col :xs="8" :sm="12" :lg="4">
      <el-checkbox v-model="showWhitelist" @change="showTrustedUser">Trusted用户</el-checkbox>
    </el-col>
    <el-col :xs="12" :sm="6" :lg="3">
      <el-input
          class="filter-item"
          prefix-icon="el-icon-search"
          placeholder="请输入UID"
          v-model="searchUid"
          @keyup.enter.native="(e) => {uidChange(e.target.value.trim())}"/>
    </el-col>
    <el-col :xs="24" :sm="12" :lg="6">
      <el-input
          class="filter-item"
          prefix-icon="el-icon-search"
          placeholder="请输入邮箱"
          v-model="searchValue"
          @keyup.enter.native="(e) => {keywordsChange(e.target.value.trim())}"/>
    </el-col>
  </el-row>
  <el-table
    :data="tableData"
    v-loading="loading"
    style="width: 100%">
    <el-table-column align="center" prop="uid" width="50" label="ID"></el-table-column>
    <!--<el-table-column align="center" prop="username" label="用户名"></el-table-column>-->
    <el-table-column align="center" prop="email" width="150" label="邮箱">
      <template slot-scope="scope">
        <a @click="copy(scope.row.email, $event)">{{ scope.row.email }}</a>
      </template>
    </el-table-column>
    <el-table-column align="center" prop="reg_date" width="70" label="注册时间"></el-table-column>
<!--    <el-table-column align="center" prop="checkin" label="最近签到时间"></el-table-column>-->
    <el-table-column align="center" prop="domain" label="域名" width="60"></el-table-column>
    <el-table-column align="center" prop="debug" width="60" label="debug">
      <template slot-scope="scope">
        <el-switch slot="reference" :value="scope.row.debug" active-color="#42b983" @change="handleDebugUser(scope.row)"></el-switch>
      </template>
    </el-table-column>
    <el-table-column align="center" prop="whitelist" width="60" label="白名单">
      <template slot-scope="scope">
        <el-switch slot="reference" :value="scope.row.whitelist" active-color="#42b983" @change="handleWhitelistUser(scope.row)"></el-switch>
      </template>
    </el-table-column>
    <el-table-column align="center" prop="trusted" width="60" label="免审核">
      <template slot-scope="scope">
        <el-switch slot="reference" :value="scope.row.trusted" active-color="#42b983" @change="handleTrustUser(scope.row)"></el-switch>
      </template>
    </el-table-column>
    <el-table-column align="center" label="禁用状态" width="60">
      <template slot-scope="scope">
        <el-popover
          trigger="manual"
          placement="top"
          width="160"
          :ref="'popover-' + scope.row.username"
          >
          <p>{{ scope.row.enable ? '确认禁用该用户？' : '取消禁用该用户？' }}</p>
          <div style="text-align: right; margin: 0">
            <el-button type="text" size="mini" @click="pClose(scope.row.username)">{{ $t('common.cancel') }}</el-button>
            <el-button type="primary" size="mini" @click="handleFrozenUser(scope.row)">{{ $t('common.ok') }}</el-button>
          </div>
          <el-switch slot="reference" :value="scope.row.enable===0" active-color="red" @change="pShow(scope.row.username)"></el-switch>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column align="center" width="60" label="管理员权限">
      <template slot-scope="scope">
        <el-popover
          trigger="manual"
          placement="top"
          width="160"
          :ref="'popover-' + scope.row.uid"
          >
          <p>{{ scope.row.admin ? '确认取消该用户的管理员权限吗？' : '确定将该用户设置为管理员吗？' }}</p>
          <div style="text-align: right; margin: 0">
            <el-button type="text" size="mini" @click="pClose(scope.row.uid)">{{ $t('common.cancel') }}</el-button>
            <el-button type="primary" size="mini" @click="handleAdminUser(scope.row)">{{ $t('common.ok') }}</el-button>
          </div>
          <el-switch slot="reference" :value="scope.row.admin" active-color="#42b983" @change="pShow(scope.row.uid)"></el-switch>
        </el-popover>
      </template>
    </el-table-column>

    <el-table-column align="center" label="人民币">
      <template slot-scope="scope">
        <el-row :gutter="4">
          <el-col :span="50">
            <el-input v-model="scope.row.balance_cny" />
          </el-col>
          <el-col :span="8">
            <el-button type="text" size="big" @click="changeBalance(scope.row.balance_cny, 'CNY', scope.row.uid)">修改</el-button>
          </el-col>
        </el-row>
      </template>
    </el-table-column>

    <el-table-column align="center" label="美元">
      <template slot-scope="scope">
        <el-row :gutter="4">
          <el-col :span="50">
            <el-input v-model="scope.row.balance_usd" />
          </el-col>
          <el-col :span="8">
            <el-button type="text" size="big" @click="changeBalance(scope.row.balance_usd, 'USD', scope.row.uid)">修改</el-button>
          </el-col>
        </el-row>
      </template>
    </el-table-column>

    <el-table-column align="center" width="50" label="发票">
      <template slot-scope="scope">
        <el-row :gutter="3">
          <el-col :span="8">
            <el-button type="text" size="big" @click="changeInvoiceIssued(scope.row.invoice_await, scope.row.uid)">修改</el-button>
          </el-col>
        </el-row>
      </template>
    </el-table-column>

    <el-table-column align="center" label="流量更新(TB)">
      <template slot-scope="scope">
        <el-row :gutter="4">
          <el-col :span="50">
            <el-input v-model="scope.row.flow.remain" />
          </el-col>
          <el-col :span="8">
            <el-button type="text" size="big" @click="handleEditRemain(scope.row)">修改</el-button>
          </el-col>
        </el-row>
      </template>
    </el-table-column>

    <el-table-column align="center" label="套餐更新">
      <template slot-scope="scope">
        <el-row :gutter="4">
          <el-col :span="50">
            <el-select v-model="scope.row.flow.product_type" class="filter-item" style="float: left">
              <el-option
                      v-for="item in planSelectOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                      <span style="float: left">{{ item.value }}</span>
                      <span style="float: right; color: #8492a6; font-size: 13px">{{ item.label }}</span>
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="15">
            <el-button type="text" size="big" @click="handleEditPlan(scope.row, true)">修改</el-button>
            <el-button type="text" size="big" @click="handleEditPlan(scope.row)">更新</el-button>
          </el-col>
        </el-row>
      </template>
    </el-table-column>

    <el-table-column align="center" width="60" label="套餐定制">
      <template slot-scope="scope">
        <el-row :gutter="4">
          <el-col :span="50" v-if="scope.row.custom_plan">
            {{ formatCustomPlan(scope.row.custom_plan) }}
          </el-col>
          <el-col :span="8">
            <el-button type="text" size="big" @click="handleCustomPlan(scope.row)">修改</el-button>
          </el-col>
        </el-row>
      </template>
    </el-table-column>

    <el-table-column align="center" width="60" label="邀请人">
      <template slot-scope="scope">
        <el-row :gutter="4">
          <el-col :span="50">
            {{ scope.row.flow.inviter }}
          </el-col>
          <el-col :span="8">
            <el-button type="text" size="big" @click="handleCommission(scope.row.flow)">修改</el-button>
          </el-col>
        </el-row>
      </template>
    </el-table-column>

    <el-table-column label="passwd" align="center" class-name="small-padding fixed-width">
      <template slot-scope="scope">
        <el-button type="primary" size="mini" @click="copy(scope.row.raw_pass, $event)">Copy</el-button>
      </template>
    </el-table-column>

  </el-table>

  <el-dialog title="定制套餐" :visible.sync="dialogVisible" :width="device === 'mobile' ? '90%' : '30%' ">
    <el-form :model="selectedCustomPlan" size="small">
      <el-form-item label="Subject">
        <el-input v-model="selectedCustomPlan.subject" ></el-input>
      </el-form-item>
      <el-form-item label="Type">
        <el-select v-model="selectedCustomPlan.type" class="filter-item" style="float: left">
          <el-option
                  v-for="item in planSelectOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
            <span style="float: left">{{ item.value }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.label }}</span>
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Traffic">
        <el-input-number v-model.number="selectedCustomPlan.traffic" ></el-input-number>   TB
      </el-form-item>
      <el-form-item label="Price">
        <el-input-number v-model.number="selectedCustomPlan.price"></el-input-number>
      </el-form-item>
      <el-form-item label="Currency">
        <el-select v-model="selectedCustomPlan.currency" class="filter-item" style="float: left">
          <el-option
                  v-for="item in currencyOptions"
                  :key="item"
                  :value="item">
            <span style="float: left; color: #8492a6; font-size: 13px">{{ item }}</span>
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="submitResetPlan">重置</el-button>
      <el-button type="primary" @click="submitCustomPlan">确 定</el-button>
    </div>
  </el-dialog>

  <el-dialog title="邀请人" :visible.sync="commissionVisible" :width="device === 'mobile' ? '90%' : '30%' ">
    <el-form :model="selectedInviterInfo" size="small">
      <el-form-item label="email">
        <el-input type="email" v-model="selectedInviterInfo.inviter" ></el-input>
      </el-form-item>
      <el-form-item label="佣金比例">
        <el-input type="number" v-model.number="selectedInviterInfo.rate" ></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="commissionVisible = false">取 消</el-button>
      <el-button type="primary" @click="submitCommission">确 定</el-button>
    </div>
  </el-dialog>

  <div class="pagination-container">
    <el-pagination
      layout="sizes, prev, pager, next"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="tableParam.pageSize"
      :current-page="tableParam.page"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange">
    </el-pagination>
  </div>
</div>
</template>

  <script>
  import { fetchUserList, updateUserPlan, customizeUserPlan } from '@/api/userDomain'
  import { frozenUser, adminUser, whitelistUser, trustUser, debugUser, userTrafficChange, updateBalance, updateCommissionInfo } from '@/api/user'
  import { updateInvoiceIssued } from '@/api/finance'
  import clip from '@/utils/clipboard'
  import moment from 'moment'
  import { MessageBox } from 'element-ui'
  import { trim } from '@/utils'
  import { mapGetters } from 'vuex'
  import { validateEmail } from '@/utils/validate'

  export default {
    data() {
      return {
        loading: false,
        dialogVisible: false,
        commissionVisible: false,
        selectedCustomPlan: {
            uid: 0,
            subject: 'VIP Plan',
            type: 0,
            traffic: 0,
            price: 0,
            currency: 'USD',
        },
        selectedInviterInfo: {
          inviter: '',
          rate: 0,
        },
        tableData: [],
        tableParam: {
          page: 1,
          pageSize: 10
        },
        showAdmin: false,
        showWhitelist: false,
        searchValue: '',
        searchUid: '',
        selectValue: 'updated_at',
        selectOptions: [
          {
            label: '更新时间',
            value: 'updated_at'
          },
          {
            label: '邮箱',
            value: 'email'
          },
          {
            label: '用户名',
            value: 'username'
          },
          {
            label: '注册时间',
            value: 'reg_date'
          },
          {
            label: '域名',
            value: 'domain'
          },
          {
            label: '禁用状态',
            value: 'enable'
          }
        ],
        planSelectOptions:[
            {
                value: '0',
                label: "flow_packet",
            },
            {
              value: '99',
              label: "monthly_custom",
            },
            {
                value: '7',
                label: "monthly_1TB",
            },
            {
                value: '9',
                label: "monthly_5TB",
            },
            {
                value: '1',
                label: "monthly_10TB",
            },
            {
                value: '2',
                label: "monthly_20TB",
            },
            {
                value: '12',
                label: "monthly_25TB",
            },
            {
                value: '10',
                label: "monthly_50TB",
            },
            {
                value: '11',
                label: "monthly_100TB",
            },
            {
                value: '3',
                label: "monthly_unlimited",
            },
            {
                value: '8',
                label: "annual_1TB",
            },
            {
                value: '4',
                label: "annual_10TB",
            },
            {
                value: '5',
                label: "annual_20TB",
            },
            {
                value: '6',
                label: "annual_unlimited",
            },
            {
                value: '13',
                label: "monthly_250TB",
            },
            {
              value: '14',
              label: "annual_5TB",
            },
            {
              value: '15',
              label: "monthly_2TB",
            },
            {
              value: '16',
              label: "monthly_500TB",
            },
            {
              value: '17',
              label: "monthly_1000TB",
            },
            {
              value: '18',
              label: "monthly_500GB",
            },
        ],
        currencyOptions:[
            "USD",
            "CNY",
        ],
      }
    },
    mounted() {
      this.resetFilters()
      const email = this.$route.query.email
      const uid = this.$route.query.uid
      if (email) {
        this.searchValue = email
        this.keywordsChange(email)
      } else if (uid) {
        this.searchUid = uid
        this.uidChange(uid)
      } else {
        this.fetchTableData()
      }
    },
    computed: {
        ...mapGetters([
            'device'
        ])
    },
    methods: {
      changeInvoiceIssued(value, uid) {
        this.$messageBox.prompt('', '已开金额', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          // inputPattern: /^[1-9]\d*$/,
        }).then(({ value }) => {
          updateInvoiceIssued({
            uid,
            value: Number(value)
          }).then(res => {
            if(res.ret === 0) {
              this.$message({
                type: 'success',
                message: '操作成功'
              })
              this.fetchTableData()
            }
          })
        })
      },
      pShow(id) {
        this.$refs[`popover-` + id].doShow()
      },
      pClose(id) {
        this.$refs[`popover-` + id].doClose()
      },
      changeBalance(value, currency, uid) {
        MessageBox.confirm(`更新${currency}至${value}吗？`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          updateBalance({uid, balance: Number(value), currency}).then(res => {
            if(res.ret === 0) {
              this.$message({
                type: 'success',
                message: '操作成功'
              })
              this.fetchTableData()
            }
          })
        })
      },
      handleEditRemain(item) {
         MessageBox.confirm(`更新流量至${item.flow.remain}TB吗？`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          this.flowSubmit(item)
        })
      },
      flowSubmit(item) {
        const data = {
          uid: item.uid,
          remain_traffic: Math.floor(item.flow.remain * 1024 * 1024 * 1024)
        }
        userTrafficChange(data).then(res => {
          if(res.ret === 0) {
            this.$message({
              type: 'success',
              message: '操作成功'
            })
            this.fetchTableData()
          }
        })
      },
      showAdminUser(value) {
        console.warn(value)
        this.loading = true
        this.filters.forEach(item => {
          if(item.name === 'admin')
            item.value = value
        })
        this.fetchTableData()
      },
      showWhitelistUser(value) {
        this.loading = true
        this.filters.forEach(item => {
          if(item.name === 'whitelist')
            item.value = value
        })
        this.fetchTableData()
      },
      showTrustedUser(value) {
        this.loading = true
        this.filters.forEach(item => {
          if(item.name === 'trusted')
            item.value = value
        })
        this.fetchTableData()
      },
      uidChange(uid) {
        if (!isNaN(Number(uid))) {
          this.filters.forEach(item => {
            if(item.name === 'uid')
              item.value = uid
          })
        }
        this.fetchTableData()
      },
      keywordsChange(email) {
        this.filters.forEach(item => {
          if(item.name === 'keywords')
            item.value = email || false
        })
        this.fetchTableData()
      },
      formatData(data) {
        const temp = [...data]
        temp.forEach(item => {
          item.reg_date = moment(item.reg_date * 1000).format('YYYY-MM-DD HH:mm')
          item.checkin = moment(item.checkin).format('YYYY-MM-DD HH:mm')
          item.flow.remain = (item.flow.remain / 1024 / 1024 / 1024).toFixed(3)
        })
        return temp
      },
      fetchTableData(page=this.tableParam.page, pageSize=this.tableParam.pageSize, order=this.selectValue, filters=this.filters) {
        this.loading = true
        fetchUserList(page, pageSize, order, filters).then(res => {
          if(res.data) {
            this.tableData = this.formatData(res.data)
          }
          this.loading = false
        }).catch(err => {
          this.tableData = []
          this.loading = false
          console.log(err)
        })
      },
      handleFrozenUser(user) {
        const data = {
          uid: user.uid,
          frozen: user.enable ? true : false
        }
        this.loading = true
        frozenUser(data)
          .then(res => {
            this.pClose(user.username)
            this.loading = false
            this.$message({
              type: 'success',
              message: '操作成功'
            })
            this.tableData.forEach(item => {
              if(item.uid === data.uid)
                item.enable = data.frozen ? 0 : 1
            })
          })
          .catch(err => {
            this.loading = false
            console.log(err)
          })
      },
      handleAdminUser(user) {
        this.loading = true
        adminUser({
          uid: user.uid,
          admin: !user.admin
        })
          .then(res => {
            this.pClose(user.uid)
            this.loading = false
            this.$message({
              type: 'success',
              message: '操作成功'
            })
            this.tableData.forEach(item => {
              if(item.uid === user.uid)
                item.admin = !item.admin
            })
          })
          .catch(err => {
            this.loading = false
            console.log(err)
          })
      },
      handleDebugUser(user) {
        this.loading = true
        debugUser({
          uid: user.uid,
          debug: !user.debug
        })
            .then(res => {
              this.loading = false
              this.$message({
                type: 'success',
                message: '操作成功'
              })
              this.tableData.forEach(item => {
                if(item.uid === user.uid)
                  item.debug = !item.debug
              })
            })
            .catch(err => {
              this.loading = false
              console.log(err)
            })
      },
      handleWhitelistUser(user) {
          this.loading = true
          whitelistUser({
              uid: user.uid,
              whitelist: !user.whitelist
          })
              .then(res => {
                  this.loading = false
                  this.$message({
                      type: 'success',
                      message: '操作成功'
                  })
                  this.tableData.forEach(item => {
                      if(item.uid === user.uid)
                          item.whitelist = !item.whitelist
                  })
              })
              .catch(err => {
                  this.loading = false
                  console.log(err)
              })
      },
      handleTrustUser(user) {
        this.loading = true
        trustUser({
          uid: user.uid,
          trusted: !user.trusted
        })
            .then(res => {
              this.loading = false
              this.$message({
                type: 'success',
                message: '操作成功'
              })
              this.tableData.forEach(item => {
                if(item.uid === user.uid)
                  item.trusted = !item.trusted
              })
            })
            .catch(err => {
              this.loading = false
              console.log(err)
            })
      },
      handleSizeChange(pageSize) {
        this.tableParam.pageSize = pageSize
        this.fetchTableData()
      },
      handleCurrentChange(page) {
        this.tableParam.page = page
        this.fetchTableData()
      },
      selectChange() {
        this.fetchTableData()
      },
      copy(pw, event) {
          clip(pw, event)
      },
      handleEditPlan(item, keepDueTime) {
          const type = this.getPlanLabel(item.flow.product_type)
          if (!type) return
          MessageBox.confirm(`${keepDueTime?'修改':'更新'}套餐至${type}吗？`, '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning',
              center: true
          }).then(() => {
              const data = {
                  uid: item.uid,
                  product_type: Number(item.flow.product_type),
                  keep_due_time: keepDueTime
              }
              updateUserPlan(data).then(res => {
                  if(res.ret === 0) {
                      this.$message({
                          type: 'success',
                          message: '操作成功'
                      })
                      this.fetchTableData()
                  }
              })
          })
      },
      handleCommission(item) {
        this.selectedInviterInfo = {
          uid: item.uid,
          inviter: item.inviter,
          rate: item.commission_rate,
        }
        this.commissionVisible = true
      },
      submitCommission() {
        if (!validateEmail(this.selectedInviterInfo.inviter) || this.selectedInviterInfo.rate >= 1) {
          this.$message({
            type: 'error',
            message: '格式错误'
          })
          return
        }
        updateCommissionInfo(this.selectedInviterInfo).then(res => {
          if(res.ret === 0) {
            this.$message({
              type: 'success',
              message: '操作成功'
            })
            this.fetchTableData()
          }
          this.commissionVisible = false
        })
      },
      handleCustomPlan(item) {
          if (item.custom_plan) {
              this.selectedCustomPlan = JSON.parse(item.custom_plan)
          }
          this.selectedCustomPlan.uid = item.uid
          this.dialogVisible = true
      },
      submitCustomPlan() {
          MessageBox.confirm(`确定更新吗？`, '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning',
              center: true
          }).then(() => {
              this.selectedCustomPlan.type = Number(this.selectedCustomPlan.type)
              customizeUserPlan(this.selectedCustomPlan).then(res => {
                  if(res.ret === 0) {
                      this.$message({
                          type: 'success',
                          message: '操作成功'
                      })
                      this.fetchTableData()
                  }
                  this.dialogVisible = false
              })
          })
      },
      submitResetPlan() {
          MessageBox.confirm(`确定重置吗？`, '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning',
              center: true
          }).then(() => {
              this.selectedCustomPlan.type = -1
              customizeUserPlan(this.selectedCustomPlan).then(res => {
                  if(res.ret === 0) {
                      this.$message({
                          type: 'success',
                          message: '操作成功'
                      })
                      this.fetchTableData()
                  }
                  this.dialogVisible = false
              })
          })
      },
      getPlanLabel(type) {
          for (let plan of this.planSelectOptions) {
              if (type === plan.value) {

                  return plan.label
              }
          }
          return undefined
      },
      formatCustomPlan(plan) {
          const json = JSON.parse(plan)
          return `
          ${json.subject}  类型: ${json.type}  流量: ${json.traffic}TB  价格: ${json.price}  币种: ${json.currency}
          `
      },
      resetFilters() {
        this.filters = [
          {
            name: 'whitelist',
            value: false
          },
          {
            name: 'frozen',
            value: false
          },
          {
            name: 'admin',
            value: false
          },
          {
            name: 'trusted',
            value: false
          },
          {
            name: 'keywords',
            value: false
          },
          {
            name: 'uid',
            value: false
          },
        ]
      }
    },
  }
  </script>

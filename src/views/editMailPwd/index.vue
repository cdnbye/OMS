<template>
  <div class="edit-container">
      <el-card>

        <p>
          <span>{{$t('myInfo.name')}}{{ userInfo.name }}</span>&nbsp;
          <el-button type="text" @click="nameDialogVisible = true">{{$t('myInfo.change')}}</el-button>
          <el-dialog
              :title="$t('myInfo.changeName.change')"
              :visible.sync="nameDialogVisible"
              :width="device==='mobile'?'80%':'30%'">
            <el-form ref="nameForm" :model="nameForm" :rules="nameRules">
              <el-form-item prop="name">
                <el-input :placeholder="$t('myInfo.changeName.newName')" v-model="nameForm.name"></el-input>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="nameDialogVisible = false">{{$t('common.cancel')}}</el-button>
              <el-button type="primary" @click="changeUserName" :loading="confirmButtonLoading">{{$t('common.ok')}}</el-button>
            </span>
          </el-dialog>
        </p>

        <p>
          <span>{{$t('myInfo.mail')}}{{userInfo.email}}</span>&nbsp;
          <el-button type="text" @click="mailDialogVisible = true">{{$t('myInfo.change')}}</el-button>
        </p>
        <el-dialog
          :title="$t('myInfo.changeMail.change')"
          :visible.sync="mailDialogVisible"
          :width="device==='mobile'?'80%':'30%'">
          <el-form ref="emailForm" :model="emailForm" :rules="emailRules">
              <el-form-item prop="email">
                  <el-input :placeholder="$t('myInfo.changeMail.newMail')" v-model="emailForm.email"></el-input>
              </el-form-item>
              <el-row :gutter="20">
                <el-col :span="14">
                  <el-form-item prop="vcode">
                    <el-input :placeholder="$t('myInfo.changeMail.code')" v-model.number="emailForm.vcode"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="10">
                  <el-form-item>
                    <el-button type="primary" @click="SendEmailVCode()" :disabled="sendButton.disabled" :loading="sendButton.loading">{{sendButton.value}}</el-button>
                  </el-form-item>
                </el-col>
              </el-row>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="mailDialogVisible = false">{{$t('common.cancel')}}</el-button>
            <el-button type="primary" @click="changeEmail" :loading="confirmButtonLoading">{{$t('common.ok')}}</el-button>
          </span>
        </el-dialog>

        <p>
          <span>{{$t('myInfo.passwd')}}********</span>&nbsp;
          <el-button type="text" @click="passwdDialogVisible = true">{{$t('myInfo.change')}}</el-button>
          <el-dialog
          :title="$t('myInfo.changePasswd.change')"
          :visible.sync="passwdDialogVisible"
          :width="device==='mobile'?'80%':'30%'">
            <el-form ref="passwdForm" :model="passwdForm" :rules="passwdRules">
              <el-form-item prop="passwd">
                  <el-input :placeholder="$t('myInfo.changePasswd.old')" v-model="passwdForm.passwd" type="password"></el-input>
              </el-form-item>
              <el-form-item prop="newpasswd">
                <el-input :placeholder="$t('myInfo.changePasswd.new')" v-model="passwdForm.newpasswd" type="password"></el-input>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="passwdDialogVisible = false">{{$t('common.cancel')}}</el-button>
              <el-button type="primary" @click="changePasswd" :loading="confirmButtonLoading">{{$t('common.ok')}}</el-button>
            </span>
          </el-dialog>
        </p>

        <div style="margin-top: 25px"></div>
        <p>
          <span>{{$t('myInfo.mobile')}}:</span>&nbsp
          <span v-show="userInfo.mobile">+{{userInfo.ncode}}{{userInfo.mobile}}</span>&nbsp;
          <el-button type="text" @click="mobileDialogVisible = true">
            {{userInfo.mobile ? $t('myInfo.change') : $t('myInfo.mobileBonus')}}
          </el-button>
        </p>
        <el-dialog
            :title="$t('myInfo.changeMobile.change')"
            :visible.sync="mobileDialogVisible"
            :width="device==='mobile'?'80%':'30%'">
          <el-form ref="mobileForm" :model="mobileForm" :rules="mobileRules">
            <el-row :gutter="0">
              <el-col :span="6">
                <el-form-item prop="ncode">
                  <el-input :placeholder="$t('myInfo.changeMobile.cc')" v-model="mobileForm.ncode"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="15">
                <el-form-item prop="mobile">
                  <el-input :placeholder="$t('myInfo.changeMobile.number')" v-model="mobileForm.mobile"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20" style="margin-top: 10px">
              <el-col :span="14">
                <el-form-item prop="vcode">
                  <el-input :placeholder="$t('myInfo.changeMail.code')" v-model.number="mobileForm.vcode"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item>
                  <el-button type="primary" @click="sendMobileVCode()" :disabled="sendButton.disabled" :loading="sendButton.loading">{{sendButton.value}}</el-button>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <h3>{{ mobileNumber }}</h3>
            </el-row>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="mobileDialogVisible = false">{{$t('common.cancel')}}</el-button>
            <el-button type="primary" @click="changeMobile" :loading="confirmButtonLoading">{{$t('common.ok')}}</el-button>
          </span>
        </el-dialog>

        <div style="margin-top: 25px"></div>
        <p>
          <span>{{$t('myInfo.time')}}{{userInfo.time}}</span>
        </p>
        <div style="margin-top: 30px"></div>
        <p>
          <span>Token: {{userInfo.token}}</span>
        </p>
        <div style="margin-top: 25px"></div>
        <p>
          <span>{{$t('myInfo.timeZone')}}: UTC{{userInfo.utc>=0 ? '+' :''}}{{userInfo.utc}}</span>
        </p>
        <div style="margin-top: 25px"></div>
        <p>
          <span>{{$t('myInfo.balanceUSD')}}: {{ userInfo.balanceUSD }} </span>
          <el-button type="text" @click="recharge('USD')">{{$t('myInfo.recharge')}}</el-button>
        </p>
        <div style="margin-top: 25px"></div>
        <p>
          <span>{{$t('myInfo.balanceCNY')}}: {{ userInfo.balanceCNY }} </span>
          <el-button type="text" @click="recharge('CNY')">{{$t('myInfo.recharge')}}</el-button>
        </p>
      </el-card>
  </div>
</template>

<script>
import moment from 'moment'
import { mapGetters } from 'vuex'
import { fetchUserData, changeUserName, changePasswd, changeMail, changeMobile } from '@/api/user'
import { createOrder } from '@/api/user/package'
import { sendCode } from '@/api/auth'
import { setSha256 } from '@/utils/format'
import { getID } from '@/utils/auth'
import { validatePhone } from '@/utils/validate'

export default {
  name: 'Edit',
  data() {
    const checkPasswd = (rule, value, callback) => {
      if(!value) {
        callback(this.$t('myInfo.changePasswd.noneError'))
      } else {
        if (value.indexOf(' ') > -1) {
          callback(this.$t('myInfo.changePasswd.blankError'))
        } else {
          if(value.length <6 || value.length > 12) {
            callback(this.$t('myInfo.changePasswd.lengthError'))
          } else {
            callback()
          }
        }
      }
    }
    return {
      nameRules: {
        name: [
          {
            required: true,
            message: this.$t('myInfo.changeName.noneError'),
            trigger: 'blur'
          },
        ]
      },
      emailRules: {
        email: [
          {
            required: true,
            message: this.$t('myInfo.changeMail.noneError'),
            trigger: 'blur'
          },
          {
            type: 'email',
            message: this.$t('myInfo.changeMail.wrongError'),
            trigger: "blur",
          },
        ],
        vcode: [
          {
            required: true,
            message: this.$t('myInfo.changeMail.codeNoneError'),
            trigger: 'blur'
          },
          {
            type: 'number',
            message: this.$t('myInfo.changeMail.codeWrongError'),
            trigger: "blur",
          },
        ]
      },
      mobileRules: {
        ncode: [
          {
            required: true,
            message: this.$t('myInfo.changeMobile.wrongCCError'),
            trigger: 'blur'
          },
        ],
        mobile: [
          {
            required: true,
            message: this.$t('myInfo.changeMobile.number'),
            trigger: 'blur'
          },
        ],
        vcode: [
          {
            required: true,
            message: this.$t('myInfo.changeMail.codeNoneError'),
            trigger: 'blur'
          },
          {
            type: 'number',
            message: this.$t('myInfo.changeMail.codeWrongError'),
            trigger: "blur",
          },
        ]
      },
      passwdRules: {
        passwd: [
          {
            validator: checkPasswd
          },
        ],
        newpasswd: [
          {
            validator: checkPasswd
          }
        ]
      },

      mailDialogVisible: false,
      mobileDialogVisible: false,
      passwdDialogVisible: false,
      nameDialogVisible: false,
      confirmButtonLoading: false,
      userInfo: {
        name: '',
        time: '',
        email: '',
        token: '',
        utc: 0,
        mobile: '',
        ncode: 0,
        balanceUSD: 0.0,
        balanceCNY: 0.0,
      },
      emailForm: {
        email: '',
        vcode: ''
      },
      mobileForm: {
        mobile: '',
        ncode: undefined,
        vcode: ''
      },
      passwdForm: {
        passwd: '',
        newpasswd: ''
      },
      nameForm: {
        name: '',
      },
      sendButton: {
      value: 'Send',
      disabled: false,
      loading: false,
      },
    };
  },
  computed: {
    ...mapGetters([
      'device'
    ]),
    mobileNumber() {
      if (!this.mobileForm.ncode && !this.mobileForm.mobile) return ""
      return `+${this.mobileForm.ncode}${this.mobileForm.mobile}`
    }
  },
  mounted() {
    this.getUserData()
  },
  methods: {
    recharge(currency) {
      this.$messageBox.prompt(this.$t('myInfo.rechargeTip'), this.$t('myInfo.recharge'), {
        confirmButtonText: this.$t('common.ok'),
        cancelButtonText: this.$t('common.cancel'),
        inputPattern: /^[1-9][0-9]+$/,
      }).then(({ value }) => {
        const price = Number(value)
        const isCNY = currency === 'CNY'
        const subject = isCNY ? '充值人民幣' : 'Recharge USD'
        const data = {
          price,
          currency,
          goods: [{
            subject,
            amount: 1,
            price,
          }],
          goods_type: isCNY ? 'recharge_cny' : 'recharge_usd',
        }
        createOrder(getID(), data)
        .then(res => {
          this.$router.push({
            name: 'OrderDetail',
            query: {
              currency: currency,
              orderID: res.data.order_id,
              totalPrice: price,
              buyData: JSON.stringify(data.goods)
            }
          })
        })
        .catch(err => {
          console.log(err)
        })
      })
    },
    getUserData() {
      fetchUserData().then(res => {
        if(res.data) {
          const { data } = res
          this.userInfo.time = moment(data.reg_date * 1000).format('YYYY-MM-DD hh:mm:ss')
          this.userInfo.email = data.email
          this.userInfo.mobile = data.mobile
          this.userInfo.ncode = data.ncode
          this.userInfo.token = data.token
          this.userInfo.utc = data.utc
          this.userInfo.name = data.name
          this.userInfo.balanceCNY = data.balance_cny
          this.userInfo.balanceUSD = data.balance_usd
        }
      }).catch(err => {
        console.log(err)
      })
    },
    sendMobileVCode() {
      const { mobile, ncode } = this.mobileForm
      const email = this.userInfo.email
      if (mobile && ncode !== 0) {
        const data = {
          email,
          mobile,
          ncode: Number(ncode),
          action: 'mobile_update'
        }
        this.sendVCode(data)
      } else {
        this.$message.error(this.$t('myInfo.changeMobile.someError'))
      }
    },
    SendEmailVCode() {
      const email = this.emailForm.email
      if(email) {
        if(email === this.userInfo.email) {
          this.$message.error(this.$t('myInfo.changeMail.sameError'))
        } else {
          const data = {
            email,
            action: 'email_update'
          }
          this.sendVCode(data)
        }
      } else {
        this.$message.error(this.$t('myInfo.changeMail.noneError'))
      }
    },
    sendVCode(data) {
      this.sendButton.loading = true
      sendCode(data).then(() => {
        this.sendButton.loading = false
        this.$message({
          message: data.mobile ? this.$t('myInfo.vcodeMobileSuccess') : this.$t('myInfo.vcodeEmailSuccess'),
          type: 'success'
        })
        let timer = 300
        this.sendButton.disabled = true
        let id = setInterval(() => {
          this.sendButton.value = timer
          if (!this.sendButton.disabled) {
            clearInterval(id)
            this.sendButton.value = 'Send'
            return
          }
          timer --
          if(timer <= 0) {
            this.sendButton.disabled = false
            this.sendButton.value = 'Send'
          }
        }, 1000)
      }).catch(err => {
        this.sendButton.loading = false
        console.log(err)
      })
    },
    changeUserName() {
      this.$refs.nameForm.validate(valid => {
        if(valid) {
          const { name } = this.nameForm
          const data = {
            name,
          }
          this.confirmButtonLoading = true
          changeUserName(data).then(() => {
            this.confirmButtonLoading = false
            this.$message({
              message: this.$t('common.success'),
              type: 'success'
            })
            this.nameDialogVisible = false
            this.nameForm.name = ''
            this.userInfo.name = name
            this.$store.dispatch('getProfile')
          }).catch(err => {
            this.confirmButtonLoading = false
            console.log(err)
          })
        } else {
          return false
        }
      })
    },
    changeMobile() {
      this.$refs.mobileForm.validate(valid => {
        if(valid) {
          this.confirmButtonLoading = true
          const { mobile, ncode, vcode } = this.mobileForm
          if (!validatePhone(mobile) || !validatePhone(ncode)) {
            this.confirmButtonLoading = false
            this.$message.error(this.$t('myInfo.changeMobile.someError'))
            return false
          }
          if(mobile === this.userInfo.mobile) {
            this.$message.error(this.$t('myInfo.changeMobile.sameError'))
            this.confirmButtonLoading = false
            return false
          }
          const data = {
            mobile,
            ncode: Number(ncode),
            vcode: vcode.toString()
          }
          changeMobile(data).then(() => {
            this.confirmButtonLoading = false
            this.$message({
              message: this.$t('common.success'),
              type: 'success'
            })
            this.$store.dispatch('getProfile').then(() => {
              this.getUserData()
            })
            this.mobileDialogVisible = false
            this.mobileForm.mobile = ''
            this.mobileForm.ncode = 0
            this.mobileForm.vcode = ''
          }).catch(err => {
            this.confirmButtonLoading = false
            console.log(err)
          }).finally(() => {
            this.sendButton.disabled = false
          })
        } else {
          return false
        }
      })
    },
    changeEmail() {
      this.$refs.emailForm.validate(valid => {
        if(valid) {
          this.confirmButtonLoading = true
          const { email, vcode } = this.emailForm
          const data = {
            email,
            vcode: vcode.toString()
          }
          changeMail(data).then(() => {
            this.confirmButtonLoading = false
            this.$message({
              message: this.$t('common.success'),
              type: 'success'
            })
            this.userInfo.email = email
            this.mailDialogVisible = false
            this.emailForm.email = ''
            this.emailForm.vcode = ''
          }).catch(err => {
            this.confirmButtonLoading = false
            console.log(err)
          }).finally(() => {
            this.sendButton.disabled = false
          })
        } else {
          return false
        }
      })
    },
    changePasswd() {
      this.$refs.passwdForm.validate(valid => {
        if(valid) {
          const data = {
            passwd: setSha256(this.passwdForm.passwd),
            newpasswd: this.passwdForm.newpasswd
          }
          this.confirmButtonLoading = true
          changePasswd(data).then(() => {
            this.confirmButtonLoading = false
            this.$message({
              message: this.$t('common.success'),
              type: 'success'
            })
            this.passwdDialogVisible = false
            this.passwdForm.passwd = ''
            this.passwdForm.newpasswd = ''
          }).catch(err => {
            this.confirmButtonLoading = false
            console.log(err)
          })
        } else {
          return false
        }
      })
    },
  }
}
</script>

<style>
  .edit-container {
    text-align: left;
    padding: 16px 32px;
    background-color: #f0f2f5;
    height: calc(100vh - 84px);
  }
</style>

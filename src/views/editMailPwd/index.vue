<template>
  <div class="edit-container">
      <el-card>
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
                    <el-button type="primary" @click="SendMsg('emailForm')" :disabled="sendButton.enable" :loading="sendButton.loading">{{sendButton.value}}</el-button>
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
                <el-input :placeholder="$t('myInfo.changePasswd.new')" v-model="passwdForm.newpasswd"></el-input>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="passwdDialogVisible = false">{{$t('common.cancel')}}</el-button>
              <el-button type="primary" @click="changePasswd" :loading="confirmButtonLoading">{{$t('common.ok')}}</el-button>
            </span>
          </el-dialog>
        </p>
        <p>
          <span>{{$t('myInfo.time')}}{{userInfo.time}}</span>
        </p>
        <div style="margin-top: 25px"></div>
        <p>
          <span>Token: {{userInfo.token}}</span>
        </p>
      </el-card>
  </div>
</template>

<script>
import moment from 'moment'
import { mapGetters } from 'vuex'
import { fetchUserData, changePasswd, changeMail } from '@/api/user'
import { sendCode } from '@/api/auth'
import { setSha256 } from '@/utils/format'

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
      passwdDialogVisible: false,
      confirmButtonLoading: false,
      userInfo: {
        time: '',
        email: '',
        token: '',
      },
      emailForm: {
        email: '',
        vcode: ''
      },
      passwdForm: {
        passwd: '',
        newpasswd: ''
      },
      sendButton: {
      value: 'Send',
      enable: false,
      loading: false,
      },
    };
  },
  computed: {
    ...mapGetters([
      'device'
    ])
  },
  mounted() {
    this.getUserData()
  },
  methods: {
    getUserData() {
      fetchUserData().then(res => {
        if(res.data) {
          const { data } = res
          this.userInfo.time = moment(data.reg_date * 1000).format('YYYY-MM-DD hh:mm:ss')
          this.userInfo.email = data.email
          this.userInfo.token = data.token
        }
      }).catch(err => {
        console.log(err)
      })
    },
    SendMsg() {
      const email = this.emailForm.email
      if(email) {
        if(email === this.userInfo.email) {
          this.$message.error(this.$t('myInfo.changeMail.sameError'))
        } else {
          this.sendButton.loading = true
          const data = {
            email,
            action: 'email_update'
          }
          sendCode(data).then(res => {
            this.sendButton.loading = false
            this.$message({
              message: '验证码已成功发送至您的邮箱',
              type: 'success'
            })
            let timer = 120
            setInterval(() => {
              this.sendButton.value = timer
              this.sendButton.enable = true
              timer --
              if(timer <= 0) {
              this.sendButton.enable = false
                this.sendButton.value = 'Send'
              }
            }, 1000)
          }).catch(err => {
            this.sendButton.loading = false
            console.log(err)
          })
        }
      } else {
        this.$message.error(this.$t('myInfo.changeMail.noneError'))
      }
    },
    changeEmail() {
      this.$refs.emailForm.validate(valid => {
        if(valid) {
          this.confirmButtonLoading = true
          const data = {
            email: this.emailForm.email,
            vcode: this.emailForm.vcode.toString()
          }
          changeMail(data).then(res => {
            this.confirmButtonLoading = false
            this.$message({
              message: '修改邮箱成功',
              type: 'success'
            })
            this.userInfo.email = res.data.email
            this.mailDialogVisible = false
            this.resetForm('mailForm')
          }).catch(err => {
            this.confirmButtonLoading = false
            console.log(err)
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
          changePasswd(data).then(res => {
            this.confirmButtonLoading = false
            this.$message({
              message: '修改密码成功',
              type: 'success'
            })
            this.passwdDialogVisible = false
            this.resetForm('passwdForm')
          }).catch(err => {
            this.confirmButtonLoading = false
            console.log(err)
          })
        } else {
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
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

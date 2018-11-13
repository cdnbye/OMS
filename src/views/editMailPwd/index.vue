<template>
  <div class="edit-container">
    <el-row>
      <el-col :span="12" style="margin: 0 auto">
      <el-card>
        <p>
          <span>邮箱：{{userInfo.email}}</span>&nbsp;
          <el-button type="text" @click="mailDialogVisible = true">修改</el-button>
        </p>
        <el-dialog
          title="修改邮箱"
          :visible.sync="mailDialogVisible"
          width="30%">
          <el-form ref="emailForm" :model="emailForm" :rules="emailRules">
              <el-form-item prop="email">
                  <el-input placeholder="新邮箱" v-model="emailForm.email"></el-input>
              </el-form-item>
              <el-row :gutter="20">
                <el-col :span="14">
                  <el-form-item prop="vcode">
                    <el-input placeholder="验证码" v-model.number="emailForm.vcode"></el-input>
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
            <el-button @click="mailDialogVisible = false">取消</el-button>
            <el-button type="primary" @click="changeEmail" :loading="confirmButtonLoading">确定</el-button>
          </span>
        </el-dialog>
        
        <p>
          <span>密码：********</span>&nbsp;
          <el-button type="text" @click="passwdDialogVisible = true">修改</el-button>
          <el-dialog
          title="修改密码"
          :visible.sync="passwdDialogVisible"
          width="30%">
            <el-form ref="passwdForm" :model="passwdForm" :rules="passwdRules">
              <el-form-item prop="passwd">
                  <el-input placeholder="老密码" v-model="passwdForm.passwd" type="password"></el-input>
              </el-form-item>
              <el-form-item prop="newpasswd">
                <el-input placeholder="新密码" v-model="passwdForm.newpasswd"></el-input>
              </el-form-item>
            </el-form>            
            <span slot="footer" class="dialog-footer">
              <el-button @click="passwdDialogVisible = false">取消</el-button>
              <el-button type="primary" @click="changePasswd" :loading="confirmButtonLoading">确定</el-button>
            </span>
          </el-dialog>
        </p>
        <p>
          <span>注册时间：{{userInfo.time}}</span>
        </p>
      </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import moment from 'moment'
import { fetchUserData, changePasswd, changeMail } from '@/api/user'
import { sendCode } from '@/api/auth'
import { setSha256 } from '@/utils/format'

export default {
  name: 'Edit',
  data() {
    const checkPasswd = (rule, value, callback) => {
      if(!value) {
        callback('请输入密码')
      } else {
        if (value.indexOf(' ') > -1) {
          callback('密码不允许包含空格')
        } else {
          if(value.length <6 || value.length > 12) {
            callback('请输入6到12位的密码')
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
            message: '请输入邮箱',
            trigger: 'blur'
          },
          {
            type: 'email',
            message: '请输入正确的邮箱',
            trigger: "blur",
          },
        ],
        vcode: [
          {
            required: true,
            message: '请输入验证码',
            trigger: 'blur'
          },
          {
            type: 'number',
            message: '请输入正确的验证码',
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
        email: ''
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
      value: '发送验证码',
      enable: false,
      loading: false,
      },
    };
  },
  mounted() {
    this.getUserData()
  },
  methods: {
    getUserData() {
      fetchUserData().then(res => {
        if(res.data) {
          this.userInfo.time = moment(res.data.reg_date * 1000).format('YYYY-MM-DD hh:mm:ss')
          this.userInfo.email = res.data.email
        }
      }).catch(err => {
        console.log(err)
      })
    },
    SendMsg() {
      const email = this.emailForm.email
      if(email) {
        if(email === this.userInfo.email) {
          this.$message.error('请不要输入相同的邮箱')
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
                this.sendButton.value = '发送验证码'
              }
            }, 1000)
          }).catch(err => {
            this.sendButton.loading = false
            console.log(err)
          })
        }
      } else {
        this.$message.error('请先输入邮箱')
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
    padding: 16px 32px; 
    background-color: #f0f2f5;
    height: calc(100vh - 84px);
  }
</style>

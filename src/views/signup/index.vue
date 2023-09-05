<template>
  <div class="login-container">
    <el-form ref="signupForm" :model="signupForm" :rules="signupRules" class="login-form" auto-complete="on" label-position="left">
      <div class="title-container">
        <h3 class="title">{{ $t('signup.title') }}</h3>
        <lang-select class="set-language"/>
        <select-zone class="console"></select-zone>
      </div>
      <el-form-item prop="email">
        <span class="svg-container svg-container_login">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          v-model="signupForm.email"
          :placeholder="$t('signup.email')"
          name="email"
          type="text"
          auto-complete="on"
          @keyup.enter.native="onSendCode" />
      </el-form-item>

      <el-button id="sendButton" :loading="sendLoading" :disabled="sendDisabled" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="onSendCode">{{ $t('signup.send') }}</el-button>

      <el-form-item prop="vcode">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          v-model="signupForm.vcode"
          :placeholder="$t('signup.vcode')"
          name="vcode"
          auto-complete="on" />
      </el-form-item>

      <el-form-item prop="passwd">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          :type="passwordType"
          v-model="signupForm.passwd"
          :placeholder="$t('login.password')"
          name="passwd"
          auto-complete="on"
          @keyup.enter.native="handleSignup" />
        <span class="show-pwd" @click="showPwd">
          <svg-icon icon-class="eye" />
        </span>
      </el-form-item>

      <el-form-item prop="confirm_passwd">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          :type="passwordType"
          v-model="signupForm.confirm_passwd"
          :placeholder="$t('signup.confirm_password')"
          name="confirm_passwd"
          auto-complete="on"
          @keyup.enter.native="handleSignup" />
        <span class="show-pwd" @click="showPwd">
          <svg-icon icon-class="eye" />
        </span>
      </el-form-item>

      <el-form-item prop="inviter" v-show="showInviter">
        <span class="svg-container">
          <svg-icon icon-class="invitation" />
        </span>
        <el-input
            type="text"
            v-model="signupForm.inviter"
            :placeholder="$t('signup.inviter')"
            name="inviter"
            @keyup.enter.native="handleSignup" />
      </el-form-item>

      <el-form-item prop="captcha" v-if="captchaUrl">
        <span class="svg-container">
          <svg-icon icon-class="lock" />
        </span>
        <el-input
            type="text"
            v-model="signupForm.captcha_value"
            :placeholder="$t('login.code')"
            name="captcha"
            @keyup.enter.native="handleSignup" />
      </el-form-item>
      <img :src="captchaUrl" @click="getImage"/>

      <!--用户服务协议-->
      <el-row type="flex" justify="space-between" style="margin-bottom: 14px">
        <el-checkbox v-if="language==='en'" style="color:#eee" v-model="contractChecked">{{ $t('signup.contract') }}《<a style="color: dodgerblue" target="view_window" href="https://www.cdnbye.com/en/views/contract.html">{{ $t('signup.contractName') }}</a>》</el-checkbox>
        <el-checkbox v-else style="color:#eee" v-model="contractChecked">{{ $t('signup.contract') }}《<a style="color: dodgerblue" target="view_window" href="https://www.cdnbye.com/cn/views/contract.html">{{ $t('signup.contractName') }}</a>》</el-checkbox>
      </el-row>

      <el-row type="flex" justify="space-between">
        <a @click="goLogin" style="color:#eee">{{ $t('auth.login') }}</a>
        <a @click="goFindPwd" style="color:#eee">{{ $t('auth.resetPasswd') }}</a>
      </el-row>

      <el-button :loading="signupLoading" type="primary" style="width:100%;margin:20px 0;" @click.native.prevent="handleSignup">{{ $t('signup.signUp') }}</el-button>

    </el-form>
  </div>
</template>

<script>
import LangSelect from '@/components/LangSelect'
import { validateEmail } from '@/utils/validate'
import { sendCode } from '@/api/auth'
import { mapGetters } from 'vuex'
import SelectZone from '@/components/SelectZone'
import {checkSelectZone } from '@/utils'
import { getCaptcha } from '@/api/captcha'
import { getItem, setItem } from '@/utils/storage'
import { LOCATION } from '@/constant'
import {INVITER} from "../../constant";

export default {
  name: 'Signup',
  components: { LangSelect, SelectZone },
  data() {
    const formValidateEmail = (rule, value, callback) => {
      if (!validateEmail(value)) {
        const error = this.$t('auth.mailError')
        callback(new Error(error))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6 || value.length > 64) {
        const error = this.$t('auth.passwdError')
        callback(new Error(error))
      } else {
        callback()
      }
    }
    const validateVCode = (rule, value, callback) => {
      if (value.length < 4) {
        const error = this.$t('auth.vcodeError')
        callback(new Error(error))
      } else {
        callback()
      }
    }
    const validateConfirmPassword = (rule, value, callback) => {
      const { passwd } = this.signupForm
      if(value !== passwd) {
        const error = this.$t('signup.confirm_password_error')
        callback(new Error(error))
      } else {
        callback()
      }
    }
    return {
      showInviter: true,
      signupForm: {
        email: '',
        vcode: '',
        passwd: '',
        confirm_passwd: '',
        captcha_id: '',
        captcha_value: '',
        inviter: '',
      },
      signupRules: {
        email: [{ required: true, trigger: 'blur', validator: formValidateEmail }],
        vcode: [{ required: true, trigger: 'blur', validator: validateVCode }],
        passwd: [{ required: true, trigger: 'blur', validator: validatePassword }],
        confirm_passwd: [{ required: true, trigger: 'blur', validator: validateConfirmPassword }],
      },
      passwordType: 'password',
      signupLoading: false,
      sendLoading: false,
      sendDisabled: false,
      redirect: undefined,
      int: undefined,
      contractChecked: true,
      captchaUrl: '',
    }
  },
  mounted() {
    let { zone, inviter } = this.$route.query
    if (zone) {
      if (getItem(LOCATION) !== zone) {
        setItem(LOCATION, zone)
        location.reload()
      }
    }
    if (!inviter) inviter = getItem(INVITER) || undefined
    if (inviter) {
      setItem(INVITER, inviter)
      this.signupForm.inviter = inviter
      this.showInviter = false
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    getImage() {
      // 获取验证码
      getCaptcha(this.signupForm.captcha_id).then(res => {
        const { data } = res
        if (data) {
          this.signupForm.captcha_id = data.captcha_id
          this.captchaUrl = data.captcha_url
        }
      })
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
    },
    handleSignup() {
      if (!checkSelectZone()) return
      if (!this.contractChecked) {
          this.$messageBox.alert(this.$t('signup.confirmContract'), {
              distinguishCancelAndClose: true,
              confirmButtonText: this.$t('common.ok'),
          });
          return
      }
      if (this.signupForm.email === this.signupForm.inviter) {
        this.$messageBox.alert('inviter email is invalid', {
          distinguishCancelAndClose: true,
          confirmButtonText: this.$t('common.ok'),
        });
        return
      }
      this.$refs.signupForm.validate(valid => {
        if (valid) {
          this.signupLoading = true
          // 获取时区
          let utc = (new Date().getTimezoneOffset()/60)*(-1)
          if (utc === -12) utc = 12
          this.signupForm.utc = Math.round(utc)
          this.$store.dispatch('signup', this.signupForm).then(() => {
            this.signupLoading = false
            this.$router.push({ path: this.redirect || '/' })
            const message = this.$t('signup.signUpSuccess')
            this.$message({
              message,
              type: 'success'
            })
            // 获取profile
            this.$store.dispatch('getProfile')
          }).catch(msg => {
            this.signupLoading = false
            if (msg.code === 4005 || msg.code === 4019) {
              this.getImage()
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    onSendCode() {
      if (!checkSelectZone()) return
      const { email } = this.signupForm
      if(email) {
        if(validateEmail(email)) {
          const data = {
            email,
            action: "signup",
          }
          this.sendLoading = true
          sendCode(data).then((res) => {
            this.sendLoading = false
            this.$message({
              message: '发送成功',
              type: 'success'
            })
            this.sendButtonEnable()
          }).catch((error) => {
            this.sendLoading = false
            console.log(error)
          })
        } else {
          const error = this.$t('auth.mailError')
          this.$message.error(error)
        }
      } else {
        const error = this.$t('auth.email')
        this.$message.error(error)
      }
    },
    goLogin() {
      this.$router.push({ path: '/login' })
    },
    goFindPwd() {
      this.$router.push({ path: '/forget_password' })
    },
    sendButtonEnable() {
      let time = 300
      let button = document.getElementById('sendButton')
      const _this = this
      _this.int = setInterval(() => {
        _this.sendDisabled = true
        time --
        if(time > 0) {
          button.innerHTML = time + ' S'
        } else {
          button.innerHTML = _this.$t('signup.send')
          _this.sendDisabled = false
          clearInterval(_this.int)
          _this.int = undefined
        }
      }, 1000)
    }
  },
  computed: {
      ...mapGetters([
          'language',
      ]),
  },
}
</script>


<style rel="stylesheet/scss" lang="scss">
  $bg:#283443;
  $light_gray:#eee;
  $cursor: #fff;

  @supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
    .login-container .el-input input{
      color: $cursor;
      &::first-line {
        color: $light_gray;
      }
    }
  }

  /* reset element-ui css */
  .login-container {
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
        &:-webkit-autofill {
          -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
          -webkit-text-fill-color: $cursor !important;
        }
      }
    }
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
  }
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  position: fixed;
  overflow-y: scroll;
  overflow-x:hidden;
  height: 100%;
  width: 100%;
  background-color: $bg;
  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 520px;
    max-width: 100%;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    &_login {
      font-size: 20px;
    }
  }
  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    .set-language {
      color: #fff;
      position: absolute;
      top: 5px;
      right: 0px;
    }
    .console {
      color: #fff;
      position: absolute;
      top: 10px;
      left: 0px;
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>

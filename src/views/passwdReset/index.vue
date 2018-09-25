<template>
  <div class="login-container">
    <el-form ref="resetForm" :model="resetForm" :rules="resetRules" class="login-form" auto-complete="on" label-position="left">
      <div class="title-container">
        <h3 class="title">{{ $t('passwdReset.title') }}</h3>
        <lang-select class="set-language"/>
      </div>

      <el-form-item prop="mobile">
        <span class="svg-container svg-container_login">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          v-model="resetForm.mobile"
          :placeholder="$t('passwdReset.phone')"
          name="mobile"
          type="text"
          auto-complete="on"
          @keyup.enter.native="onSendCode" />
      </el-form-item>

      <el-button id="sendButton" :loading="sendLoading" :disabled="sendDisabled" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="onSendCode">{{ $t('passwdReset.send') }}</el-button>

      <el-form-item prop="vcode">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          v-model="resetForm.vcode"
          :placeholder="$t('passwdReset.vcode')"
          name="vcode"
          auto-complete="on" />
      </el-form-item>


      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          :type="passwordType"
          v-model="resetForm.password"
          :placeholder="$t('passwdReset.password')"
          name="password"
          auto-complete="on"
          @keyup.enter.native="handleSignup" />
        <span class="show-pwd" @click="showPwd">
          <svg-icon icon-class="eye" />
        </span>
      </el-form-item>

      <el-row type="flex" justify="space-between">
        <a @click="goLogin" style="color:#eee">{{ $t('auth.login') }}</a>
        <a @click="goSignup" style="color:#eee">{{ $t('auth.signup') }}</a>
      </el-row>

      <el-button :loading="resetLoading" type="primary" style="width:100%;margin:20px 0;" @click.native.prevent="handleReset">{{ $t('passwdReset.submit') }}</el-button>

    </el-form>
  </div>
</template>

<script>
import LangSelect from '@/components/LangSelect'
import { validatePhone } from '@/utils/validate'
import { sendCode, resetPasswd } from '@/api/signup'

export default {
  name: 'PasswdReset',
  components: { LangSelect },
  data() {
    const formValidatePhone = (rule, value, callback) => {
      if (!validatePhone(value)) {
        callback(new Error('Please enter the correct phone'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('The password can not be less than 6 digits'))
      } else {
        callback()
      }
    }
    const validateVCode = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('The code can not be less than 6 digits'))
      } else {
        callback()
      }
    }
    return {
      resetForm: {
        mobile: '',
        password: '',
        vcode: '',
      },
      resetRules: {
        mobile: [{ required: true, trigger: 'blur', validator: formValidatePhone }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }],
        vcode: [{ required: true, trigger: 'blur', validator: validateVCode }],
      },
      passwordType: 'password',
      resetLoading: false,
      sendLoading: false,
      sendDisabled: false,
      redirect: undefined,
      int: undefined
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
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
    },
    handleReset() {
      this.$refs.resetForm.validate(valid => {
        if (valid) {
          this.resetLoading = true
          resetPasswd(this.resetForm).then(() => {
            this.resetLoading = false
            this.$message({
              message: '密码重置成功',
              type: 'success'
            })
          }).catch(() => {
            this.resetLoading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    onSendCode() {
      const { mobile } = this.resetForm
      if(mobile) {
        if(validatePhone(mobile)) {
          const data = {
            mobile,
            ncode: 86,
          }
          this.sendLoading = true
          sendCode(data).then((res) => {
            this.sendLoading = false
            this.$message({
              message: '发送成功',
              type: 'success'
            })
            this.sendButtonEnable()
            console.log(res)
          }).catch((error) => {
            this.sendLoading = false
            console.log(error)
          })
        } else {
          this.$message.error('请输入正确的电话号码')
        }
      } else {
        this.$message.error(`请输入电话号码`)
      }
    },
    goLogin() {
      this.$router.push({ path: '/login' })
    },
    goSignup() {
      this.$router.push({ path: '/signup' })
    },
    sendButtonEnable() {
      let time = 10
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
  }
}
</script>


<style rel="stylesheet/scss" lang="scss">
  /* 修复input 背景不协调 和光标变色 */
  /* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

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

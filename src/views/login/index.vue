<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">
      <div class="title-container">
        <h3 class="title">{{ $t('login.title') }}</h3>
        <lang-select class="set-language"/>
        <el-dropdown @command="handleConsoleSelect" class="console">
          <span class="el-dropdown-link">
            {{ $t('auth.console') }}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="hk" :disabled="!showHK">{{ $t('auth.consoleHK') }}</el-dropdown-item>
            <el-dropdown-item command="cn" :disabled="!showCN">{{ $t('auth.consoleCN') }}</el-dropdown-item>
            <el-dropdown-item command="us" :disabled="!showUSA">{{ $t('auth.consoleUSA') }}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>

      <el-form-item prop="username">
        <span class="svg-container svg-container_login">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          v-model="loginForm.username"
          :placeholder="$t('login.username')"
          name="username"
          type="text"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="passwd">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          :type="passwordType"
          v-model="loginForm.passwd"
          :placeholder="$t('login.password')"
          name="passwd"
          auto-complete="on"
          @keyup.enter.native="handleLogin" />
        <span class="show-pwd" @click="showPwd">
          <svg-icon icon-class="eye" />
        </span>
      </el-form-item>

      <el-row type="flex" justify="space-between">
        <a @click="goSignup" style="color:#eee">{{ $t('auth.signup') }}</a>
        <a @click="goFindPwd" style="color:#eee">{{ $t('auth.resetPasswd') }}</a>
      </el-row>

      <el-button :loading="loading" type="primary" style="width:100%;margin:20px 0;" @click.native.prevent="handleLogin">{{ $t('login.logIn') }}</el-button>

    </el-form>
  </div>
</template>

<script>
import { validateEmail } from '@/utils/validate'
import LangSelect from '@/components/LangSelect'
import { setSha256 } from '@/utils/format'
import { trim } from '@/utils'

export default {
  name: 'Login',
  components: { LangSelect },
  data() {
    const validateUsername = (rule, value, callback) => {
      value = trim(value)
      if (!validateEmail(value)) {
        const error = this.$t('auth.usernameError')
        callback(new Error(error))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6 || value.length > 18) {
        const error = this.$t('auth.passwdError')
        callback(new Error(error))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        passwd: ''
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        passwd: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      passwordType: 'password',
      loading: false,
      redirect: undefined,
      showCN: true,
      showHK: true,
      showUSA: true,
        consoleSelect: ''
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
  mounted() {
    const env = process.env.VUE_APP_ENV
    if (env === 'p1') {
        this.showCN = false
    } else if (env === 'p3') {
        this.showHK = false
    } else if (env === 'p2') {
        this.showUSA = false
    }
  },
  methods: {
    handleConsoleSelect(command) {
        location.href = this.$t('consoleAddr.' + command)
    },
    formatData(data) {
      const temp = {...data}
      delete temp.username
      temp.passwd = setSha256(data.passwd)
      temp.email = trim(data.username)
      return temp
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          const data = this.formatData(this.loginForm)
          this.$store.dispatch('LoginByUsername', data).then(() => {
            this.loading = false
            this.$router.push({ path: this.redirect || '/' })
            const message = this.$t('login.logInSuccess')
            this.$message({
              message,
              type: 'success'
            })
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    goSignup() {
      this.$router.push({ path: '/signup' })
    },
    goFindPwd() {
      this.$router.push({ path: '/forget_password' })
    },
  }
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
  .el-dropdown-link {
    cursor: pointer;
    /*color: #409EFF;*/
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
}
</style>

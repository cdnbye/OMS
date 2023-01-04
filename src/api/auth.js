import request from '@/utils/request'

// 登录
export function loginByUsername(data) {
  return request({
    url: 'user/token',
    method: 'post',
    data
  })
}

// 注册
export function signup(data) {
  return request({
    url: 'user',
    method: 'post',
    data
  })
}

// 发送验证码
export function sendCode(data) {
  return request({
    url: '/vcode',
    method: 'post',
    data
  })
}

// 重置密码
export function resetPasswd(data) {
  return request({
    url: '/user/passwd_forget',
    method: 'put',
    data
  })
}

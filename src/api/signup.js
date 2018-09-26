import request from '@/utils/request'

export function signup(data) {
  return request({
    url: 'user',
    method: 'post',
    data
  })
}

export function sendCode(data) {
  return request({
    url: '/vcode',
    method: 'post',
    data
  })
}

export function resetPasswd(data) {
  return request({
    url: '/user/passwd_forget',
    method: 'put',
    data
  })
}

import request from '@/utils/request'
import { validateEmail } from '@/utils/validate'

export function signup(username, passwd) {
  const data = {
    passwd
  }
  if(validateEmail(username)) {
    data.email = username
  } else {
    data.mobile = username
  }
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

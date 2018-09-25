import request from '@/utils/request'
import { validateEmail } from '@/utils/validate'

export function loginByUsername(username, passwd) {
  const data = {
    passwd
  }
  if(validateEmail(username)) {
    data.email = username
  } else {
    data.mobile = username
  }
  return request({
    url: 'user/token',
    method: 'post',
    data
  })
}

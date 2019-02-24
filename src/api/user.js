import request from '@/utils/request'
import { getID } from '@/utils/auth'

export function fetchUserData() {
  return request({
    url: `user/user_id/${getID()}/profile`,
    method: 'get'
  })
}

export function changePasswd(data) {
  return request({
    url: `user/user_id/${getID()}/profile/passwd`,
    method: 'put',
    data
  })
}

export function changeMail(data) {
  return request({
    url: `user/user_id/${getID()}/profile/email`,
    method: 'put',
    data
  })
}

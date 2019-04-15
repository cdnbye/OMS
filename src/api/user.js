import request from '@/utils/request'
import { getID } from '@/utils/auth'

// 用户信息，邮箱 注册时间等
export function fetchUserData() {
  return request({
    url: `user/user_id/${getID()}/profile`,
    method: 'get'
  })
}

// 用户修改密码
export function changePasswd(data) {
  return request({
    url: `user/user_id/${getID()}/profile/passwd`,
    method: 'put',
    data
  })
}

// 用户修改邮箱
export function changeMail(data) {
  return request({
    url: `user/user_id/${getID()}/profile/email`,
    method: 'put',
    data
  })
}

// 冻结用户
export function frozenUser(data) {
  return request({
    url: `user/frozen`,
    method: 'post',
    data
  })
}

// 修改用户管理员权限
export function adminUser(data) {
  return request({
    url: `user/admin`,
    method: 'post',
    data
  })
}

// 查找用户
export function searchUser(mail) {
  return request({
    url: `user/search?keywords=${mail}`,
    method: 'get'
  })
}

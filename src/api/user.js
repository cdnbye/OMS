import request from '@/utils/request'
import { getID } from '@/utils/auth'

// 用户信息，邮箱 注册时间等
export function fetchUserData() {
  return request({
    url: `user/user_id/${getID()}/profile`,
    method: 'get'
  })
}

// 修改用户名
export function changeUserName(data) {
  return request({
    url: `user/user_id/${getID()}/profile/name`,
    method: 'put',
    data
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

// 修改时区
export function changeTimeZone(data) {
  return request({
    url: `user/user_id/${getID()}/timezone`,
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

// 修改用户白名单
export function whitelistUser(data) {
    return request({
        url: `user/whitelist`,
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

// 用户剩余付费流量变动
export function userTrafficChange(data) {
  return request({
    url: `user/remain_traffic`,
    method: 'post',
    data
  })
}

// 用户余额变动
export function updateBalance(data) {
  return request({
    url: `user/balance`,
    method: 'post',
    data
  })
}

// 用户邀请人
export function updateCommissionInfo(data) {
  return request({
    url: `user/commission`,
    method: 'post',
    data
  })
}

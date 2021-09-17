import request from '@/utils/request'
import { getID } from '@/utils/auth'

// 获取活跃域名总数
export function fetchHostNum() {
  return request({
    url: `host/num?ts=${((new Date().getTime()) / 1000).toFixed() - 1800}`,
    method: 'get'
  })
}

// 获取域名列表
export function fetchDomain(page, pageSize, order, filters) {
  let url = `host?page=${page}&page_size=${pageSize}&order=${order}`
  filters.forEach(item => {
    if(item.value)
      url += `&${item.name}=${item.value}`
  })
  return request({
    url,
    method: 'get'
  })
}

// 获取正在审核域名列表
export function fetchDomainUnderReview(page, pageSize) {
    let url = `host/review?page=${page}&page_size=${pageSize}`
    return request({
        url,
        method: 'get'
    })
}

// 检查备案情况
export function checkBeian(domian) {
    let url = `host/checkbeian?domain=${domian}`
    return request({
        url,
        method: 'get'
    })
}

// 将域名拉黑或从黑名单移除
export function blockDomain(data) {
  return request({
    url: `/host/block`,
    method: 'post',
    data
  })
}

// 将域名加入或从白名单移除
export function whiteDomain(data) {
  return request({
    url: `/host/whitelist`,
    method: 'post',
    data
  })
}

// 将域名加入或从白名单移除
export function reviewDomain(data) {
    return request({
        url: `/host/review`,
        method: 'post',
        data
    })
}

// 查找域名
export function searchHost(host) {
  return request({
    url: `host/search?keywords=${host}`,
    method: 'get'
  })
}

// 获取用户列表
export function fetchUserList(page, pageSize, order) {
  return request({
    url: `user?page=${page}&page_size=${pageSize}&order=${order}`,
    method: 'get'
  })
}

// 获取某用户的域名列表
export function fetchUserDomain(page, pageSize, queryMap) {
  let url = `user/user_id/${getID()}/domain?page=${page}&page_size=${pageSize}`;

  for (let query in queryMap) {
      if (queryMap[query]) {
          url = `${url}&${query}=1`
      }
  }
  return request({
    url,
    method: 'get'
  })
}

// 绑定域名
export function bindDomain(data) {
  return request({
    url: `user/user_id/${getID()}/domain`,
    method: 'post',
    data
  })
}

// 认证域名
export function checkDomain(domainID) {
  return request({
    url: `user/user_id/${getID()}/domain/domain_id/${domainID}`,
    method: 'post'
  })
}

// 用户删除域名
export function deleteDomain(domainID) {
  return request({
    url: `user/user_id/${getID()}/domain/domain_id/${domainID}`,
    method: 'delete'
  })
}

// 管理员权限用户列表
export function fetchAdminUser() {
  return request({
    url: `user/admin`,
    method: 'get'
  })
}

// 白名单用户列表
export function fetchWhitelistUser() {
    return request({
        url: `user/whitelist`,
        method: 'get'
    })
}

// 用户包月套餐变动
export function updateUserPlan(data) {
    return request({
        url: `user/update_plan`,
        method: 'post',
        data
    })
}

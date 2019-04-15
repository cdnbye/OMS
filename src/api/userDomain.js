import request from '@/utils/request'
import { getID } from '@/utils/auth'

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

// 将域名拉黑或从黑名单移除
export function blockDomain(data) {
  return request({
    url: `/host/block`,
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
export function fetchUserDomain(page, pageSize) {
  return request({
    url: `user/user_id/${getID()}/domain?page=${page}&page_size=${pageSize}`,
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

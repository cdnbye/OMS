import request from '@/utils/request'
import { getID } from '@/utils/auth'

export function fetchHostNum() {
  return request({
    url: `host/num?ts=${((new Date().getTime()) / 1000).toFixed() - 1800}`,
    method: 'get'
  })
}

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

export function blockDomain(data) {
  return request({
    url: `/host/block`,
    method: 'post',
    data
  })
}

export function searchHost(host) {
  return request({
    url: `host/search?keywords=${host}`,
    method: 'get'
  })
}

export function fetchUserList(page, pageSize, order) {
  return request({
    url: `user?page=${page}&page_size=${pageSize}&order=${order}`,
    method: 'get'
  })
}

export function fetchUserDomain(page, pageSize) {
  return request({
    url: `user/user_id/${getID()}/domain?page=${page}&page_size=${pageSize}`,
    method: 'get'
  })
}

export function bindDomain(data) {
  return request({
    url: `user/user_id/${getID()}/domain`,
    method: 'post',
    data
  })
}

export function checkDomain(domainID) {
  return request({
    url: `user/user_id/${getID()}/domain/domain_id/${domainID}`,
    method: 'post'
  })
}

export function deleteDomain(domainID) {
  return request({
    url: `user/user_id/${getID()}/domain/domain_id/${domainID}`,
    method: 'delete'
  })
}

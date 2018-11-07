import request from '@/utils/request'
import { getID } from '@/utils/auth'

export function fetchHostNum() {
  return request({
    url: `host/num`,
    method: 'get'
  })
}

export function fetchDomain(page, pageSize, order) {
  return request({
    url: `host?page=${page}&page_size=${pageSize}&order=${order}`,
    method: 'get'
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
    url: `user/${getID()}/domain?page=${page}&page_size=${pageSize}`,
    method: 'get'
  })
}

export function bindDomain(data) {
  return request({
    url: `user/${getID()}/domain`,
    method: 'post',
    data
  })
}

export function checkDomain(domainID) {
  return request({
    url: `user/${getID()}/domain/${domainID}`,
    method: 'post'
  })
}

export function deleteDomain(domainID) {
  return request({
    url: `user/${getID()}/domain/${domainID}`,
    method: 'delete'
  })
}

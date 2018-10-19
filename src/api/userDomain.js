import request from '@/utils/request'

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

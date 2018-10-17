import request from '@/utils/request'

export function fetchDomain(pageSize, order) {
  return request({
    url: `host?page_size=${pageSize}&order=${order}`,
    method: 'get',
  })
}

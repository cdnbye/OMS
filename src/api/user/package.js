import request from '@/utils/request'

export function fetchPackage() {
  return request({
    url: `goods/flow_packet`,
    method: 'get',
  })
}
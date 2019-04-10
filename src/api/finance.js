import request from '@/utils/request'

export function financeInfo() {
  return request({
    url: 'finance/global',
    method: 'get'
  })
}

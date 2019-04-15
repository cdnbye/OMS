import request from '@/utils/request'

// 获取财务信息
export function financeInfo() {
  return request({
    url: 'finance/global',
    method: 'get'
  })
}

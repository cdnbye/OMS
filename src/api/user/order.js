import request from '@/utils/request'

export function fetchOrder(user_id) {
  return request({
    url: `order/user_id/${user_id}`,
    method: 'get',
  })
}
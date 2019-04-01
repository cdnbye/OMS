import request from '@/utils/request'

export function fetchOrder(user_id, page, pageSize) {
  return request({
    url: `order/user_id/${user_id}?page=${page}&page_size=${pageSize}`,
    method: 'get',
  })
}

export function closeOrder(userID, orderID) {
  return request({
    url: `order/user_id/${userID}?order_id=${orderID}`,
    method: 'delete'
  })
}

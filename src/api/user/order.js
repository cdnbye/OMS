import request from '@/utils/request'

// 用户获取自己的订单
export function fetchOrder(user_id, page, pageSize) {
  return request({
    url: `order/user_id/${user_id}?page=${page}&page_size=${pageSize}`,
    method: 'get',
  })
}

// 用户关闭自己的订单
export function closeOrder(userID, orderID) {
  return request({
    url: `order/user_id/${userID}?order_id=${orderID}`,
    method: 'delete'
  })
}

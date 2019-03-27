import request from '@/utils/request'

export function fetchPackage() {
  return request({
    url: `goods/flow_packet`,
    method: 'get'
  })
}

export function createOrder(userID, data) {
  return request({
    url: `order/user_id/${userID}`,
    method: 'post',
    data
  })
}

// export function cancelOrder(userID, data) {
//   return request({
//     url: `order/user_id/${userID}`,
//     method: 'delete',
//     data
//   })
// }

export function fetchPayUrl(payMethod, orderID, device) {
  const param = device === 'mobile' ? '&mobile=true' : ''
  return request({
    url: `charge/${payMethod}/pay?order_id=${orderID}${param}`,
    method: 'get'
  })
}

export function checkAlipayOrder(orderID) {
  return request({
    url: `charge/alipay/query?order_id=${orderID}`,
    method: 'get'
  })
}

export function checkPaypalOrder(orderID, paymentID, payerID) {
  return request({
    url: `charge/paypal/query?order_id=${orderID}&payment_id=${paymentID}&payer_id=${payerID}`,
    method: 'get'
  })
}

export function checkIn(data) {
  return request({
    url: `user/user_id/${userID}/checkin`,
    method: 'post',
    data
  })
}
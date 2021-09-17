import request from '@/utils/request'

// 获取套餐信息
export function fetchPackage() {
  return request({
    url: `goods/flow_packet`,
    method: 'get'
  })
}

// 获取包年包月套餐信息
export function fetchMonthlyPackage() {
  return request({
    url: `goods/monthly_packet`,
    method: 'get'
  })
}

// 用户创建订单
export function createOrder(userID, data) {
  return request({
    url: `order/user_id/${userID}`,
    method: 'post',
    data
  })
}

// 获取支付地址
export function fetchPayUrl(payMethod, orderID, device) {
  const param = device === 'mobile' ? '&mobile=true' : ''
  return request({
    url: `charge/${payMethod}/pay?order_id=${orderID}${param}`,
    method: 'get'
  })
}

// 检查支付宝支付状态
export function checkAlipayOrder(orderID) {
  return request({
    url: `charge/alipay/query?order_id=${orderID}`,
    method: 'get'
  })
}

// 检查paypal支付状态
export function checkPaypalOrder(orderID, paymentID, payerID) {
  return request({
    url: `charge/paypal/query?order_id=${orderID}&payment_id=${paymentID}&payer_id=${payerID}`,
    method: 'get'
  })
}

// 用户签到
export function checkIn(userID, data) {
  return request({
    url: `user/user_id/${userID}/checkin`,
    method: 'post',
    data
  })
}

// 获取开票信息
export function getInvoiceInfo(userID) {
    return request({
        url: `user/user_id/${userID}/invoice`,
        method: 'get',
    })
}

// 开具发票
export function createInvoice(userID, data) {
    return request({
        url: `user/user_id/${userID}/invoice`,
        method: 'post',
        data
    })
}

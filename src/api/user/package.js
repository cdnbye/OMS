import request from '@/utils/request'

// 获取套餐信息
export function fetchPackage(uid) {
    let url = `goods/flow_packet`
    if (uid) {
        url = `${url}?uid=${uid}`
    }
  return request({
    url,
    method: 'get'
  })
}

// 获取包年包月套餐信息
export function fetchMonthlyPackage(uid) {
    let url = `goods/monthly_packet`
    if (uid) {
        url = `${url}?uid=${uid}`
    }
  return request({
    url,
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

// 获取支付方式
export function fetchPayMethods() {
    return request({
        url: `charge/methods`,
        method: 'get'
    })
}

// 更新支付状态
export function updateCryptoTrade(data) {
    return request({
        url: `charge/crypto/trade`,
        method: 'post',
        data
    })
}

// 获取支付地址
export function fetchPayUrl(payMethod, orderID, device) {
  const origin = location.origin + location.pathname
  const param = device === 'mobile' ? '&mobile=true' : ''
  return request({
    url: `charge/${payMethod}/pay?origin=${origin}&order_id=${orderID}${param}`,
    method: 'get'
  })
}

// 检查支付状态
export function checkOrderStatus(method, orderID) {
    return request({
        url: `charge/${method}/query?order_id=${orderID}`,
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

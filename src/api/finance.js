import request from '@/utils/request'

// 获取财务信息
export function financeInfo() {
  return request({
    url: 'finance/global',
    method: 'get'
  })
}

// 获取带开票列表
export function fetchInvoices() {
    return request({
        url: `finance/invoices`,
        method: 'get'
    })
}

// 开票状态变动
export function updateInvoice(data) {
    return request({
        url: `finance/invoice_finish`,
        method: 'post',
        data
    })
}

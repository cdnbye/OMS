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

// 开票剩余额度变动
export function updateInvoiceIssued(data) {
    return request({
        url: `finance/invoice_update`,
        method: 'post',
        data
    })
}

// 收入趋势
export function fetchIncomeTrend() {
    return request({
        url: `finance/income_trend`,
        method: 'get'
    })
}

// 所有交易
export function fetchTrades(page, pageSize, filters) {
    let url = `finance/trades?page=${page}&page_size=${pageSize}`
    filters.forEach(item => {
        if(item.value)
            url += `&${item.name}=${item.value}`
    })
    return request({
        url,
        method: 'get',
    })
}

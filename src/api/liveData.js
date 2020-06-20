import request from '@/utils/request'

// 全局数据接口
export function fetchGlobalData() {
  return request({
    url: 'global',
    method: 'get',
  })
}

// livetime接口
export function fetchLiveTimeData() {
    return request({
        url: 'global/livetime',
        method: 'get',
    })
}

// overall接口
export function fetchOverallData() {
    return request({
        url: 'global/overall',
        method: 'get',
    })
}

export function fetchLiveData(type, opts) {
    let url =`global/num?type=${type}`
    if (opts && opts.country) {
        url = `${url}&country=${opts.country}`
    }
    return request({
    url,
    method: 'get'
  })
}

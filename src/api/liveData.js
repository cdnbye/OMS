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

// 全局热门频道
export function fetchHotChannels(page, pageSize) {
    let url = `global/channel?page=${page}&page_size=${pageSize}`
    return request({
        url,
        method: 'get'
    })
}

// 全局热门频道拆分
export function splitHotChannels(data) {
    let url = `global/channel/split`
    return request({
        url,
        method: 'post',
        data,
    })
}

// 查看用户全局数据
export function fetchUserGlobalData(uid, domainID) {
    let url = `global/user/user_id/${uid}/domain/domain_id/${domainID}`
    return request({
        url,
        method: 'get',
    })
}

export function fetchUserDisData(uid, domainID, type, lang) {
    let url = `global/user/user_id/${uid}/domain/domain_id/${domainID}/num?type=${type}`
    if (lang) {
        url = `${url}&lang=${lang}`
    }
    return request({
        url,
        method: 'get',
    })
}

import request from '@/utils/request'

// 管理员查看用户全局概览数据
export function fetchGlobalData(uid, domainID, hostId) {
  let url = `user/user_id/${uid}/domain/domain_id/${domainID}`
  if (hostId) {
    url = `${url}?host_id=${hostId}`
  }
  return request({
    url,
    method: 'get',
  })
}

// 管理员查看用户的分布图数据
export function fetchDisData(uid, domainID, type, hostId, lang) {
  let url = `user/user_id/${uid}/domain/domain_id/${domainID}/num?type=${type}`
  if (hostId) {
    url = `${url}&host_id=${hostId}`
  }
  if (lang) {
      url = `${url}&lang=${lang}`
  }
  return request({
    url,
    method: 'get',
  })
}

// 用户全局概览数据
export function fetchNum(uid, domainID, start, end) {
  return request({
    url: `user/user_id/${uid}/domain/domain_id/${domainID}/num?start_ts=${start}&end_ts=${end}&gran=5`,
    method: 'get',
  })
}

// 用户分布图数据
export function fetchChinaDis(uid, domainID, type, country) {
  let url = `user/user_id/${uid}/domain/domain_id/${domainID}/num?type=${type}`;
  if (country) {
    url = `${url}&country=${country}`
  }
  return request({
    url,
    method: 'get',
  })
}

// 用户热门频道
export function fetchHotChannels(uid, page, pageSize) {
    let url = `user/user_id/${uid}/channel?page=${page}&page_size=${pageSize}`
    return request({
        url,
        method: 'get'
    })
}

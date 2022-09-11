import request from '@/utils/request'

export function fetchNum(uid, domainID, start, end) {
  return request({
    url: `user/user_id/${uid}/domain/domain_id/${domainID}/num?start_ts=${start}&end_ts=${end}&gran=5`,
    method: 'get'
  })
}

export function fetchP2PTraffic(uid, domainID, start, end, gran) {
  if (!gran) gran = 5
  return request({
    url: `user/user_id/${uid}/domain/domain_id/${domainID}/p2p?start_ts=${start}&end_ts=${end}&gran=${gran}`,
    method: 'get'
  })
}

export function fetchHttpTraffic(uid, domainID, start, end, gran) {
  if (!gran) gran = 5
  return request({
      url: `user/user_id/${uid}/domain/domain_id/${domainID}/http?start_ts=${start}&end_ts=${end}&gran=${gran}`,
      method: 'get'
  })
}

export function fetchRebufferRatio(uid, domainID, start, end, gran) {
  if (!gran) gran = 5
  return request({
    url: `user/user_id/${uid}/domain/domain_id/${domainID}/rebuffer_ratio?start_ts=${start}&end_ts=${end}&gran=${gran}`,
    method: 'get'
  })
}

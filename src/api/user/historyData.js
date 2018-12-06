import request from '@/utils/request'

export function fetchNum(uid, domainID, start, end) {
  return request({
    url: `user/${uid}/domain/${domainID}/num?start_ts=${start}&end_ts=${end}&gran=5`,
    method: 'get'
  })
}

export function fetchP2PTraffic(uid, domainID, start, end) {
  return request({
    url: `user/${uid}/domain/${domainID}/p2p?start_ts=${start}&end_ts=${end}&gran=5`,
    method: 'get'
  })
}

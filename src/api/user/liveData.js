import request from '@/utils/request'

export function fetchGlobalData(uid, domainID) {
  return request({
    url: `user/${uid}/domain/${domainID}`,
    method: 'get',
  })
}

export function fetchDisData(uid, domainID, type) {
  return request({
    url: `user/${uid}/domain/${domainID}/num?type=${type}`,
    method: 'get',
  })
}

export function fetchNum(uid, domainID, start, end) {
  return request({
    url: `user/${uid}/domain/${domainID}/num?start_ts=${start}&end_ts=${end}&gran=5`,
    method: 'get',
  })
}

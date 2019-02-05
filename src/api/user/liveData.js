import request from '@/utils/request'

export function fetchGlobalData(uid, domainID) {
  return request({
    url: `user/user_id/${uid}/domain/domain_id/${domainID}`,
    method: 'get',
  })
}

export function fetchDisData(uid, domainID, type) {
  return request({
    url: `user/user_id/${uid}/domain/domain_id/${domainID}/num?type=${type}`,
    method: 'get',
  })
}

export function fetchNum(uid, domainID, start, end) {
  return request({
    url: `user/user_id/${uid}/domain/domain_id/${domainID}/num?start_ts=${start}&end_ts=${end}&gran=5`,
    method: 'get',
  })
}

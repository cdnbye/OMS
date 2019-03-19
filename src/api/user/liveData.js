import request from '@/utils/request'

export function fetchGlobalData(uid, domainID, hostId) {
  var url = `user/user_id/${uid}/domain/domain_id/${domainID}`
  if (hostId) {
    url = `${url}?host_id=${hostId}`
  }
  return request({
    url,
    method: 'get',
  })
}

export function fetchDisData(uid, domainID, type, hostId) {
  var url = `user/user_id/${uid}/domain/domain_id/${domainID}/num?type=${type}`
  if (hostId) {
      url = `${url}&host_id=${hostId}`
  }
  return request({
    url,
    method: 'get',
  })
}

export function fetchNum(uid, domainID, start, end) {
  return request({
    url: `user/user_id/${uid}/domain/domain_id/${domainID}/num?start_ts=${start}&end_ts=${end}&gran=5`,
    method: 'get',
  })
}

export function fetchChinaDis(uid, domainID, type) {
  return request({
    url: `user/user_id/${uid}/domain/domain_id/${domainID}/num?type=${type}`,
    method: 'get',
  })
}
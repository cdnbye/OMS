import request from '@/utils/request'

export function fetchGlobalData(uid, domainID) {
  return request({
    url: `user/${uid}/domain/${domainID}`,
    method: 'get',
  })
}

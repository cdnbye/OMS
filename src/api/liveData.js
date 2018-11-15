import request from '@/utils/request'

export function fetchGlobalData() {
  return request({
    url: 'global',
    method: 'get',
  })
}

export function fetchLiveData(type) {
  return request({
    url: `global/num?type=${type}`,
    method: 'get'
  })
}

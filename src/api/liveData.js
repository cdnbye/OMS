import request from '@/utils/request'

export function fetchLiveData() {
  return request({
    url: 'global',
    method: 'get',
  })
}

export function fetchCityNum() {
  return request({
    url: `global/num?city=all`,
    method: 'get'
  })
}

export function fetchProvinceNum() {
  return request({
    url: `global/num?province=all`,
    method: 'get'
  })
}

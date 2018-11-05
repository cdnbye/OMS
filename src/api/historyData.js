import request from '@/utils/request'

export function fetchNum(start, end) {
  return request({
    url: `global/num?start_ts=${start}&end_ts=${end}&gran=5`,
    method: 'get'
  })
}

export function fetchCityNum() {
  return request({
    url: `global/num?city=all`,
    method: 'get'
  })
}

export function fetchVersion() {
  return request({
    url: `global/num?version=all`,
    method: 'get'
  })
}

export function fetchTag() {
  return request({
    url: `global/num?tag=all`,
    method: 'get'
  })
}

export function fetchDevice() {
  return request({
    url: `global/num?dev=all`,
    method: 'get'
  })
}

export function fetchLive() {
  return request({
    url: `global/num?live=all`,
    method: 'get'
  })
}

export function fetchP2PTraffic(start, end) {
  return request({
    url: `global/p2p?start_ts=${start}&end_ts=${end}&gran=5`,
    method: 'get'
  })
}

export function fetchP2PBandwidth(year, month) {
  return request({
    url: `global/p2p/peak?year=${year}&month=${month}`,
    method: 'get'
  })
}

export function fetchHttpTraffic(start, end) {
  return request({
    url: `global/http?start_ts=${start}&end_ts=${end}&gran=5`,
    method: 'get'
  })
}

export function fetchHttpBandwidth(year, month) {
  return request({
    url: `global/http/peak?year=${year}&month=${month}`,
    method: 'get'
  })
}

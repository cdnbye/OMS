import request from '@/utils/request'

export function fetchNum(start, end, gran) {
  return request({
    url: `global/num?start_ts=${start}&end_ts=${end}&gran=${gran}`,
    method: 'get',
  })
}

export function fetchP2PTraffic(start, end, gran) {
  return request({
    url: `global/p2p?start_ts=${start}&end_ts=${end}&gran=${gran}`,
    method: 'get',
  })
}

export function fetchP2PBandwidth(year, month) {
  return request({
    url: `global/p2p/peak?year=${year}&month=${month}`,
    method: 'get',
  })
}

export function fetchHttpTraffic(start, end, gran) {
  return request({
    url: `global/http?start_ts=${start}&end_ts=${end}&gran=${gran}`,
    method: 'get',
  })
}

export function fetchHttpBandwidth(year, month) {
  return request({
    url: `global/http/peak?year=${year}&month=${month}`,
    method: 'get',
  })
}

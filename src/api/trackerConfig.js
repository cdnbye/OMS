import request from '@/utils/request'

export function fetchTrackerConfig() {
  return request({
    url: 'tracker/config',
    method: 'get',
  })
}

export function configTracker(data) {
  return request({
    url: 'tracker/config',
    method: 'post',
    data
  })
}

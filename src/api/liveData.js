import request from '@/utils/request'

export function fetchLiveData() {
  return request({
    url: 'global',
    method: 'get',
  })
}

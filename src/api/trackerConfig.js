import request from '@/utils/request'

// 获取tracker配置
export function fetchTrackerConfig() {
  return request({
    url: 'tracker/config',
    method: 'get',
  })
}

// 修改tracker配置
export function configTracker(data) {
  return request({
    url: 'tracker/config',
    method: 'post',
    data
  })
}

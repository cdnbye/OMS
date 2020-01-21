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

// 获取announce
export function fetchAnnounces() {
    return request({
        url: '/tracker/announces',
        method: 'get',
    })
}

// 增加announce
export function addAnnounce(data) {
    return request({
        url: '/tracker/announces',
        method: 'post',
        data
    })
}

// 删除announce
export function removeAnnounce(data) {
    return request({
        url: '/tracker/announces',
        method: 'delete',
        data
    })
}


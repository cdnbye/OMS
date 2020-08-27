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

// 获取BlockIp
export function fetchBlockIps() {
    return request({
        url: '/tracker/block_ips',
        method: 'get',
    })
}

// 增加BlockIp
export function addBlockIp(data) {
    return request({
        url: '/tracker/block_ips',
        method: 'post',
        data
    })
}

// 删除BlockIp
export function removeBlockIp(data) {
    return request({
        url: '/tracker/block_ips',
        method: 'delete',
        data
    })
}

// 获取AllowIp
export function fetchAllowIps() {
    return request({
        url: '/tracker/allow_ips',
        method: 'get',
    })
}

// 增加AllowIp
export function addAllowIp(data) {
    return request({
        url: '/tracker/allow_ips',
        method: 'post',
        data
    })
}

// 删除AllowIp
export function removeAllowIp(data) {
    return request({
        url: '/tracker/allow_ips',
        method: 'delete',
        data
    })
}

// 获取BlockOrigin
export function fetchBlockOrigins() {
    return request({
        url: '/tracker/block_origins',
        method: 'get',
    })
}

// 增加BlockOrigin
export function addBlockOrigin(data) {
    return request({
        url: '/tracker/block_origins',
        method: 'post',
        data
    })
}

// 删除BlockOrigin
export function removeBlockOrigin(data) {
    return request({
        url: '/tracker/block_origins',
        method: 'delete',
        data
    })
}


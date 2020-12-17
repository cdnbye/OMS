import request from '@/utils/request'

// 用户配置网站p2p开关
export function p2pConfig(user_id, domain_id, data) {
  return request({
    url: `user/user_id/${user_id}/domain/domain_id/${domain_id}/control`,
    method: 'post',
    data
  })
}

// 配置wifi only
export function p2pConfigWifiOnly(user_id, domain_id, data) {
    return request({
        url: `user/user_id/${user_id}/domain/domain_id/${domain_id}/control/wifi_only`,
        method: 'post',
        data
    })
}

// 配置p2p激活比率
export function p2pConfigRatio(user_id, domain_id, data) {
    return request({
        url: `user/user_id/${user_id}/domain/domain_id/${domain_id}/control/ratio`,
        method: 'post',
        data
    })
}

// 配置信令地址
export function p2pConfigSignal(user_id, domain_id, data) {
    return request({
        url: `user/user_id/${user_id}/domain/domain_id/${domain_id}/control/signal`,
        method: 'post',
        data
    })
}

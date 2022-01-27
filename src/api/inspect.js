import request from '@/utils/request'

// 获取peer信息
export function fetchPeerInfo(peerId) {
    return request({
        url: `inspect/peer/${peerId}`,
        method: 'get',
    })
}

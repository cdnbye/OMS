import request from '@/utils/request'

export function fetchGlobalDomains(uid) {
    return request({
        url: `user/user_id/${uid}/global/domains`,
        method: 'get'
    })
}

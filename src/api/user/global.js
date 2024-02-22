import request from '@/utils/request'

export function fetchGlobalDomains(uid) {
    return request({
        url: `user/user_id/${uid}/global/domains`,
        method: 'get'
    })
}

export function fetchUserGlobalDomains(uid) {
    return request({
        url: `global/user/user_id/${uid}/global/domains`,
        method: 'get'
    })
}

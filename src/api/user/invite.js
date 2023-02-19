import request from '@/utils/request'

export function fetchInviteRecords(uid, page, pageSize) {
    return request({
        url: `user/user_id/${uid}/invite_records?page=${page}&page_size=${pageSize}`,
        method: 'get'
    })
}

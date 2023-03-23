import request from '@/utils/request'

export function createSeeder(uid, data) {
    return request({
        url: `seeder/user_id/${uid}`,
        method: 'post',
        data
    })
}

export function getSeeders(uid) {
    return request({
        url: `seeder/user_id/${uid}`,
        method: 'get',
    })
}

export function deleteSeeder(uid, sid) {
    return request({
        url: `seeder/user_id/${uid}/seeder_id/${sid}`,
        method: 'delete',
    })
}

export function updateSeeder(uid, sid, data) {
    return request({
        url: `seeder/user_id/${uid}/seeder_id/${sid}`,
        method: 'put',
        data
    })
}

export function actionSeeder(uid, sid, data) {
    return request({
        url: `seeder/user_id/${uid}/seeder_id/${sid}`,
        method: 'post',
        data
    })
}



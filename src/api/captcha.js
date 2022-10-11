import request from '@/utils/request'

export function getCaptcha(last) {
    let url = `captcha`
    if (last) {
        url = `${url}?last=${last}`
    }
    return request({
        url,
        method: 'get',
    })
}

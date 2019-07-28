import request from '@/utils/request'

export function fetchList(uid) {
  return request({
    url: `sdk/user_id/${uid}/info`,
    method: 'get'
  })
}

export function createToken(uid) {
  return request({
    url: `sdk/user_id/${uid}/token`,
    method: 'post'
  })
}

export function createItem(uid, data) {
  return request({
    url: `sdk/user_id/${uid}/app`,
    method: 'post',
    data
  })
}

export function deleteItem(uid, data) {
  return request({
    url: `sdk/user_id/${uid}/app`,
    method: 'delete',
    data
  })
}

import request from '@/utils/request'

export function fetchList(uid, page, pageSize) {
  return request({
    url: `sdk/user_id/${uid}/info?page=${page}&page_size=${pageSize}`,
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

import request from '@/utils/request'

export function p2pConfig(user_id, domain_id, data) {
  return request({
    url: `user/user_id/${user_id}/domain/domain_id/${domain_id}/control`,
    method: 'post',
    data
  })
}

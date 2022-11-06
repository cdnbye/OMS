import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'
import { setItem, getItem } from '@/utils/storage'
import { LOCATION, BASE_URLS } from '@/constant'

const LocMap = {
  cn: 'p1',
  us: 'p2',
  hk: 'p3',
  local: 'd1',
}

let loc = getItem(LOCATION)
// console.warn(`loc ${loc}`)
if (loc) {
  if (LocMap[loc]) {
    loc = LocMap[loc]
    setItem(LOCATION, loc)
  } else {
    setItem(LOCATION, loc)
  }

}

// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_API, // api 的 base_url
  baseURL: BASE_URLS[loc], // api 的 base_url
  timeout: 12000
})

// request interceptor
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    if (store.getters.token) {
      config.headers['MyToken'] = getToken()
    }
    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
   */
  response => {
    const res = response.data
    // console.log(res)
    if (res.ret !== 0) {
      if (res.data) {
        Message({
          message: res.data.msg,
          type: 'error',
          duration: 5 * 1000
        })
      }
      // 处理 token 超时问题
      if (
          res.data &&
          res.data.code === 4001
      ) {
        // token超时
        setTimeout(() => {
          store.dispatch('LogOut').then(() => {
            location.reload()// In order to re-instantiate the vue-router object to avoid bugs
          })
        }, 5000)
      }
      return Promise.reject(res.data)
    } else {
      return response.data
    }
  },
  error => {
    console.log('err' + error)
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service

// request.defaults.baseURL = 'xxxxxx';

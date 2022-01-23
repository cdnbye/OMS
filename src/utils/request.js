import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'
import { getQueryObj } from '@/utils/format'
import { setItem, getItem } from '@/utils/storage'
import { LOCATION, BASE_URLS } from '@/constant'

let { loc } = getQueryObj()
if (!loc) {
  // const cachedLoc = getItem(LOCATION)
  loc = getItem(LOCATION) || process.env.VUE_APP_LOC
  // 缓存
  // if (!cachedLoc) {
  //   setItem(LOCATION, loc)
  // }
} else {
  loc = loc.substring(0, 2)
}
setItem(LOCATION, loc)

// console.warn(`loc ${loc}`)

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
      Message({
        message: res.data.msg,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject('error')
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

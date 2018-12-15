import router from './router/index'
import store from './store'
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth' // getToken from cookie
import { Base64 } from 'js-base64'

// permission judge function
function hasPermission(roles, permissionRoles) {
  // if (roles.indexOf('admin') >= 0)
  //   return true // admin permission passed directly
  if (!permissionRoles)
    return true
  return roles.some(role => permissionRoles.indexOf(role) >= 0)
}

const whiteList = ['/login', '/signup', '/forget_password']// no redirect whitelist

router.beforeEach((to, from, next) => {
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息
        const auth = JSON.parse(Base64.decode(getToken().split('.')[1])).iat === 1 ? 'admin' : 'user'
        store.dispatch('setRole', auth).then(res => {
          const roles = res.roles // note: roles must be a array! such as: ['editor','develop']
          store.dispatch('GenerateRoutes', { roles }).then(() => { // 根据roles权限生成可访问的路由表
            router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
            next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
          })
        }).catch((err) => {
          next({ path: '/' })
        })
      } else {
        if (hasPermission(store.getters.roles, to.meta.roles)) {
          next()
        } else {
          next({ path: '/401', replace: true, query: { noGoBack: true }})
        }
      }
      // if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息
      //   store.dispatch('GetUserInfo').then(res => { // 拉取user_info
      //     const roles = res.data.roles // note: roles must be a array! such as: ['editor','develop']
      //     store.dispatch('GenerateRoutes', { roles }).then(() => { // 根据roles权限生成可访问的路由表
      //       router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
      //       next({ ...to, replace: true }) // hack方法 确保addRoutes已完成
      //     })
      //   }).catch((err) => {
      //     store.dispatch('FedLogOut').then(() => {
      //       Message.error(err || 'Verification failed, please login again')
      //       next({ path: '/' })
      //     })
      //   })
      // } else {
      //   // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
      //   if (hasPermission(store.getters.roles, to.meta.roles)) {
      //     next()
      //   } else {
      //     next({ path: '/401', replace: true, query: { noGoBack: true }})
      //   }
      //   // 可删 ↑
      // }
    }
  } else {
    /* has no token*/
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
      next(`/login`) // 否则全部重定向到登录页
    }
    return 
  }
})


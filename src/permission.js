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
  if(to.path) {
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
      }
    } else {
      /* has no token*/
      if (whiteList.indexOf(to.path) !== -1) {
        next()
      } else {
        next(`/login`)
      }
      return 
    }
  }
})

router.afterEach( ( to, from, next ) => {
  setTimeout(()=>{
    var _hmt = _hmt || [];
    (function() {
        //每次执行前，先移除上次插入的代码
        document.getElementById('baidu_tj') && document.getElementById('baidu_tj').remove();
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?85b9b827ca0754106fbf77580140816d";
        hm.id = "baidu_tj"
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
  },0);
} );

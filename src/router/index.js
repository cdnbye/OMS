import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/views/layout/Layout'

export const constantRouterMap = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: () => import('@/views/login'),
  },
  {
    path: '/signup',
    name: 'signup',
    hidden: true,
    component: () => import('@/views/signup'),
  },
  {
    path: '/forget_password',
    name: 'forgetPassword',
    hidden: true,
    component: () => import('@/views/passwdReset'),
  },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
      }
    ]
  },
]

export const asyncRouterMap = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission',
    alwaysShow: true,
    meta: {
      title: 'permission',
      icon: 'lock',
      roles: ['admin']
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/test/index'),
        name: 'PagePermission',
        meta: {
          title: 'pagePermission',
          roles: ['admin']
        }
      }
    ]
  },

]

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})


// export default new Router({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes: [
//     {
//       path: '/redirect',
//       component: Layout,
//       hidden: true,
//       children: [
//         {
//           path: '/redirect/:path*',
//           component: () => import('@/views/redirect/index')
//         }
//       ]
//     },
//     {
//       path: '/login',
//       name: 'login',
//       component: () => import(/* webpackChunkName: "login" */ './views/login'),
//       hidden: true
//     },
//     {
//       path: '/signup',
//       name: 'signup',
//       component: () => import(/* webpackChunkName: "signup" */ './views/signup'),
//       hidden: true
//     },
//     {
//       path: '/',
//       component: Layout,
//       redirect: 'dashboard',
//       children: [
//         {
//           path: 'dashboard',
//           component: () => import('@/views/dashboard/index'),
//           name: 'Dashboard',
//           meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
//         }
//       ]
//     },
//   ]
// })
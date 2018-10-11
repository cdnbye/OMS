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
    redirect: '/permission/page',
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
  {
    path: '/traffic',
    component: Layout,
    redirect: '/traffic/p2p',
    alwaysShow: true,
    meta: {
      title: 'history',
      icon: 'chart',
      roles: ['admin']
    },
    children: [
      {
        path: 'p2p',
        component: () => import('@/views/historyData/traffic'),
        name: 'P2PTraffic',
        meta: {
          title: 'P2PTraffic',
          roles: ['admin']
        }
      },
      {
        path: 'http',
        component: () => import('@/views/historyData/traffic'),
        name: 'HttpTraffic',
        meta: {
          title: 'HttpTraffic',
          roles: ['admin']
        }
      }
    ]
  }
]

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

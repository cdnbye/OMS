import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/views/layout/Layout'
import adminRouter from './modules/adminRouter'
import userRouter from './modules/userRouter'

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
  }
]

// 动态路由
export const asyncRouterMap = [

  //admin router
  ...adminRouter,

  //user router
  ...userRouter,

  //修改邮箱密码
  {
    path: '/user/edit',
    component: Layout,
    redirect: '/',
    hidden: true,
    meta: {
      title: 'edit',
      roles: ['admin', 'user']
    },
    children: [
      {
        path: '/',
        component: () => import('@/views/editMailPwd'),
        name: 'Edit',
        meta: {
          title: 'edit',
          roles: ['admin', 'user'],
        }
      }
    ]
  },
]

export default new Router({
  // mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

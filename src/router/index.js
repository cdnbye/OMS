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
    path: '',
    component: Layout,
    redirect: 'bandwidth',
    alwaysShow: true,
    meta: {
      title: 'Operational',
      icon: 'chart',
      roles: ['admin']
    },
    children: [
      {
        path: 'bandwidth',
        component: () => import('@/views/historyData/bandwidth'),
        name: 'bandwidth',
        meta: {
          title: 'bandwidth',
          roles: ['admin']
        }
      },
      {
        path: 'p2p_rate',
        component: () => import('@/views/historyData/p2pRate'),
        name: 'P2PRate',
        meta: {
          title: 'p2pRate',
          roles: ['admin']
        }
      },
      {
        path: 'online',
        component: () => import('@/views/historyData/online'),
        name: 'Online',
        meta: {
          title: 'online',
          roles: ['admin']
        }
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    redirect: 'user/domain',
    alwaysShow: true,
    meta: {
      title: 'userData',
      icon: 'table',
      roles: ['admin']
    },
    children: [
      {
        path: 'domain',
        component: () => import('@/views/userData/index'),
        name: 'Domain',
        meta: {
          title: 'domain',
          roles: ['admin']
        }
      },
      {
        path: 'whole',
        component: () => import('@/views/test/index'),
        name: 'Whole',
        meta: {
          title: 'whole',
          roles: ['admin']
        }
      },
      {
        path: 'list',
        component: () => import('@/views/userData/userList'),
        name: 'List',
        meta: {
          title: 'list',
          roles: ['admin']
        }
      },
      {
        path: 'user_domain',
        component: () => import('@/views/userData/bindDomain'),
        name: 'UserDomain',
        meta: {
          title: 'userDomain',
          roles: ['admin']
        }
      }
    ]
  },
  {
    path: '/distribution',
    component: Layout,
    redirect: 'distribution/china',
    alwaysShow: true,
    meta: {
      title: 'userDistribution',
      icon: 'people',
      roles: ['admin']
    },
    children: [
      {
        path: 'china',
        component: () => import('@/views/userDistribution/china'),
        name: 'ChinaDistribution',
        meta: {
          title: 'chinaDistribution',
          roles: ['admin']
        }
      },
      {
        path: 'world',
        component: () => import('@/views/userDistribution/world'),
        name: 'WorldDistribution',
        meta: {
          title: 'worldDistribution',
          roles: ['admin']
        }
      }
    ]
  },
  {
    path: '/config',
    component: Layout,
    redirect: 'config/tracker',
    alwaysShow: true,
    meta: {
      title: 'config',
      icon: 'edit',
      roles: ['admin']
    },
    children: [
      {
        path: 'tracker',
        component: () => import('@/views/trackerConfig/index'),
        name: 'TrackerConfig',
        meta: {
          title: 'trackerConfig',
          roles: ['admin']
        }
      },
      {
        path: 'user',
        component: () => import('@/views/test/index'),
        name: 'UserConfig',
        meta: {
          title: 'userConfig',
          roles: ['admin']
        }
      }
    ]
  },
]

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

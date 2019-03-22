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
  }
]

export const asyncRouterMap = [
  {
    path: '/',
    component: Layout,
    redirect: '/liveData',
    alwaysShow: true,
    meta: {
      title: 'dashboard',
      icon: 'dashboard',
      roles: ['admin']
    },
    children: [
      {
        path: '/liveData',
        component: () => import('@/views/dashboard/LiveData'),
        name: 'LiveData',
        meta: {
          title: 'liveData',
          roles: ['admin'],
          noCache: true
        }
      },
      {
        path: '/pieChart',
        component: () => import('@/views/dashboard/Distribution'),
        name: 'PieChart',
        meta: {
          title: 'disChart',
          roles: ['admin'],
          noCache: true
        }
      }
    ]
  },
  //user router
  {
    path: '/user',
    component: Layout,
    redirect: 'user/domain',
    meta: {
      title: 'domainInfo',
      icon: 'table',
      roles: ['user']
    },
    children: [
      {
        path: 'domain',
        component: () => import('@/views/userData/bindDomain'),
        name: 'Domain',
        meta: {
          title: 'domainInfo',
          roles: ['user']
        }
      }
    ]
  },


  {
    path: '/',
    component: Layout,
    redirect: '/user/liveData',
    hidden: true,
    meta: {
      title: 'dashboard',
      icon: 'dashboard',
      roles: ['admin']
    },
    children: [
      {
        path: '/user/liveData',
        component: () => import('@/views/dashboard/user/LiveData'),
        name: 'UserLiveData',
        meta: { 
          title: 'basicAnalysis', 
          icon: 'dashboard', 
          roles: ['admin'],
          noCache: true
        }
      }
    ]
  },



  //user router
  {
    path: '/',
    component: Layout,
    redirect: '/user/liveData',
    meta: {
      title: 'dashboard',
      icon: 'dashboard',
      roles: ['user']
    },
    children: [
      {
        path: '/user/liveData',
        component: () => import('@/views/dashboard/user/LiveData'),
        name: 'UserLiveData',
        meta: { 
          title: 'basicAnalysis', 
          icon: 'dashboard', 
          roles: ['user'],
          noCache: true
        }
      }
    ]
  },
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
    path: '/history',
    component: Layout,
    redirect: '/history/bandwidth',
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
        component: () => import('@/views/historyData/P2P'),
        name: 'P2PRate',
        meta: {
          title: 'p2pRate',
          roles: ['admin']
        }
      },
      {
        path: 'online',
        component: () => import('@/views/historyData/OnlineNum'),
        name: 'Online',
        meta: {
          title: 'online',
          roles: ['admin']
        }
      }
    ]
  },
  // user router
  {
    path: '/history',
    component: Layout,
    redirect: '/history/P2P',
    alwaysShow: true,
    meta: {
      title: 'dataAnalysis',
      icon: 'chart',
      roles: ['user']
    },
    children: [
      {
        path: 'p2p_rate',
        component: () => import('@/views/historyData/P2P'),
        name: 'P2PRate',
        meta: {
          title: 'p2pTraffic',
          roles: ['user']
        }
      },
      {
        path: 'online',
        component: () => import('@/views/historyData/OnlineNum'),
        name: 'Online',
        meta: {
          title: 'onlineNum',
          roles: ['user']
        }
      }
    ]
  },
  // user router
  {
    path: '/distribution',
    component: Layout,
    redirect: 'distribution/china',
    alwaysShow: true,
    meta: {
      title: 'userDistribution',
      icon: 'people',
      roles: ['user']
    },
    children: [
      {
        path: 'china',
        component: () => import('@/views/userDistribution/China'),
        name: 'ChinaDistribution',
        meta: {
          title: 'chinaDistribution',
          roles: ['user']
        }
      },
      {
        path: 'world',
        component: () => import('@/views/userDistribution/World'),
        name: 'WorldDistribution',
        meta: {
          title: 'worldDistribution',
          roles: ['user']
        }
      }
    ]
  },
  // user router 套餐列表
  {
    path: '/user',
    component: Layout,
    redirect: '/user/package',
    meta: {
      title: 'package',
      icon: 'shoppingCard',
      roles: ['user']
    },
    children: [
      {
        path: '/user/package',
        component: () => import('@/views/package'),
        name: 'Package',
        meta: { 
          title: 'package', 
          icon: 'shoppingCard', 
          roles: ['user'],
          noCache: true
        }
      }
    ]
  },
  // user router 订单详情
  {
    path: '/user',
    component: Layout,
    redirect: '/user/package/detail',
    hidden: true,
    meta: {
      title: 'package',
      roles: ['user']
    },
    children: [
      {
        path: '/user/package/detail',
        component: () => import('@/views/package/OrderDetail'),
        name: 'OrderDetail',
        meta: { 
          hide: true,
          roles: ['user'],
          noCache: true
        }
      }
    ]
  },
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
        component: () => import('@/views/userDistribution/China'),
        name: 'ChinaDistribution',
        meta: {
          title: 'chinaDistribution',
          roles: ['admin']
        }
      },
      {
        path: 'world',
        component: () => import('@/views/userDistribution/World'),
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
      },
    ]
  },

]

export default new Router({
  // mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

import Layout from '@/views/layout/Layout'
import { navLang } from '@/utils/i18n'

const userRouter = [
    {
        path: '/user',            // 对应浏览器路径
        component: Layout,
        redirect: 'user/domain',
        alwaysShow: false,         //  是否显示到sidebar中，如修改密码邮箱就不显示，值为false
        meta: {
            title: 'domainInfo',     // sidebar中的名称，对应多语言中的字段  /src/lang
            icon: 'www',             // sidebar中的图标，对应icons中的字段  /src/icons
            roles: ['user']          // 路由对应的用户，admin为管理员，user为用户
        },
        children: [
            {
                path: 'domain',
                component: () => import('@/views/userData/bindDomain'),
                name: 'Domain',
                meta: {
                    title: 'domainInfo',
                    roles: ['user'],
                    noCache: true,     // 是否缓存
                }
            }
        ]
    },

    {
        path: '/app',
        component: Layout,
        redirect: 'user/app',
        meta: {
            title: 'appInfo',
            icon: 'app',
            roles: ['user']
        },
        children: [
            {
                path: 'app',
                component: () => import('@/views/app'),
                name: 'App',
                meta: {
                    title: 'appInfo',
                    roles: ['user']
                }
            }
        ]
    },

    {
        path: '/',
        component: Layout,
        redirect: '/user/liveDataGlobal',
        meta: {
            title: 'liveData',
            icon: 'example',
            roles: ['user']
        },
        children: [
            {
                path: '/user/liveDataGlobal',
                component: () => import('@/views/dashboard/user/liveDataGlobal'),
                name: 'UserLiveDataGlobal',
                meta: {
                    title: 'liveDataGlobal',
                    roles: ['user'],
                    noCache: true
                }
            },
            {
                path: '/user/liveData',
                component: () => import('@/views/dashboard/user/liveData'),
                name: 'UserLiveData',
                meta: {
                    title: 'liveDataPerApp',
                    roles: ['user'],
                    noCache: true
                }
            },
            {
                path: '/user/hotChannel',
                component: () => import('@/views/dashboard/user/hotChannel'),
                name: 'hotChannel',
                meta: {
                    title: 'hotChannel',
                    roles: ['user'],
                    noCache: true
                }
            },
            {
                path: '/user/geofly',
                component: () => import('@/views/geofly'),
                name: 'geofly',
                meta: {
                    title: 'geofly',
                    roles: ['user'],
                    noCache: true
                }
            }
        ]
    },

    // {
    //     path: '/channels',
    //     component: Layout,
    //     redirect: '/user/hotChannel',
    //     meta: {
    //         title: 'dashboard',
    //         icon: 'peoples',
    //         roles: ['user']
    //     },
    //     children: [
    //
    //     ]
    // },

    // user router 历史数据
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
                component: () => import('@/views/historyData/Traffic'),
                name: 'P2PRate',
                meta: {
                    title: 'p2pTraffic',
                    roles: ['user'],
                    noCache: true
                }
            },
            {
                path: 'p2p_rate_global',
                component: () => import('@/views/historyData/user/TrafficGlobal'),
                name: 'P2PRateGlobal',
                meta: {
                    title: 'p2pTrafficGlobal',
                    roles: ['user'],
                    noCache: true
                }
            },
            {
                path: 'online',
                component: () => import('@/views/historyData/OnlineNum'),
                name: 'Online',
                meta: {
                    title: 'onlineNum',
                    roles: ['user'],
                    noCache: true
                }
            },
            {
                path: 'online_global',
                component: () => import('@/views/historyData/user/OnlineGlobal'),
                name: 'OnlineGlobal',
                meta: {
                    title: 'onlineNumGlobal',
                    roles: ['user'],
                    noCache: true
                }
            }
        ]
    },

    {
        path: '/distribution',
        component: Layout,
        redirect: 'distribution/world',
        alwaysShow: true,
        meta: {
            title: 'userDistribution',
            icon: 'international',
            roles: ['user']
        },
        children: [
            {
                path: 'world',
                component: () => import('@/views/userDistribution/World'),
                name: 'WorldDistribution',
                meta: {
                    title: 'worldDistribution',
                    roles: ['user']
                }
            },
            {
                path: 'usa',
                component: () => import('@/views/userDistribution/USA'),
                name: 'USADistribution',
                meta: {
                    title: 'USADistribution',
                    roles: ['user']
                }
            },
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
                path: 'worldGlobal',
                component: () => import('@/views/userDistribution/user/WorldGlobal'),
                name: 'WorldDisGlobal',
                meta: {
                    title: 'worldDisGlobal',
                    roles: ['user']
                }
            },
            {
                path: 'usaGlobal',
                component: () => import('@/views/userDistribution/user/USAGlobal'),
                name: 'USADisGlobal',
                meta: {
                    title: 'USADisGlobal',
                    roles: ['user']
                }
            },
            {
                path: 'chinaGlobal',
                component: () => import('@/views/userDistribution/user/ChinaGlobal'),
                name: 'ChinaDisGlobal',
                meta: {
                    title: 'chinaDisGlobal',
                    roles: ['user']
                }
            },
        ]
    },

    // 购物
    {
        path: '/shopping',
        component: Layout,
        redirect: '/shopping/package',
        meta: {
            title: 'shopping',
            icon: 'shoppingCard',
            roles: ['user']
        },
        children: [
            {
                path: '/shopping/package',
                component: () => import('@/views/package/package'),
                name: 'Package',
                meta: {
                    title: 'package',
                    roles: ['user'],
                    noCache: true
                }
            },
            {
                path: '/shopping/monthly_package',
                component: () => import('@/views/package/monthlyPackage'),
                name: 'MonthlyPackage',
                meta: {
                    title: 'monthlyPackage',
                    roles: ['user'],
                    noCache: true
                }
            }
        ],
    },

    // user router 订单详情
    {
        path: '/shopping',
        component: Layout,
        redirect: '/shopping/package/detail',
        hidden: true,
        meta: {
            title: 'package',
            roles: ['user']
        },
        children: [
            {
                path: '/shopping/package/detail',
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

    // user router 历史订单
    {
        path: '/order',
        component: Layout,
        redirect: '/user/order',
        meta: {
            title: 'order',
            icon: 'list',
            roles: ['user']
        },
        children: [
            {
                path: '/user/order',
                component: () => import('@/views/historyOrder/user/OrderTable'),
                name: 'HistoryOrder',
                meta: {
                    title: 'order',
                    roles: ['user'],
                    noCache: true
                }
            }
        ]
    },

    // user router P2P配置
    {
        path: '/user',
        component: Layout,
        redirect: '/user/p2pSwitch',
        meta: {
            title: 'p2pConfig',
            icon: 'form',
            roles: ['user']
        },
        children: [
            {
                path: 'p2pSwitch',
                component: () => import('@/views/p2pConfig/user/p2pSwitch'),
                name: 'p2pSwitch',
                meta: {
                    title: 'p2pSwitch',
                    roles: ['user'],
                    noCache: true
                }
            },
            {
                path: 'signalManage',
                component: () => import('@/views/p2pConfig/user/signalManage'),
                name: 'signalManage',
                meta: {
                    title: 'signalManage',
                    roles: ['user'],
                    noCache: true
                }
            },
            {
                path: 'uploadRule',
                component: () => import('@/views/p2pConfig/user/uploadRule'),
                name: 'uploadRule',
                meta: {
                    title: 'uploadRule',
                    roles: ['user'],
                    noCache: true
                }
            },
            {
                path: 'activationRatio',
                component: () => import('@/views/p2pConfig/user/activationRatio'),
                name: 'activationRatio',
                meta: {
                    title: 'activationRatio',
                    roles: ['user'],
                    noCache: true
                }
            },
            {
                path: 'stunManage',
                component: () => import('@/views/p2pConfig/user/stunManage'),
                name: 'stunManage',
                meta: {
                    title: 'stunManage',
                    roles: ['user'],
                    noCache: true
                }
            },
        ]
    },
]

if (navLang() === 'zh') {
    userRouter.splice(8, 0, {
        path: '/invoice',
        component: Layout,
        redirect: '/user/invoice',
        meta: {
            title: 'invoice',
            icon: 'invoice',
            roles: ['user']
        },
        children: [
            {
                path: '/user/invoice',
                component: () => import('@/views/package/Invoice'),
                name: 'Invoices',
                meta: {
                    title: 'invoices',
                    roles: ['user'],
                    noCache: true
                }
            }
        ]
    })
}

export default userRouter

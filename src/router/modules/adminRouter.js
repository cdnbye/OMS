import Layout from '@/views/layout/Layout'

export default [
    {
        path: '/',
        component: Layout,
        redirect: '/liveData',
        alwaysShow: true,
        meta: {
            title: 'liveDataAdmin',
            icon: 'dashboard',
            roles: ['admin']
        },
        children: [
            {
                path: '/liveData',
                component: () => import('@/views/dashboard/liveData'),
                name: 'LiveData',
                meta: {
                    title: 'liveDataAdmin',
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
            },
            {
                path: '/hotChannel',
                component: () => import('@/views/dashboard/admin/hotChannel'),
                name: 'hotChannel',
                meta: {
                    title: 'hotChannel',
                    roles: ['admin'],
                    noCache: true
                }
            },
            {
                path: '/geofly',
                component: () => import('@/views/geofly'),
                name: 'geofly',
                meta: {
                    title: 'geofly',
                    roles: ['admin'],
                    noCache: true
                }
            },
            {
                path: '/overall',
                component: () => import('@/views/dashboard/admin/OverallData'),
                name: 'OverallData',
                meta: {
                    title: 'overallData',
                    roles: ['admin'],
                    noCache: true
                }
            },
        ]
    },

    {
        path: '/user',
        component: Layout,
        redirect: 'user/domain_list',
        alwaysShow: true,
        meta: {
            title: 'userData',
            icon: 'table',
            roles: ['admin']
        },
        children: [
            {
                path: 'domain_list',
                component: () => import('@/views/userData/index'),
                name: 'Domain',
                meta: {
                    title: 'domain',
                    roles: ['admin'],
                    noCache: true
                }
            },
            {
                path: 'review',
                component: () => import('@/views/userData/reviewDomainList'),
                name: 'Review',
                meta: {
                    title: '待审核域名',
                    roles: ['admin'],
                    noCache: true
                }
            },
            {
                path: 'list',
                component: () => import('@/views/userData/userList'),
                name: 'List',
                meta: {
                    title: 'list',
                    roles: ['admin'],
                    noCache: true
                }
            },
            {
                path: 'domains',
                component: () => import('@/views/userData/DomainList'),
                name: 'DomainList',
                meta: {
                    title: '所有域名',
                    roles: ['admin'],
                    noCache: true
                }
            },
            {
                path: 'invoices',
                component: () => import('@/views/userData/invoiceList'),
                name: 'invoices',
                meta: {
                    title: '待开发票',
                    roles: ['admin'],
                    noCache: true
                }
            },
        ]
    },

    {
        path: '/financial',
        component: Layout,
        redirect: '/financial/page',
        alwaysShow: true,
        meta: {
            title: 'financial',
            icon: 'documentation',
            roles: ['admin']
        },
        children: [
            {
                path: 'trades',
                component: () => import('@/views/historyOrder/admin/OrderTable'),
                name: 'Trades',
                meta: {
                    title: '所有交易',
                    roles: ['admin'],
                    noCache: true
                }
            },
            {
                path: 'page',
                component: () => import('@/views/financeInfo/admin/Global'),
                name: 'Financial',
                meta: {
                    title: 'financial',
                    roles: ['admin']
                }
            },
            {
                path: 'trend',
                component: () => import('@/views/financeInfo/admin/IncomeTrend'),
                name: 'Trend',
                meta: {
                    title: 'incomeTrend',
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
                component: () => import('@/views/historyData/admin/Traffic'),
                name: 'bandwidth',
                meta: {
                    title: 'bandwidth',
                    roles: ['admin'],
                    noCache: true
                }
            },
            {
                path: 'online',
                component: () => import('@/views/historyData/OnlineNum'),
                name: 'Online',
                meta: {
                    title: 'online',
                    roles: ['admin'],
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
            icon: 'people',
            roles: ['admin']
        },
        children: [
            {
                path: 'world',
                component: () => import('@/views/userDistribution/World'),
                name: 'WorldDistribution',
                meta: {
                    title: '全球',
                    roles: ['admin'],
                    noCache: true
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
                component: () => import('@/views/trackerConfig/tracker'),
                name: 'TrackerConfig',
                meta: {
                    title: 'trackerConfig',
                    roles: ['admin'],
                    noCache: true
                }
            },
            {
                path: 'signal',
                component: () => import('@/views/trackerConfig/signal'),
                name: 'Signal',
                meta: {
                    title: 'SignalConfig',
                    roles: ['admin'],
                    noCache: true
                }
            },
            {
                path: 'seeder',
                component: () => import('@/views/trackerConfig/seeder'),
                name: 'Seeder',
                meta: {
                    title: 'SeederConfig',
                    roles: ['admin'],
                    noCache: true
                }
            },
            {
                path: 'announce',
                component: () => import('@/views/trackerConfig/announce'),
                name: 'Announce',
                meta: {
                    title: 'AnnounceConfig',
                    roles: ['admin'],
                    noCache: true
                }
            },
            {
                path: 'blockOrigins',
                component: () => import('@/views/trackerConfig/blockOrigins'),
                name: 'blockOrigins',
                meta: {
                    title: 'BlockOriginsConfig',
                    roles: ['admin'],
                    noCache: true
                }
            },
            {
                path: 'blockIps',
                component: () => import('@/views/trackerConfig/blockIps'),
                name: 'blockIps',
                meta: {
                    title: 'BlockIpsConfig',
                    roles: ['admin'],
                    noCache: true
                }
            },
            {
                path: 'allowIps',
                component: () => import('@/views/trackerConfig/allowIps'),
                name: 'allowIps',
                meta: {
                    title: 'AllowIpsConfig',
                    roles: ['admin'],
                    noCache: true
                }
            },
            {
                path: 'signalToken',
                component: () => import('@/views/trackerConfig/signalToken'),
                name: 'signalToken',
                meta: {
                    title: '信令Token',
                    roles: ['admin'],
                    noCache: true
                }
            }
        ]
    },

    {
        path: '/inspect',
        component: Layout,
        redirect: 'inspect/peer',
        alwaysShow: true,
        meta: {
            title: 'Inspect',
            icon: 'edit',
            roles: ['admin']
        },
        children: [
            {
                path: 'peer',
                component: () => import('@/views/inspect/PeerInfo'),
                name: 'PeerInfo',
                meta: {
                    title: 'PeerInfo',
                    roles: ['admin'],
                    noCache: true
                }
            }
        ],
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
                component: () => import('@/views/dashboard/user/liveData'),
                name: 'UserLiveData',
                meta: {
                    title: 'basicAnalysis',
                    roles: ['admin'],
                    noCache: true
                }
            }
        ]
    },

    {
        path: '/seeder_stats',
        component: Layout,
        hidden: true,
        meta: {
            title: 'seederStats',
            roles: ['admin']
        },
        children: [
            {
                path: '/',
                component: () => import('@/views/trackerConfig/seederStats'),
                name: 'AdminSeederStats',
                meta: {
                    hide: true,
                    roles: ['admin'],
                    noCache: true
                }
            }
        ]
    },
]

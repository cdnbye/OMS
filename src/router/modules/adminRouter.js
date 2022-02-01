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
                    roles: ['admin']
                }
            },
            {
                path: 'review',
                component: () => import('@/views/userData/reviewDomainList'),
                name: 'Review',
                meta: {
                    title: '待审核域名',
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
                path: 'invoices',
                component: () => import('@/views/userData/invoiceList'),
                name: 'invoices',
                meta: {
                    title: '待开发票',
                    roles: ['admin']
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
                path: 'page',
                component: () => import('@/views/financeInfo'),
                name: 'Financial',
                meta: {
                    title: 'financial',
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
                    roles: ['admin'],
                    noCache: true
                }
            },
            {
                path: 'p2p_rate',
                component: () => import('@/views/historyData/Traffic'),
                name: 'P2PRate',
                meta: {
                    title: 'p2pRate',
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
                path: 'usa',
                component: () => import('@/views/userDistribution/USA'),
                name: 'USADistribution',
                meta: {
                    title: 'USADistribution',
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
]

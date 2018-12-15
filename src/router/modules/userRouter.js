import Layout from '@/views/layout/Layout'

const userRouter = [
  {
    path: '',
    component: Layout,
    redirect: 'liveData',
    meta: {
      title: 'dashboard',
      icon: 'dashboard',
      roles: ['user']
    },
    children: [
      {
        path: 'liveData',
        component: () => import('@/views/dashboard/LiveData'),
        name: 'LiveData',
        meta: { 
          title: 'liveData', 
          icon: 'dashboard', 
          roles: ['user'],
          noCache: true
        }
      }
    ]
  },
  {}
]

export default userRouter

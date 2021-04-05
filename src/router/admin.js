
import Index from '@/layouts/admin/Index'

export default {
  path: '/admin',
  redirect: { name: 'admin.home' },
  component: Index,
  children: [
    {
      path: 'home',
      name: 'admin.home',
      component: () => import('@/views/admin/Dashboard.vue'),
      meta: { requireLogin: false },
      props: {
        title: 'Home'
      }
    }
  ]
}
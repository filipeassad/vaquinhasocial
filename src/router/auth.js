
import Auth from '@/layouts/auth/Auth'

export default {
  path: '/auth',
  redirect: { name: 'auth.login' },
  component: Auth,
  children: [
    {
      path: 'login',
      name: 'auth.login',
      component: () => import('@/views/auth/Login.vue'),
      meta: { requireLogin: false },
      props: {
        title: 'Login'
      }
    }
  ]
}
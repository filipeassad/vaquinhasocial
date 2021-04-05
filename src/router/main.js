import Main from '@/layouts/main/Main'

export default {
  path: '/',
  redirect: { name: 'main.home' },
  component: Main,
  children: [
    {
      path: '',
      name: 'main.home',
      component: () => import('@/views/main/Home.vue'),
      meta: { requireLogin: false },
      props: {
        title: 'Início'
      }
    }
  ]
}
export default {
  path: '/home',
  name: '订单中心',
  component: () => import('@/pages/home-page'),
  children: [
    {
      path: 'about',
      name: '关于',
      meta: { invisible: false },
      component: () => import('@/pages/about/about-index'),
    },
  ],
}

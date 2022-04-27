import VueRouter from 'vue-router'
import pages from './modules/page'

const routes = []
routes.push(pages)

const router = new VueRouter({
  routes,
})

export default router
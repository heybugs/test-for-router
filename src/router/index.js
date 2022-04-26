import VueRouter from 'vue-router'
import pages from './modules/page'
const routes = [...pages]
const router = new VueRouter({
  routes: routes
})

export default{
  router
}
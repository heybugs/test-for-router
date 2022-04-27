import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router/index'

Vue.config.productionTip = false

new Vue({
  router, //挂载路由实例
  render: (h) => h(App),
}).$mount('#app')

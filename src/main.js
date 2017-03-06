import Vue from 'vue'
import Main from './components/main.vue'
import store from './store'
import VueRouter from 'vue-router'
import router from './routes'
import { sync } from 'vuex-router-sync'

Vue.use(VueRouter)

sync(store, router)
export const app = new Vue({
  router,
  store,
  render: (h) => h(Main)
})

app.$mount('#app')

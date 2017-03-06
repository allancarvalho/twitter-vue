import VueRouter from 'vue-router'
import Home from './components/home.vue'
import Hello from './components/hello.vue'
import Count from './components/count.vue'
import Product from './components/product.vue'
const routes = [{
  path: '/',
  component: Home,
  children: [{
    path: 'count', component: Count
  }, {
    path: 'hello', component: Hello
  }]
}, {
  path: '/produto/:id',
  component: Product
}]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

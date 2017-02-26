import Vue from 'vue';
import Home from './components/home.vue';
import store from './store';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';
import VueRouter from 'vue-router';
import router from './routes';

Vue.use(VueRouter);
Vue.use(VueMaterial);

new Vue({
    store,
    router,
  //   render: (h) => h(`
  //   <div id="app">
  //     <h1>Transitions</h1>
  //     <ul>
  //       <li><router-link to="/">/</router-link></li>
  //       <li><router-link to="/parent">/parent</router-link></li>
  //       <li><router-link to="/parent/foo">/parent/foo</router-link></li>
  //       <li><router-link to="/parent/bar">/parent/bar</router-link></li>
  //     </ul>
  //     <transition name="fade" mode="out-in">
  //       <router-view class="view"></router-view>
  //     </transition>
  //   </div>
  // `),
    render: (h) => h(Home),
}).$mount('#app');

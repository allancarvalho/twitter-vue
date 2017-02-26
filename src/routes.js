import VueRouter from 'vue-router';
import Main from './components/main.vue';
import Hello from './components/hello.vue';
import Count from './components/count.vue';
const routes = [{
    path: '/',
    component: Main,
    children: [{
        path: 'count', component: Count,
    }, {
        path: 'hello', component: Hello,
    }],
}];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;

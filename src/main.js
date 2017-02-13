import Vue from 'vue';
import Main from './components/main.vue';
import store from './store';

new Vue({
    el: '#app',
    store,
    render: (h) => h(Main),
});

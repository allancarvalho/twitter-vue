import Vue from 'vue';
import Main from './components/main.vue'
import Vuex from 'vuex'

Vue.use(Vuex);

new Vue({
    el: '#app',
    render: h => h(Main)
});

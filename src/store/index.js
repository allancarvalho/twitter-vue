import Vue from 'vue'
import Vuex from 'vuex'
// import product from '../modules/product'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    product: {}
  },
  actions,
  mutations,

})

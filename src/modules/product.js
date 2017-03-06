import axios from 'axios'
import Vue from 'vue'
export default {
  state: {},
  mutations: {
    FETCH_PRODUCT_START (state, payload) {
      Vue.set(state, payload.productId, {
        loading: true
      })
    },
    FETCH_PRODUCT_SUCCESS (state, payload) {
      Vue.set(state, payload.product.result.id, {
        name: payload.product.result.name,
        images: payload.product.result.images,
        id: payload.product.result.id
      })
    }
  },
  actions: {
    getProduct ({ commit, state, rootState }) {
      const productId = rootState.route.params.id
      commit('FETCH_PRODUCT_START', { productId })
      axios.get(`https://pdgnamedquery-v1-americanas.b2w.io/run-pdg/product-without-promotion-no-installment/revision/1?id=${productId}&offerLimit=1&opn=YSMESP&productTags=prebf%2A%257CSUL_SUDESTE_CENTRO%257Clivros_prevenda&storeId=nil`)
          .then(({ data }) => {
            commit('FETCH_PRODUCT_SUCCESS', data)
          })
          .catch((e) => {
            commit('FETCH_PRODUCT_FAILURE')
          })
    }
  },
  getters: {
    product (state, getters, rootState) {
      if (getters.hasProduct) {
        return state[getters.idProduct]
      }
      return {}
    },
    idProduct (state, getters, rootState) {
      return rootState.route.params.id
    },
    hasProduct (state, getters) {
      return state[getters.idProduct] && !state[getters.idProduct].loading
    }
  }
}

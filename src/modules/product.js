import axios from 'axios'

export default {
  state: {},
  mutations: {
    FETCH_PRODUCT_START (state, payload) {
      state[payload.productId] = {
        loading: true
      }
    },
    FETCH_PRODUCT_SUCCESS (state, payload) {
      state[payload.product.result.id] = {
        name: payload.product.result.name,
        id: payload.product.result.id
      }
    }
  },
  actions: {
    getProduct ({ commit, state, rootState }) {
      const productId = rootState.route.params.id
      commit('FETCH_PRODUCT_START', { productId })
      setTimeout(() => {
        axios.get(`https://pdgnamedquery-v1-americanas.b2w.io/run-pdg/product-without-promotion-no-installment/revision/1?id=${productId}&offerLimit=1&opn=YSMESP&productTags=prebf%2A%257CSUL_SUDESTE_CENTRO%257Clivros_prevenda&storeId=nil`)
        .then(({ data }) => {
          commit('FETCH_PRODUCT_SUCCESS', data)
        })
        .catch((e) => {
          commit('FETCH_PRODUCT_FAILURE')
        })
      }, 3000)
    }
  },
  getters: {
    product (state, getters, rootState) {
      // console.log(state, getters, rootState)
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

import axios from 'axios'

export default {
  getProduct ({ commit, state }) {
    const productId = state.route.params.id
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
}

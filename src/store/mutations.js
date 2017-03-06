export default {
  FETCH_PRODUCT_START (state, payload) {
    state.product = {
      loading: true
    }
  },
  FETCH_PRODUCT_SUCCESS (state, payload) {
    state.product = {
      name: payload.product.result.name,
      id: payload.product.result.id
    }
  }
}

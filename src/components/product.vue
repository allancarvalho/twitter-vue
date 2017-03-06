<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    beforeMount() {
      this.$store.dispatch('getProduct');
    },
    computed: {
      product() {
        return this.$store.state.product;
      },
      hasProduct() {
        return this.$store.state.product && !this.$store.state.product.loading
      }
    }
  }
</script>
<template>
  <div v-if="hasProduct">
    <h1>Product Id : {{product.name}}</h1>
  </div>
</template>
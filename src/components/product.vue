<script>
  import { mapState, mapActions, mapGetters } from 'vuex'
  import router from '../routes';
  import store from '../store';
  export default {
    created() {
      this.fetchData();
    },
    methods: {
      navigate() {
        router.push({ path: '/produto/121923346?a=1' })
      },
      fetchData() {
        // dispatch('moduleA:increment')
        store.dispatch('getProduct');
      }
    },
    watch: {
      '$route': 'fetchData'
    },
    computed: mapGetters([
      'product',
      'hasProduct'
    ])
  }
</script>
<template>
  <div>
    <h1>{{this.product.name}} ()</h1>
    <button @click="navigate">Navegar</button>
  </div>
</template>
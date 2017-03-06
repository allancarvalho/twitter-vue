<script>
  import { mapState, mapActions, mapGetters } from 'vuex'
  import router from '../routes';
  export default {
    created() {
      this.fetchData();
    },
    methods: {
      navigate() {
        router.push({ path: '/produto/121923346' })
      },
      fetchData() {
        this.$store.dispatch('getProduct');
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
  <div v-if="hasProduct">
    <h1>{{product.name}} ()</h1>
    <img v-for="image in product.images" :src="image.large"/>
    <button @click="navigate">Navegar</button>
  </div>
</template>
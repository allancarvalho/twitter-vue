<script>
    import { mapState, mapActions } from 'vuex'
    export default {
        name: 'app',
        methods: mapActions(['updateMessage', 'increment', 'decrement']),
        computed: mapState([
              'user',
              'count',
              'message',
          ])

    }
</script>

<template>
  <div>
    <p> {{ user.name }} </p>
    <div>
      {{ count }}
    </div>

    <button @click="increment">
      +1
    </button>
    <button @click="decrement">
        -1
    </button>
    <hr>
    <div>
      <input :value="message" @input="updateMessage">
      <p>Message is: {{ message }}</p>
    </div>
  </div>
</template>
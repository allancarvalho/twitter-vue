<script>
    import { mapState, mapActions } from 'vuex'
    export default {
        name: 'app',
        methods: mapActions(['changeName', 'increment', 'decrement']),
        computed: {
            message: '',    
        ...mapState([
            'user',
            'count',
        ])
        },
    }
</script>

<template>
    <div>
        <p> {{ user.name }} </p>
        <div>
            {{ count }}
        </div>

        <button @click="changeName">
            Mudar nome
        </button>
        <button @click="increment">
            +1
        </button>
        <button @click="decrement">
            -1
        </button>
        <hr>
        <div>
            <input v-model="message" placeholder="edit me">
            <p>Message is: {{ message }}</p>
        </div>
    </div>
</template>
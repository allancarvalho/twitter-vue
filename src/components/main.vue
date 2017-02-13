<script>
    export default {
        name: 'app',
        data: () => ({
            message: 'Welcome 123'
        })
    }
</script>

<style>
body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    background: #2c3e50;
    color: #fff;
}
</style>
<template>
    <div>
        <h1>Hello world</h1>
        <p> {{ message }}</p>
    </div>
</template>
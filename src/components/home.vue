<style>
body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
<template>
    <div>
        <h2>User {{ $route.params.id }}</h2>
        <router-link to="/">Home</router-link>
        <router-link to="/hello">Hello</router-link>
        <router-link to="/count">Count</router-link>
        <router-view></router-view>
    </div>
</template>
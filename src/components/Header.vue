<template>
    <header>
        <router-link to="/">
            <h1>{{ title }}</h1>
        </router-link>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        props: {
            title: String
        }

    }
</script>

<style scoped>
    header {
        background: #111;
        color: white;
        padding: 10px;
    }

    header a {
        text-decoration: none;
        color: #f7f7f7;
    }
</style>
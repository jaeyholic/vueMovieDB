<template>
  <div id="app">
    <Header :title="title" />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'app',
  data() {
    return {
      title: 'Vue Movie DB'
    }
  },
  components: {
    Header
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background: #222;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}
</style>

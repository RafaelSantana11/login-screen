<template>
  <div id="app">
    <AuthScreen msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import AuthScreen from './components/AuthScreen'

export default {
  name: 'App',
  components: {
    AuthScreen
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

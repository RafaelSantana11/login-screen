<template>
  <v-app>
    <AuthScreen />
  </v-app>
</template>

<script>
import AuthScreen from "./components/AuthScreen";

export default {
  name: "App",
  components: {
    AuthScreen,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700&display=swap");

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

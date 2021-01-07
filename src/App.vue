<template>
  <div id="app">
    <Sleeper />
  </div>
</template>

<script>
import Sleeper from "./components/Sleeper.vue";

export default {
  name: "App",
  components: {
    Sleeper
  }
};
</script>

<style>
body {
  background-color: #000 !important;
  height: 100vh;
}
button {
  -webkit-app-region: no-drag;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fafafa;
  height: 100%;
  width: 100%;
}
</style>

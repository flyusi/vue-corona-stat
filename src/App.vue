<template>
  <div id="app">
    <RouterComponent />
  </div>
</template>

<script>
import { RouterComponent } from "./routing";

export default {
  name: 'App',
  components: { RouterComponent }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  padding: 0;
}
</style>

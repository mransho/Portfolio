<template>
  <app-layoute>
    <router-view />
  </app-layoute>
</template>
<script>
import AppLayoute from "@/components/AppLayoute";
export default {
  components: {
    AppLayoute,
  },
};
</script>

<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
}
body {
  background: linear-gradient(#1a0817, #050510);
  min-height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<template>
  <nav>
    <router-link to="/" />
  </nav>
  <router-view></router-view>

</template>

<script>
  export default {
    created() {
      for(let i = 0; i < 10; i++){
        this.$store.commit('addUser', this.$store.state);
      }
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

nav {
  display: flex;
  justify-content: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 10px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

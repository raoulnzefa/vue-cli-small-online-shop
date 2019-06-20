<template>
  <div id="app">
    {{cart}}
    <div id="nav">
      <router-link to="/">{{$t('hello')}}</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  mounted() {
    // this.$store.dispatch("getCartProducts");
    // this.$store.dispatch("addProductToCart", {
    //   id: 2,
    //   quantity: 10
    // });
  },
  computed: {
    ...mapGetters(["cart"])
  }
};
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
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

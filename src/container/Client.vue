<template>
  <div class="container-fluid p-0">
    <app-header></app-header>
    <main class="content">
      <router-view></router-view>
    </main>
    <login-modal></login-modal>
  </div>
</template>


<script>
import Header from "Components/Header/Header.vue";
import loginModal from "Components/Header/loginModal";

export default {
  data() {
    return {};
  },
  computed: {},
  props: {},
  watch: {},
  methods: {},
  components: {
    "app-header": Header,
    "login-modal": loginModal
  },
  created() {},
  mounted() {}
};
</script>



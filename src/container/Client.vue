<template>
  <div class="container-fluid p-0">
    <app-header></app-header>
    <main class="content">
      <router-view></router-view>
    </main>
  </div>
</template>


<script>
import Header from "Components/Header/Header.vue";
export default {
  data() {
    return {};
  },
  computed: {},
  props: {},
  watch: {},
  methods: {},
  components: {
    "app-header": Header
  },
  created() {},
  mounted() {}
};
</script>



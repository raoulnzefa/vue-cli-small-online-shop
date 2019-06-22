<template>
  <div
    class="row products-row justify-content-center justify-content-md-space-between justify-content-lg-space-between"
  >
    <product-card
      v-for="product in products"
      :product="product"
      :key="'product-main-page-'+product.id"
    ></product-card>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import ProductCard from "Components/Product/Card.vue";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["products"])
  },
  props: {},
  watch: {},
  methods: {},
  components: {
    "product-card": ProductCard
  },
  created() {},
  mounted() {}
};
</script>



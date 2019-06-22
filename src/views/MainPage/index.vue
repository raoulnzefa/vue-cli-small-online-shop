<template>
  <div class="container relative mh-80">
    <loading :show="loadingProducts"></loading>
    <products-wrapper></products-wrapper>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import ProductsWrapper from "./components/productsWrapper";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["loadingProducts"])
  },
  props: {},
  watch: {},
  methods: {},
  components: {
    "products-wrapper": ProductsWrapper
  },
  created() {
    this.$store.dispatch("getProducts", {
      page: 1
    });
  },
  mounted() {}
};
</script>


/******************* 
*
*
*
*    Ahmed Ali Tahbet
*
*
 ********************/
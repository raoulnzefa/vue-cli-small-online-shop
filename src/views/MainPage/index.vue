<template>
  <div class="container relative mh-80">
    <loading :show="loadingProducts"></loading>
    <products-wrapper></products-wrapper>
    <pagination @changePage="updateData" ></pagination>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import ProductsWrapper from "./components/productsWrapper";
import pagination from "./components/pagination";
export default {
  data() {
    return {
      
    };
  },
  computed: {
    ...mapGetters(["loadingProducts"])
  },
  props: {},
  watch: {},
  methods: {
    updateData(page) {
      this.$store.dispatch("getProducts", {
        page: page
      });
    }
  },
  components: {
    "products-wrapper": ProductsWrapper,
    pagination: pagination
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
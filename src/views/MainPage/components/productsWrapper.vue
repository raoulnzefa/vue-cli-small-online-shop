<template>
  <div
    class="row products-row justify-content-center justify-content-md-space-between justify-content-lg-space-between"
  >
    <product-card
      v-for="product in products"
      :product="product"
      :key="'product-main-page-'+product.id"
      @openProduct="ShowProductModal"
    ></product-card>
    <product-modal :product="ProductToShowInModal" ref="productModal"></product-modal>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import ProductCard from "Components/Product/Card.vue";
import ProductModal from "Components/Product/ProductModal.vue";
export default {
  data() {
    return {
      ProductToShowInModal: {}
    };
  },
  computed: {
    ...mapGetters(["products"])
  },
  props: {},
  watch: {},
  methods: {
    ShowProductModal(e) {
      this.ProductToShowInModal = e;
      this.$nextTick(() => {
        this.$refs.productModal.openModal();
      });
    }
  },
  components: {
    "product-card": ProductCard,
    "product-modal": ProductModal
  },
  created() {},
  mounted() {}
};
</script>



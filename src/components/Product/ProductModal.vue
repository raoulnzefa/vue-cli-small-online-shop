<template>
  <div id="ProductModal" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <div class="row align-items-start">
            <div class="col-md-6 col-lg-6 col-sm-12 col-12 row m-0 p-0">
              <div class="col-12 d-block d-md-none d-lg-none">
                <h5 class="product-cart-name text-center">{{product.name}}</h5>
              </div>
              <div class="col-md-9 col-lg-9 col-sm-12 col-12 mb-2 d-flex align-items-center">
                <img :src="currentImage" style="max-width:100%;">
              </div>
              <div
                class="image-preview-wrapper col-md-3 col-lg-3 col-sm-12 col-12 d-flex flex-md-column flex-lg-column flex-sm-row flex-row"
              >
                <img
                  :src="image"
                  v-for="(image,index) in product.photos"
                  :key="'product-'+product.id+'image-'+index"
                  :class="{
                    'image-small-preview':true,
                    'active':(currentImage===image)
                  }"
                  @click="changeImage(image)"
                >
              </div>
            </div>
            <div class="col-md-6 col-lg-6 col-sm-12 col-12 row m-0 p-0">
              <div class="col-12 text-left mb-2">
                <h5 class="product-title">{{product.name}}</h5>
              </div>
              <div class="col-12 mb-3 row align-items-center text-left m-0">
                <div class="col-3 p-0">
                  <div class="price-span">${{$store.getters.getFormatedPrice(product.price)}}</div>
                </div>
                <div class="col-4 p-0">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <button
                        @click="increaseValue(-1)"
                        class="btn btn-outline-secondary btn-sm"
                        type="button"
                      >-</button>
                    </div>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      placeholder
                      aria-label
                      aria-describedby="basic-addon1"
                      v-model="currentInCart"
                    >
                    <div class="input-group-append">
                      <button
                        @click="increaseValue(1)"
                        class="btn btn-outline-secondary btn-sm"
                        type="button"
                      >+</button>
                    </div>
                  </div>
                </div>
                <div class="col-5 p-0 text-center">
                  <button
                    class="btn btn-primary btn-sm btn-product"
                    @click="saveCart"
                  >{{$t('mainPage.addToCart')}}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import $ from "jquery";
export default {
  data() {
    return {
      currentImage: "",
      currentInCart: 1
    };
  },
  computed: {},
  props: {
    product: {
      required: true,
      type: Object
    }
  },
  watch: {
    product: function(newval) {
      this.currentInCart = this.$store.getters.productCountInCard(newval.id);
      this.changeImage(newval.featuredPhoto);
    }
  },
  methods: {
    openModal() {
      $("#ProductModal").modal("show");
    },
    changeImage(image) {
      this.currentImage = image;
    },
    increaseValue(val) {
      this.currentInCart += val;
      if (this.currentInCart <= 0) {
        this.currentInCart = 1;
      }
    },
    saveCart() {
      this.$store.dispatch("addProductToCart", {
        id: this.product.id,
        quantity: this.currentInCart,
        product: this.product
      });
    }
  },
  components: {},
  created() {},
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
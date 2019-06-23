<template>
  <div
    @click="openProduct"
    class="col-12 col-md-6 col-lg-6 product-wrapper"
    v-if="product.featuredProduct"
  >
    <div class="card product-card featured">
      <div class="card-body py-0">
        <div class="row" style="height:100%;">
          <div class="col-12 col-md-6 col-lg-6 px-0 d-flex d-align-items-center">
            <img class="card-img-side" :src="product.featuredPhoto" alt>
          </div>
          <div class="col-12 col-md-6 col-lg-6 d-flex flex-column pt-3">
            <h5 class="card-title text-left">{{product.name}}</h5>
            <p class="card-text">
              <star-rating
                :active-color="'#fbc300'"
                :border-color="'#fbc300'"
                :inactive-color="'#ffffff'"
                :border-width="1"
                :increment=".1"
                :star-size="19"
                :read-only="true"
                :rating="Number(product.rate)"
              ></star-rating>
            </p>
            <p class="card-text card-description">{{product.description}}</p>
            <div class="card-footer bg-transparent d-flex m-0 justify-content-between">
              <div class="price-span">${{productPrice}}</div>
              <a
                href="#"
                @click.stop.prevent="addProductToCart"
                class="btn btn-primary btn-sm btn-product"
              >
                {{$t('mainPage.addToCart')}}
                <span
                  class="badge badge-light text-center"
                  v-if="productInCart"
                >{{countInCard}}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div @click="openProduct" class="col-12 col-sm-6 col-md-3 col-lg-3 product-wrapper" v-else>
    <div class="card product-card">
      <img class="card-img-top" :src="product.featuredPhoto" :alt="product.name">
      <div class="card-body">
        <h5 class="card-title text-left">{{product.name}}</h5>
        <p class="card-text">
          <star-rating
            :active-color="'#fbc300'"
            :border-color="'#fbc300'"
            :inactive-color="'#ffffff'"
            :border-width="1"
            :increment=".1"
            :star-size="19"
            :read-only="true"
            :rating="Number(product.rate)"
          ></star-rating>
        </p>
      </div>
      <div class="card-footer bg-transparent d-flex justify-content-between">
        <div class="price-span">${{productPrice}}</div>
        <a
          href="#"
          @click.stop.prevent="addProductToCart"
          class="btn btn-primary btn-sm btn-product"
        >
          {{$t('mainPage.addToCart')}}
          <span
            class="badge badge-light text-center"
            v-if="productInCart"
          >{{countInCard}}</span>
        </a>
      </div>
    </div>
  </div>
</template>


<script>
import StarRating from "vue-star-rating";

export default {
  data() {
    return {};
  },
  computed: {
    productPrice() {
      if (this.product && this.product.price) {
        var price = this.product.price.toString();
        return this.$store.getters.getFormatedPrice(price);
      }
      return "";
    },
    productInCart() {
      return this.$store.getters.isProductInCart(this.product.id);
    },
    countInCard() {
      return this.productInCart
        ? this.$store.getters.productCountInCard(this.product.id)
        : 0;
    }
  },
  props: {
    product: {
      required: true,
      type: Object
    }
  },
  watch: {},
  methods: {
    openProduct() {
      this.$emit("openProduct", this.product);
    },
    addProductToCart() {
      this.$store.dispatch("addProductToCart", {
        id: this.product.id,
        quantity: this.countInCard + 1,
        product: this.product
      });
    }
  },
  components: {
    StarRating
  },
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
<template>
  <div class="col-12 col-md-6 col-lg-6" v-if="product.featuredProduct">
    <div class="card product-card featured">
      <div class="card-body">This is some text within a card body.</div>
    </div>
  </div>
  <div class="col-12 col-sm-6 col-md-3 col-lg-3" v-else>
    <div class="card product-card">
      <img class="card-img-top" :src="product.featuredPhoto" :alt="product.name">
      <div class="card-body">
        <h5 class="card-title">{{product.name}}</h5>
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
        <a href="#" class="btn btn-primary btn-sm btn-product">{{$t('mainPage.addToCart')}}</a>
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
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      }
      return "";
    }
  },
  props: {
    product: {
      required: true,
      type: Object
    }
  },
  watch: {},
  methods: {},
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
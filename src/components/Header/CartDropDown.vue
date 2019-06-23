<template>
  <div class="cart-tooltip">
    <ul class="list-group list-group-flush" v-if="cartProducts.length && !loadingCartProducts">
      <li
        v-for="product in cartProducts"
        :key="'product-cart-item-'+product.id"
        class="list-group-item d-flex"
      >
        <div>
          <img :src="product.featuredPhoto" class="cart-img">
        </div>
        <div class="flex-grow-1">
          <h5 class="product-cart-name">{{product.name}}</h5>
          <p class="product-cart-price">
            <strong>${{$store.getters.getFormatedPrice(product.totalPrice)}}</strong>
            <i>&nbsp;({{product.quantity}} {{$t('Cart.items')}}) .</i>
          </p>
        </div>
      </li>
      <li class="list-group-item">
        <div>
          {{$t('Cart.total')}}
          <strong>$ {{$store.getters.getFormatedPrice(totalPrice)}}</strong>
        </div>
        <div>
          <button class="btn btn-primary btn-sm mt-2">{{$t('Cart.checkout')}}</button>
        </div>
      </li>
    </ul>
    <ul
      class="list-group list-group-flush"
      v-else-if="!cartProducts.length && !loadingCartProducts"
    >
      <div class="list-group-item">
        <img class="no-items-image" src="/img/noItems.svg" alt="no items">
        <div
          class="alert alert-primary py-1"
          style="font-size:10px;"
          role="alert"
        >{{$t('Cart.noItems')}}</div>
      </div>
    </ul>
    <ul class="list-group list-group-flush" v-else-if="loadingCartProducts">
      <li class="list-group-item" style="min-height:150px;">
        <loading style="top:0;left:0;" :show="loadingCartProducts"></loading>
      </li>
    </ul>
  </div>
</template>
 


<script>
import { mapGetters } from "vuex";
import $ from "jquery";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["cartProducts", "loadingCartProducts", "totalPrice"])
  },
  props: {},
  watch: {},
  methods: {},
  components: {},
  created() {
    this.$store.dispatch("getCartProducts");
  },
  mounted() {
    $(window).click(event => {
      //Hide the menus if visible
      if ($(event.target).parents(".cart-tooltip").length !== 0) {
        return false;
      } else {
        this.$emit("close");
      }
    });
  }
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
<template>
  <header class="client-header">
    <!-- Just an image -->
    <div class="container">
      <nav class="navbar navbar-light justify-content-between">
        <router-link class="navbar-brand" :to="{name:'mainPage'}">
          <img class="logo-img" src="/img/logo.png">
        </router-link>
        <div class="d-flex dropdown">
          <a class="btn btn-outline-primary my-2 my-sm-0 py-15" href="#">Login</a>
          <div class="relative cart ml-1" @click="openDropDown">
            <span class="absolute badge badge-cart">{{cartCount}}</span>

            <img src="/img/cart.svg" class="cart-icon" alt="cart">
            <transition
              name="custom-classes-transition"
              enter-active-class="animated fadeIn"
              leave-active-class="animated fadeOut"
            >
              <cart-drop-down v-show="showDropDown"></cart-drop-down>
            </transition>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>


<script>
import { mapGetters } from "vuex";
import CartDropDown from "./CartDropDown";
export default {
  data() {
    return {
      showDropDown: false
    };
  },
  computed: {
    ...mapGetters(["cartCount"])
  },
  props: {},
  watch: {},
  methods: {
    openDropDown() {
      if (this.cartCount === 0) {
        this.showDropDown = !this.showDropDown;
        return false;
      } else {
        this.showDropDown = !this.showDropDown;
      }
    }
  },
  components: {
    "cart-drop-down": CartDropDown
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
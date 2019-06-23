<template>
  <header class="client-header">
    <!-- Just an image -->
    <div class="container">
      <nav class="navbar navbar-light justify-content-between">
        <router-link class="navbar-brand" :to="{name:'mainPage'}">
          <img class="logo-img" src="/img/logo.png">
        </router-link>
        <div class="d-flex dropdown align-items-center">
          <router-link
            :to="'/admin'"
            class="btn btn-outline-primary my-2 my-sm-0 mr-2 py-15"
            v-if="$store.getters.isAdmin"
          >Admin Panel</router-link>
          <a
            v-if="!isAuth"
            class="btn btn-outline-primary my-2 my-sm-0 py-15"
            @click.prevent="openLoginModal"
            href="#"
          >{{$t('Login.login')}}</a>
          <a
            v-if="isAuth"
            class="btn btn-outline-primary my-2 my-sm-0 py-15"
            @click.prevent="$store.commit('logOut')"
            href="#"
          >{{$t('Login.logout')}}</a>

          <div class="relative cart ml-1">
            <span class="absolute badge badge-cart">{{cartCount}}</span>

            <img src="/img/cart.svg" @click="openDropDown" class="cart-icon" alt="cart">
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
import $ from "jquery";

export default {
  data() {
    return {
      showDropDown: false
    };
  },
  computed: {
    ...mapGetters(["cartCount", "isAuth"])
  },
  props: {},
  watch: {},
  methods: {
    openDropDown() {
      this.showDropDown = !this.showDropDown;
    },
    openLoginModal() {
      $("#loginModal").modal("show");
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
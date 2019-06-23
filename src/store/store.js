import Vue from 'vue';
import Vuex from 'vuex';
//modules 
import cart from './cart';
import products from './products';
import users from './users';
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart,
    products,
    users
  }
})

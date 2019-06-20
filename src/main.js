import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import VueI18n from 'vue-i18n'
import messages from './lang/'
import './registerServiceWorker';
import './assets/scss/main.scss'
import Nprogress from 'nprogress';
Vue.prototype.$nprogress = Nprogress;

import 'bootstrap';

Vue.config.productionTip = false

Vue.use(VueI18n)
import APIBased from 'Api/index.js';
Vue.use(APIBased);
const i18n = new VueI18n({
  locale: 'en',
  messages, // set locale messages
});
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

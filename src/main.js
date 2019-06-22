import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import VueI18n from 'vue-i18n'
import messages from './lang/'
import './registerServiceWorker';
import Nprogress from 'nprogress';
import Loading from 'Components/Loading/loading.vue';
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
Vue.component('loading', Loading);
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

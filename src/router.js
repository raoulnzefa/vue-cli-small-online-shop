import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//Layouts 
import ClientLayout from 'Container/Client';
import AdminLayout from 'Container/Admin';
import Store from './store/store.js';

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: ClientLayout,
      children: [
        {
          path: '/',
          component: () => import('Views/MainPage/index.vue'),
          name: 'mainPage',
          meta: {
            title: 'mainPage.title'
          }
        }
      ]
    },
    {
      path: '/admin',
      component: AdminLayout,
      children: [
        {
          path: '/admin',
          meta: {
            title: 'Admin Panel',
            requiresAdmin: true,
          }
        }
      ]
    }
  ]
});
router.beforeEach((to, from, next) => {
  Vue.prototype.$nprogress.start();
  if (to.matched.some(record => record.meta.requiresAdmin)) {
    console.log(Store);
    if (!Store.getters.isAdmin) {
      next({ path: '/' })
    }
  }
  next();
});
router.afterEach(() => {
  Vue.prototype.$nprogress.done();
})
export default router;

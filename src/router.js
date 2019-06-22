import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//Layouts 
import ClientLayout from 'Container/Client';

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
    }
  ]
});
router.beforeEach((to, from, next) => {
  Vue.prototype.$nprogress.start();
  next();
});
router.afterEach(() => {
  Vue.prototype.$nprogress.done();
})
export default router;

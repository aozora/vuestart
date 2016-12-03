import Vue from 'vue';
import VueRouter from 'vue-router';
import App from 'components/App';
import routes from 'src/routes';
import store from 'src/store';


// import static assets
import 'src/assets/scss/app.scss';

// import 'script!jquery';
// import 'script!what-input';
// import 'script!promise-polyfill';
// import 'script!whatwg-fetch';
// import 'script!foundation-sites';
// import 'script!lodash';

// Vue use
Vue.use(VueRouter);


export const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
});


export const app = new Vue({
  template: '<App/>',
  router,
  components: {
    App
  },

  // provide the store using the "store" option.
  // this will inject the store instance to all child components.
  store,
}).$mount('#app');

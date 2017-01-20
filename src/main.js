import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import routes from 'src/routes';
import store from 'src/store';

// Vue config
Vue.config.devtools = true;
Vue.config.silent = false;


// import static assets
// import './assets/scss/app.scss';
import './assets/css/app.css';

import 'promise-polyfill';
import 'whatwg-fetch';

// Vue use
Vue.use(VueRouter);


export const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
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

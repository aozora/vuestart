import Vue from 'vue';
import VueRouter from 'vue-router';

import 'promise-polyfill';
import 'whatwg-fetch';
import App from './App';
import router from './router';
import store from './store';

// Vue config
Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.config.silent = false;

// Vue plugins
Vue.use(VueRouter);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // provide the store using the "store" option.
  // this will inject the store instance to all child components.
  store,
  render: h => h(App)
});

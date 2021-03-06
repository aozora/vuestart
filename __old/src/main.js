// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueResourceMock from 'vue-resource-mock';
import Vuelidate from 'vuelidate';
import 'whatwg-fetch';
import App from './App';
import router from './router';
import store from './store';
import mockApi from './mock';

// Vue config
Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.config.silent = false;

// ----------------------------------------------------
// Vuelidate
// ----------------------------------------------------
Vue.use(Vuelidate);

// ----------------------------------------------------
// Vue Router
// ----------------------------------------------------
Vue.use(VueRouter);

// ----------------------------------------------------
// Vue Resource
// ----------------------------------------------------
Vue.use(VueResource);
Vue.http.options.root = '/api';

// ----------------------------------------------------
// Vue Resource MOCK
// ----------------------------------------------------
Vue.use(VueResourceMock, mockApi);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});

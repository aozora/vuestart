import Vue from 'vue';
import Vuex from 'vuex';
// import {fetchResults} from './api'
import json from 'json-loader!../assets/mock-data/products.json';

Vue.use(Vuex);

const delay = 200;

const store = new Vuex.Store({
  state: {
    isLoading: false,
    query: '',
    results: {}
  },

  mutations: {
    SET_IS_LOADING: (state, loading) => {
      state.isLoading = loading;
    },
    SET_SEARCH_QUERY: (state, query) => {
      state.query = query;
    },
    SET_SEARCH_RESULTS: (state, results) => {
      state.results = results;
    }
  },

  actions: {
    FETCH_RESULTS: ({ commit, state }, query) => {

      // console.log(`action FETCH_RESULTS: query = ${query}`);

      commit('SET_SEARCH_QUERY', query);
      commit('SET_IS_LOADING', true);

      if (query) {

        const p = new Promise(function (resolve, reject) {
          setTimeout(() => {
            // console.log('Fetch OK!');
            return resolve(json);
          }, delay)
        });

        return p.then(function (result) {
          // console.log('Fetch Promise OK! mutating state...');
          commit('SET_SEARCH_RESULTS', result);
          commit('SET_IS_LOADING', false);

          // if (result === '') {
          //   commit('SET_NORESULTS', true);
          // }
        });
      } else {
        commit('SET_IS_LOADING', false);
        return Promise.reject();
      }
    },
  }
});

export default store;

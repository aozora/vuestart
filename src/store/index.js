import Vue from 'vue';
import Vuex from 'vuex';
// import {fetchResults} from './api'
import jsonTraslochi from 'json-loader!../assets/data/search-results-traslochi.json';
import jsonAutomobile from 'json-loader!../assets/data/search-results-automobile.json';
import jsonIct from 'json-loader!../assets/data/search-results-ict.json';
import jsonEpson from 'json-loader!../assets/data/search-results-epson.json';
import jsonEan from 'json-loader!../assets/data/search-results-ean.json';

Vue.use(Vuex);

const delay = 200;

const store = new Vuex.Store({
  state: {
    isLoading: false,
    searchIsActive: false,
    query: '',
    results: {},
    noresults: false,
    showLogin: false
  },

  mutations: {
    SET_IS_LOADING: (state, loading) => {
      state.isLoading = loading;
    },
    SET_SEARCH_IS_ACTIVE: (state, active) => {
      state.searchIsActive = active;
    },
    SET_NORESULTS: (state, noresults) => {
      state.noresults = noresults;
    },
    SET_SHOW_LOGIN: (state, show) => {
      state.showLogin = show;
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
      commit('SET_SEARCH_IS_ACTIVE', true);
      commit('SET_IS_LOADING', true);

      if (query) {

        const p = new Promise(function (resolve, reject) {
          setTimeout(() => {

            const jsonMap = {
              'traslochi': jsonTraslochi,
              'automobile': jsonAutomobile,
              'ict': jsonIct,
              'epson': jsonEpson,
              '420524411301': jsonEan,
              'default': ''
            };

            const json = jsonMap[query] || jsonMap['default'];

            //const json = fetchResults(query);
            // console.log('Fetch OK!');
            return resolve(json);
          }, delay)
        });

        return p.then(function (result) {
          // console.log('Fetch Promise OK! mutating state...');
          commit('SET_SEARCH_RESULTS', result);
          commit('SET_IS_LOADING', false);

          if (result === '') {
            commit('SET_NORESULTS', true);
          }
        });
      } else {
        commit('SET_IS_LOADING', false);
        return Promise.reject();
      }
    },

    TOGGLE_LOGIN: ({ commit, state }, show) => {
      commit('SET_SHOW_LOGIN', show);
    }
  }
});

export default store;

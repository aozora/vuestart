<template>
  <div class="home">
    <SearchBox></SearchBox>

    <loader v-show="loading"></loader>

    <NoResults v-show="!loading && noresults"></NoResults>

    <SearchResults v-if="!loading && !noresults"></SearchResults>

  </div>
</template>

<script>
  import SearchBox from 'components/Search/SearchBox';
  import SearchResults from 'components/Search/SearchResults';
  import NoResults from 'components/Search/NoResults';
  import Loader from 'components/Loader';

  export default {
    name: 'Search',

    components: {
      SearchBox,
      SearchResults,
      Loader,
      NoResults
    },

    computed: {
      loading: function () {
        return this.$store.state.isLoading;
      },
      noresults: function () {
        return Object.keys(this.$store.state.results).length === 0 || this.$store.state.results.results.length === 0;
      }
    },

    methods: {
      fetchResults () {
        this.$store.dispatch('FETCH_RESULTS', this.$route.query.q);
      }
    },

    /**
     * Watch for route change to invoke again the fetchResults() method,
     * since the component hook doesn't get hit (it get reused).
     */
    watch: {
      '$route' (to, from) {
        // react to route changes...
        this.fetchResults();
      }
    },

    created () {
      // dispatch an action with a payload
      console.log(`Search.created(): this.$route.query.q = ${this.$route.query.q}`);
      this.fetchResults();
    }
  };
</script>

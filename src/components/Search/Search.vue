<template>
  <div class="home">
    <SearchBox></SearchBox>

    <NoResults v-show="!loading && noresults"></NoResults>

    <SearchResults v-if="!loading && !noresults"></SearchResults>

  </div>
</template>

<script>
  import SearchBox from 'components/Search/SearchBox';
  import SearchResults from 'components/Search/SearchResults';
  import NoResults from 'components/Search/NoResults';

  export default {
    name: 'Search',

    components: {
      SearchBox,
      SearchResults,
      NoResults
    },

    computed: {
      loading: function () {
        return this.$store.state.isLoading;
      },
      noresults: function () {
        return Object.keys(this.$store.state.results).length === 0;
      }
    },

    created () {
      // dispatch an action with a payload
      this.$store.dispatch('FETCH_RESULTS', this.$route.params.query);
    }
  };
</script>

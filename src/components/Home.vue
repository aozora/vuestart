<template>
  <div class="home">
    <Search></Search>

    <NoResults v-show="!loading && noresults"></NoResults>

    <SearchResults v-if="!loading && !noresults"></SearchResults>

  </div>
</template>

<script>
  import Search from 'components/Search/Search';
  import SearchResults from 'components/Search/SearchResults';
  import NoResults from 'components/Search/NoResults';

  export default {
    name: 'Home',
    components: {
      Search,
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
    }
  };
</script>

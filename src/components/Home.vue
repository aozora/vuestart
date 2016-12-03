<template>
  <div class="home">
    <Search></Search>

    <transition name="slideUp"
                leave-class="slideDown"
                leave-active-class="slideDown-leave-active">
      <NoResults v-show="!loading && noresults"></NoResults>
    </transition>

    <transition name="slideUp"
                leave-class="slideDown"
                leave-active-class="slideDown-leave-active">
      <SearchResults v-if="!loading && !noresults"></SearchResults>
    </transition>

  </div>
</template>

<script>
  import Vue from 'vue';
  import Search from 'components/Home/Search';
  import SearchResults from 'components/SearchResults/SearchResults';
  import NoResults from 'components/SearchResults/NoResults';

  export default {
    name: 'Home',
    components: {
      Hero,
      Search,
      SearchResults,
      NoResults,
      FakeNews,
      LoginModal
    },
    computed: {
      loading: function () {
        return this.$store.state.isLoading;
      }
//      noresults: function () {
//        return this.$store.state.noresults;
//      }
    }
  };
</script>

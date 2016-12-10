<template>
  <section class="search">
      <div class="row align-center">
        <div class="small-8 column">
          <form class="search__form" v-on:submit.prevent="submit">
          <input type="text" id="search-input" name="search" v-model="query"/>
          <button class="button" type="submit">
            <span>Search</span>
          </button>
          </form>
        </div>
      </div>
  </section>
</template>

<script>
  export default {
    name: 'Search',

    data () {
      return {
        query: this.$store.state.query
      }
    },

    computed: {
      searched: function () {
        return this.$store.state.searchIsActive;
      }
    },

    methods: {
      submit: function (event) {
        event.preventDefault();
        const query = document.getElementById('search-input').value;

        if (!query || query === '') {
          return false;
        }

        // dispatch an action with a payload
        this.$store.dispatch('FETCH_RESULTS', query);
      }
    }
  };
</script>

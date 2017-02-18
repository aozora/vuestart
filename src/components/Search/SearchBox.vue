<template>
  <section class="search">
    <div class="row align-center">
      <div class="small-8 column">
        <form class="search__form" v-on:submit.prevent="submit">
          <input type="text" id="search__form-input" name="search" v-model="query"/>
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
    name: 'SearchBox',

    data() {
      return {
        /* eslint-disable semi */
        query: this.$store.state.query
      }
    },

    methods: {
      submit(event) {
        event.preventDefault();
        const query = document.getElementById('search__form-input').value;
//        console.log(`query = ${query}`);

        if (!query || query === '') {
          return false;
        }

        // go to the search results route
        const router = this.$router;
        router.push({ path: 'search', query: { q: query } });
        return true;
      }
    }
  };
</script>

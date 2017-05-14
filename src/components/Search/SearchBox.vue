<template>
  <section class="search">
    <div class="row align-center">
      <div class="small-8 column">
        <form class="search__form" v-on:submit.prevent="submit">
          <div class="input-group input-group-rounded">
            <input class="input-group-field" type="search" id="search__form-input" name="search" v-model="query">
            <div class="input-group-button">
              <button class="button secondary" type="submit">
                <span>Search</span>
              </button>
            </div>
          </div>
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

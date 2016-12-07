<template>
  <section class="search">
    <form class="search__form column row" v-on:submit.prevent="submit">
      <div class="row align-center">
        <div class="small-8 column">
          <input type="text" id="search-input" name="search" v-model="query"/>
          <button class="button" type="submit">
            <span>Search</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 48 48">
              <g transform="translate(0, 0)">
                <polyline data-color="color-2" data-cap="butt" fill="none" stroke-width="2" stroke-miterlimit="10" points="34.6,30.6 44,40 40,44	30.6,34.6 " stroke-linejoin="miter" stroke-linecap="butt"></polyline>
                <circle fill="none" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" cx="20" cy="20" r="18" stroke-linejoin="miter"></circle>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </form>
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

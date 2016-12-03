<template>
  <section class="meta-search-results">

    <div class="column row">
      <div class="meta-search-results__what">
        <div class="row">
          <div class="medium-8 column">
            <h1>
              Found <span class="query">{{results.query}}</span>
            </h1>
          </div>
        </div>
      </div>
    </div>

    <div class="meta-search-results__where">
      <div class="column row">
        <div class="tool" v-for="tool in results.where.tools">
          <CardLarge v-bind:tool="tool"></CardLarge>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'SearchResults',

    computed: {
      results: function () {
        return this.$store.state.results;
      }
    },

    methods: {
      showLogin: function (event) {
        event.preventDefault();
        this.$store.dispatch('TOGGLE_LOGIN', true);
      }
    }

  };
</script>

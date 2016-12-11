<template>
  <section class="search-results">
    <div class="ow medium-up-3">
      <div class="column" v-for="result in results">
        <Card v-bind:result="result"></Card>
      </div>
    </div>
  </section>
</template>

<script>
  import Card from 'components/Search/Card';

  export default {
    name: 'SearchResults',

    components: {
      Card
    },

    computed: {
      results: function () {
        return this.$store.state.results.results;
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

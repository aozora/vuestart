<template>
  <section class="search-results">
    <div class="row medium-up-3">
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
    }

  };
</script>

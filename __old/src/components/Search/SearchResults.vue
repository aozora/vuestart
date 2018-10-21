<template>
  <section class="search-results">
    <div class="row small-up-1 medium-up-3">
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
      results() {
        return this.$store.state.results.results;
      }
    }

  };
</script>

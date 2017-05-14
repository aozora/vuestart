<template>
  <div class="home">
    <hero></hero>
    <search-box></search-box>
    <testimonials></testimonials>
    <features></features>
  </div>
</template>

<script>
  import Hero from './Hero';
  import SearchBox from './Search/SearchBox';
  import Testimonials from './Testimonials';
  import Features from './Features';

  export default {
    name: 'Home',

    components: {
      SearchBox,
      Hero,
      Testimonials,
      Features
    }
  };
</script>

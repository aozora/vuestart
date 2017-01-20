<template>
  <div class="home">
    <Hero></Hero>
    <SearchBox></SearchBox>

    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
  import Hero from './Hero';
  import SearchBox from './Search/SearchBox';

  export default {
    name: 'Home',
    components: {
      SearchBox,
      Hero
    }
  };
</script>

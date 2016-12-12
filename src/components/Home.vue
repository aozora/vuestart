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
  import Hero from 'components/Hero';
  import SearchBox from 'components/Search/SearchBox';

  export default {
    name: 'Home',
    components: {
      SearchBox,
      Hero
    }
  };
</script>

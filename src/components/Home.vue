<template>
  <div class="home">
    <SearchBox></SearchBox>
  </div>
</template>

<script>
  import SearchBox from 'components/Search/SearchBox';

  export default {
    name: 'Home',
    components: {
      SearchBox
    }
  };
</script>

<template>
  <div class="app-container">
    <TopNav></TopNav>
    <MainMenu></MainMenu>

    <transition name="loader">
      <loader v-show="loading"></loader>
    </transition>

    <transition name="page-fade" mode="out-in">
      <router-view></router-view>
    </transition>

    <MainFooter></MainFooter>
  </div>
</template>

<script>
  import MainMenu from 'components/MainMenu';
  import TopNav from 'components/TopNav';
  import MainFooter from 'components/MainFooter';
  import Loader from 'components/Loader';

  export default {
    name: 'Home',
    props: ['message'],
    components: {
      TopNav,
      Loader,
      MainMenu,
      MainFooter
    },
    computed: {
      loading: function () {
        return this.$store.state.isLoading;
      },
    }
  };
</script>

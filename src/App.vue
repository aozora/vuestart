<template>
  <div class="app-container">
    <TopNav></TopNav>
    <MainMenu></MainMenu>

    <transition name="page-fade" mode="out-in">
      <router-view></router-view>
    </transition>

    <MainFooter></MainFooter>
  </div>
</template>

<script>
  import MainMenu from './components/MainMenu';
  import TopNav from './components/TopNav';
  import MainFooter from './components/MainFooter';

  export default {
    name: 'Home',
    components: {
      TopNav,
      MainMenu,
      MainFooter
    }
  };
</script>

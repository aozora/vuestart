<template>
  <nav id="main-menu" class="nav">
    <div class="nav-left">
      <router-link to="/" class="nav-item">
        <img src="~assets/img/logo.png" alt="logo"/>
        VueJs Prototype
      </router-link>
    </div>

    <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
    <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
    <span class="nav-toggle">
    <span></span>
    <span></span>
    <span></span>
  </span>

    <!-- This "nav-menu" is hidden on mobile -->
    <!-- Add the modifier "is-active" to display it on mobile -->
    <div class="nav-right nav-menu">
      <router-link tag="a" to="/about" class="nav-item">
        About
      </router-link>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'MainMenu'
  };
</script>

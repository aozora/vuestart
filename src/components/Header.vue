<template>
  <header>
    <nav class="top-bar primary">
      <div class="top-bar-left">
        <ul class="menu">
          <li class="menu-text">Prototype</li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
        </ul>
      </div>

      <div class="top-bar-right">

      </div>
    </nav>

    <nav class="top-bar secondary">
      <div class="top-bar-left">
        <ul class="menu">
          <li class="menu-text">Site Title</li>
        </ul>
      </div>
      <div class="top-bar-right">
        <ul class="menu">
          <li><a href="#">One</a></li>
          <li><a href="#">Two</a></li>
          <li><a href="#">Three</a></li>
        </ul>
      </div>
    </header>
</template>


<script>
export default {
  name: 'header',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

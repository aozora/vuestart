<template>
  <nav class="top-bar main-menu" id="main-menu">
    <div class="column row">
      <div class="top-bar-left">
        <ul class="menu">
          <li class="menu-text">
            <a href="/">
              <img src="~assets/img/logo.png" alt="logo"/>
              VueJs Prototype
            </a>
          </li>
        </ul>
      </div>

      <div class="top-bar-right">
        <ul class="menu">
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'MainMenu'
  };
</script>

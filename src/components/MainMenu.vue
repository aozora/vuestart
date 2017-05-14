<template>
  <nav id="main-menu" class="main-menu">
    <div class="column row">
      <div class="top-bar">
        <div class="top-bar-left">
          <ul class="menu">
            <li class="menu-text">
              <router-link to="/">
                <img src="~assets/img/logo.png" alt="logo"/>
                VueJs Prototype
              </router-link>
            </li>
          </ul>
        </div>

        <div class="top-bar-right">
          <ul class="menu">
            <router-link tag="li" to="/about">
              <a>About</a>
            </router-link>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'MainMenu'
  };
</script>

<template>
  <nav class="column row">
    <div class="top-bar top-nav">
      <div class="top-bar-left">
        <ul class="menu">
          <li>
            <a href="#">Link</a>
          </li>
          <li>
            <a href="#">Link</a>
          </li>
        </ul>
      </div>

      <div class="top-bar-right">
        <ul class="menu">
          <li v-if="!isAuthenticated">
            <router-link to="/login">Login</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'TopNav',

    computed: {
      isAuthenticated() {
        return this.$store.state.user.authenticated;
      }
    }

  };
</script>

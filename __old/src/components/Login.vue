<template>
  <section class="login">
    <form v-on:submit.prevent="submitLogin">
      <h4>Sign In</h4>
      <label for="username">Username</label>
      <input type="text" class="login__username" id="username" v-model.trim="form.username" @input="$v.form.username.$touch()">
      <p v-if="!$v.form.username.required" class="form-error" id="usernameHelpText">Your user name is required.</p>
      <p v-if="!$v.form.username.minLength" class="form-error" id="usernameHelpText">Your user name must have at least {{ $v.form.username.$params.minLength.min }} characters</p>

      <label for="password">Password</label>
      <input type="text" class="login__password" id="password" v-model.trim="form.password" @input="$v.form.password.$touch()">
      <p v-if="!$v.form.password.required" class="form-error" id="passwordHelpText">Your password must have at least {{ $v.form.password.$params.minLength.min }} characters.</p>

      <p>{{ $v.form.$error }}</p>
      <button type="submit">Sign In</button>
    </form>
  </section>
</template>

<script>
  import { required, minLength } from 'vuelidate/lib/validators';

  export default{
    name: 'Login',

    data() {
      return {
        form: {
          username: '',
          password: ''
        }
      };
    },
    validations: {
      form: {
        username: {
          required,
          minLength: minLength(6)
        },
        password: {
          required,
          minLength: minLength(8)
        }
      }
    },

    methods: {
      submitLogin() {
        if (this.$v.form.$error) {
          return false;
        }

        const credentials = {
          username: document.getElementById('username').value,
          password: document.getElementById('password').value
        };

        if (credentials.username === '' || credentials.password === '') {
          return false;
        }

        this.$store.dispatch('USER_LOGIN', credentials).then(() => {
          // redirect to the root route
          this.$router.push('/');
        }).catch((error) => {
          /* eslint-disable no-console */
          console.log(error);
          // TODO: display message to the user on login form
        });

        return true;
      }
    }
  };
</script>

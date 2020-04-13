<template>
  <div class="container">
    <form @submit.prevent="submit" method="post">
      <div class="form-group">
        <label>Email</label>
        <input type="email" class="form-control" name="email" v-model="email">
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control" name="password" v-model="password">
      </div>
      <button class="btn btn-primary">Sign up</button>
    </form>

    <div v-if="error" class="alert alert-danger">
      <ul>
        <li>{{ error.code }}</li>
        <li>{{ error.message }}</li>
      </ul>
    </div>

    <div>
      <nuxt-link to="/">Sing In</nuxt-link>
    </div>

  </div>
  
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import firebase from "firebase";

@Component
export default class SignUp extends Vue {
  private email: string = '';
  private password: string = '';
  private error: any = null;

  submit () {
    console.log('email=%s, password=%s', this.email, this.password)
    if (!this.email && !this.password) {
      return
    }
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .catch((error) => {
          this.error = error;
          console.log(error.code)
          console.log(error.message)
        })
  }
}
</script>

<style scoped>

</style>
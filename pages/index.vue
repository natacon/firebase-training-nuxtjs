<template>
  <div class="container">
    <form @submit.prevent="signIn" method="post">
      <div class="form-group">
        <label>Email</label>
        <input type="email" class="form-control" name="email" v-model="email">
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control" name="password" v-model="password">
      </div>
      <button class="btn btn-primary">Sign in</button>
    </form>

    <div v-if="message" v-bind:class="{alert: error, 'alert-danger': error}">
      {{ message }}
    </div>

    <div>
      <router-link to="/signUp">Create account</router-link>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import firebase from "firebase";
import UserCredential = firebase.auth.UserCredential;

@Component
export default class SignIn extends Vue {
  private email: string   = ''
  private password: string = ''
  private user: firebase.User | unknown = null
  private message: string = ''
  private error: any = null

  signIn () {
    console.log('email=%s, password=%s', this.email, this.password)
    firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then((response: UserCredential) => {
          this.user = response.user
          this.message = 'Login successfully!'
          this.error = null
        })
        .catch((error) => {
          this.error = error
          this.message = error.message
        })
  }
}
</script>

<style scoped>

</style>

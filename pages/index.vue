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
      <nuxt-link to="/signUp">Create account</nuxt-link>
    </div>
<!--    <div>-->
<!--      {{ $store.state }}-->
<!--    </div>-->
<!--    <div>-->
<!--      {{ $data }}-->
<!--    </div>-->

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
  private message: string = ''
  private error: any = null

  signIn () {
    console.log('email=%s, password=%s', this.email, this.password)

    // ログイン状態でVuexを使うのをやめる
    // this.$store.dispatch('signIn/signIn', {email: this.email, password: this.password})
    //     .catch((error) => {
    //       this.error = error
    //       this.message = error.message
    //     })

    firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.message = 'Login successfully!'
          this.error = null
          this.$router.push('/home')
        })
        .catch((error) => {
          this.error = error
          this.message = error.message
        })

    // actionは非同期で実行されてエラーを補足できないのでstateを確認して判断する
    // FIXME: 状態変更が行われるタイミングを待たないとこっちが先に評価されてログインできない
    // if (this.isAuthenticated()) {
    // } else {
    //   this.message = '認証に失敗したよ'
    // }

  }

  isAuthenticated () {
    return this.$store.getters['signIn/isAuthenticated']
  }
}
</script>

<style scoped>

</style>

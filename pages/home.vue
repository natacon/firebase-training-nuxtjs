<template>
  <div>
    <h1>Home</h1>
<!--    <div>-->
<!--      {{ $data }}-->
<!--    </div>-->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import firebase from "firebase";

@Component
export default class Home extends Vue {

  created () {
    // TODO: 共通部品として切り出す
    const user = firebase.auth().currentUser;
    if (!user) {
      throw new Error('Not Authenticated!')
    }
  }
}

</script>

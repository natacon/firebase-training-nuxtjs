<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'nuxt-property-decorator'

@Component
export default class HelloWorld extends Vue {
  @Prop({type: String, required: false, default: 'Hello Nuxt.js!'})
  private message?: string;

  greet() {
    alert('greeting: ' + this.message)
  }

}
</script>

<style scoped>
</style>

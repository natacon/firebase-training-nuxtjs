<template>
  <div>
    <h1>Error.</h1>
    <ul>
      <li>{{ error.statusCode }}</li>
      <li>{{ error.message }}</li>
    </ul>
<!--    <h1 v-if="error.statusCode === 404">Error!404</h1>-->
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'nuxt-property-decorator'
import {NuxtError} from '@nuxt/types'
// export default class Error extends Vue {
//   @Prop({required: false, default: ['error']})
//   public error?: NuxtError;
// }
export default Vue.extend({
  props: ['error']
})
</script>

<style scoped>

</style>
<template>
  <section>
    <h2>{{ title }}</h2>
    counter: {{$store.state.counter.counter}}
    <button @click="$store.commit('counter/countUp')">+1</button>
    <button @click="$store.commit('counter/reset')">reset</button>
  </section>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'

// @Component
export default class Counter extends Vue {
  title: string = 'Counter App';

}
</script>

<style scoped>

</style>
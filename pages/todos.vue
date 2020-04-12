<template>
  <div>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <span v-if="todo.created">
          <input type="checkbox" v-bind:checked="todo.done" @change="toggle(todo)">
          <span v-bind:class="{done: todo.done}">{{ todo.name }} {{ todo.created.toDate() | dateFilter }}</span>
          <button @click="remove(todo.id)">delete</button>
        </span>
      </li>
    </ul>
    <div class="form">
      <form v-on:submit.prevent="add">
        <input v-model="name">
        <button>Add</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import {Todo} from "~/store/todos";
import moment from "moment";

@Component({
  filters: {
    dateFilter: (date: Date) => moment(date).format('YYYY/MM/DD HH:mm:ss')
  }
})
export default class Todos extends Vue {
  name: string = '';
  done: boolean = false;

  created () {
    this.$store.dispatch('todos/init')
  }

  add () {
    this.$store.dispatch('todos/add', this.name)
    this.name = ''
  }

  get todos() {
    // return this.$store.state.todos.todos
    return this.$store.getters['todos/orderdTodos']
  }

  remove (id: string) {
    this.$store.dispatch('todos/remove', id)
  }

  toggle(todo: Todo) {
    this.$store.dispatch('todos/toggle', todo)
  }


}
</script>

<style scoped>
li > span > span.done {
  text-decoration: line-through;
}

</style>

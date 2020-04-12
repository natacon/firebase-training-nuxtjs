<template>
  <div class="container">
    <p>
      <counter/>
      <counter/>
      <counter/>
    </p>
<!--    <p>{{ $store.state.message }}</p>-->
    <p>{{ $store.state.hello.message }}</p>

    <!--    <p><button @click="$store.commit('updateMessage')">Update</button></p>-->
    <p>
<!--      <button @click="$store.dispatch('updateMessageAction', 'Dispatch with payload.')">Update</button>-->
      <button @click="$store.dispatch('hello/updateMessageAction', 'Dispatch with payload.')">Update</button>

    </p>

    <Logo />
    <hello-world :message="text" />
    <hr />
    <router-link to="/price">Price page</router-link>
    <div>
      <h1>test</h1>
      <button @click="">test</button>
      <ul>
        <li v-for="user in users" v-bind:key="user.id">{{ user.id}}, {{user.name }}, {{user.company.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import Logo from "~/components/Logo.vue";
import HelloWorld from "~/components/HelloWorld.vue";
import axios from "axios";
import {Context} from '@nuxt/types'
import Counter from "~/components/counter.vue";
const url: string = 'https://jsonplaceholder.typicode.com/users';


export interface User {
  id: string;
  name: string;
  company: {
    name: string
  }
}

@Component({
  components: {
    HelloWorld,
    Logo,
    Counter
  }
})
export default class App extends Vue {
  public text: string = 'Heeeello';
  // public users = '';

  // mounted () {
  //   axios.get(url)
  //       .then((res) => {
  //         this.users = res.data;
  //       });
  // }
  asyncData (context: Context): Promise<{users: Array<User>} | void>{
    return axios.get(url)
        .then((res) => {
          const data = res.data as Array<User>;
          return {users: data};
        })
        .catch((err) => {
          const res = err.response;
          context.error({
            statusCode: res.status,
            message: 'nuxt error.'
          });
        });
  }

  created () {
    console.log('created!')
  }

  mounted () {
    console.log('mounted!')
  }
};
</script>

<style scoped>
* {
  /*font-family: "Permanent Marker", cursive;*/
}
</style>

import {vuexfireMutations} from 'vuexfire'

export const mutations = {
  ...vuexfireMutations
};

// import Vuex from 'vuex'
// const createStore = () => {
//   return new Vuex.Store({
//     state: () => {
//       return {
//         message: 'Hello Vuex!'
//       }
//     },
//     mutations: {
//       updateMessage: (state, payload) => {
//         state.message = payload
//       }
//     },
//     actions: {
//       updateMessageAction: (injectee, payload) => {
//         injectee.commit('updateMessage', payload)
//       }
//     }
//   })
// };

// export default createStore

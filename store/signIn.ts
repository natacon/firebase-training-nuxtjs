// 結局使わない

import firebase from "firebase";
import UserCredential = firebase.auth.UserCredential;

export const state = () => ({
  user: {},
  status: false
})

export const mutations = {
  signIn: function (state: any, payload: {email: string, password: string}) {
    state.user = payload.email;
    state.status = true;
  }
}

export const actions = {
  signIn: function (context: any, payload: {email: string, password: string}) {
    // TODO: handle promise
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(() => {
          context.commit('signIn', payload)
        })
        .catch((error) => {
          // TODO: このエラーどう捌けばいいんだ？
          console.log(error)
        })
  }
}

export const getters = {
  isAuthenticated: (state: any): boolean => {
    return state.status
  }
}
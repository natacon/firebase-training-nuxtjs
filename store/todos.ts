import firebase from "~/plugins/firebase";
import {firestoreAction} from "vuexfire";
import FieldValue = firebase.firestore.FieldValue;

const db = firebase.firestore();
const todosRef = db.collection('todos');

export const state = () => ({
  todos: []
});

export interface Todo {
  id?: string; // Cloud Firestoreによる自動設定
  name: string;
  done: boolean;
  created: FieldValue
}

export const actions = {
  init: firestoreAction(({ bindFirestoreRef}) => {
    bindFirestoreRef('todos', todosRef)
  }),
  add: firestoreAction((context, name: string) => {
    if (name.trim()) {
      const todo: Todo = {
        name: name,
        done: false,
        created: firebase.firestore.FieldValue.serverTimestamp()
      }
      todosRef.add(todo);
    }
  }),
  remove: firestoreAction((context, id: string) => {
    todosRef.doc(id).delete()
  }),
  toggle: firestoreAction((context, todo: Todo) => {
    todosRef.doc(todo.id).update({
      done: !todo.done
    })
  })
};

// export const getters = {
//   orderdTodos: (state: any) => {
//     return _.orderBy(state.todos, 'created', 'desc')
//   }
// };

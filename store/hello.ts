
export const state = () => ({
  message: 'Hello Vuex!'
});

export const mutations = {
  updateMessage: (state: any, payload: any) => {
    state.message = payload
  }
};

export const actions = {
  updateMessageAction: (injectee: any, payload: any) => {
    injectee.commit('updateMessage', payload)
  }
};

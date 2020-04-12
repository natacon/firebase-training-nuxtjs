export const state = () => ({
  counter: 0
});

export const mutations = {
  countUp: (state: any) => {
    state.counter++;
  },
  reset: (state: any) => {
    state.counter = 0;
  }
};

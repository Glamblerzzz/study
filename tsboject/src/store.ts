import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 2
  },
  getters: {
    doneTodos: (state) => {
      return state.count + 1;
    }
  },
  mutations: {

  },
  actions: {

  },
});

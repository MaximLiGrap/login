import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    item: {},
  },
  getters: {
  },
  mutations: {
    loadItem(state, item) {
      state.item = item;
    },
  },
  actions: {
    submit(context, data) {
      return axios({
        url: 'http://localhost:3000/login',
        method: 'POST',
        data,
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(() => {
      })
        .catch(() => {
        });
    },
  },
  modules: {
  },
});

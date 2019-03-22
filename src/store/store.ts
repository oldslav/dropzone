import Vue from 'vue';
import Vuex from 'vuex';
import files from './files/files';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    files,
  },
});

/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    userProfile: null,
    
  },
  getters: {
    getCurrentUser: (state) => state.userProfile,
    getFormData: (state) => state.form,
  },
  actions: {
    currentUser({ commit }, user) {
      commit("UPDATE_USER", user);
    },
    formData({ commit }, data) {
      commit("FORM_DATA", data);
    },
  },
  mutations: {
    UPDATE_USER(state, data) {
      state.userProfile = data;
    },
    FORM_DATA(state, data) {
      state.form = data;
    },
  },
  modules: {},
});

/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    userProfile: null,
    form: null,
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
  getters: {
    getCurrentUser: (state) => state.userProfile,
    getFormData: (state) => state.form,
  },
  modules: {},
});

age
: 
10
block_number
: 
null
business_name
: 
"Unique"
business_number
: 
"12345"
business_reg_agent_address
: 
"No 1. Akorede Str opp polytechnic ibadan, Sango Ibadan."
business_reg_agent_name
: 
"Soliu Babatunde Alley"
business_reg_year
: 
2023
createdAt
: 
"2023-01-28T07:24:32.535Z"
email
: 
"Soliualley@gmail.com"
fullname
: 
"Soliu Babatunde Alley"
isLandDeveloped
: 
false
isLandForMining
: 
false
landPurpose
: 
"Building"
land_size
: 
"3 Hectare"
nationality
: 
"Nigeria"
occupation
: 
"Developer"
phone
: 
9123456788
plot_number
: 
null
post_held
: 
"Senior"
stage
: 
0
state
: 
"Oyo"
status
: 
"pending"
street_number
: 
null
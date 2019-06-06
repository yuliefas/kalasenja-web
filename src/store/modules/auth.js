/* eslint-disable no-unused-vars */
import { instanceAuthApi } from '../../api'

export default {
  namespaced: true,
  state: { // global state
    token: localStorage.getItem('user-token'),
    isAuthenticate: !!localStorage.getItem('user-token'),
    // userLogin: JSON.parse(localStorage.getItem('user-login')) || null,
    userLogin: !!localStorage.getItem('user-token') || null,

    loginValidation: [],
  },
  mutations: {
    setLoginSuccess: (state, resp) => {
      state.token = resp.data.token;
      state.isAuthenticate = true;

      state.userLogin = true;
      localStorage.setItem('user-token', resp.data.token);
      localStorage.setItem('user-login', JSON.stringify(resp.data.token));
    },
    setLoginValidation: (state, resp) => {
      state.loginValidation = resp.data;
      setTimeout(() => {
        state.loginValidation = [];
      }, 2000);
    },
    authClear: (state) => {
      // state.status = false
      state.token = false
      state.isAuthenticate = false
      state.userLogin = false
      localStorage.clear();
    },
  },
  getters: {
    isAuthenticate: (state) => {
      return state.isAuthenticate;
    },
  },
  actions: { // allow asynchronous
    login({ commit }, payload) {
      instanceAuthApi.login(payload,
        (resp) => commit('setLoginSuccess', resp),
        (resp) => commit('setLoginValidation', resp));
    },
    logout({ commit }) {
      commit('authClear')
    }
  },
}
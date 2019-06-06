/* eslint-disable no-unused-vars */
import { instanceProductApi } from '../../api'

export default {
  namespaced: true,
  state: {
    product: {
      meta: {},
      data: [],
    },
  },
  mutations: {
    setAll: (state, resp) => {
      state.product = resp;
    },
  },
  getters: {
  },
  actions: {
    getAll({ commit }, payload) {
      instanceProductApi.list(payload, (resp) => commit('setAll', resp));
    },
  },
}
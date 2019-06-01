/* eslint-disable no-unused-vars */
import config from './../../config';

const formatError = (error) => ({
  title: error.message,
  text: 'error.response.data.message',
  message: '`${error.response.data.message}`',
  fullMessage: '`${error.message}: ${error.response.data.message}`'
});

export default {
  namespaced: true,
  state: {
    error: null,
    error401: null,
    error403: null,
    error405: null,
  },
  mutations: {
    error: (state, data) => {
      state.error = formatError(data)

      setTimeout(() => {
        state.error = null;
      }, config.timeout.alert);
    },

    /**
     * 403: Forbidden
     */
    error403: (state, data) => {
      state.error403 = formatError(data)

      setTimeout(() => {
        state.error403 = null;
      }, config.timeout.alert);
    },

    /**
     * 401: Unauthorized
     */
    error401: (state, data) => {
      state.error401 = formatError(data)

      setTimeout(() => {
        state.error401 = null;
      }, config.timeout.alert);
    },

    /**
     * 405: Method Not Allowed 
     * indicating that the specified request HTTP method was received and recognized by the server,
     * but the server has rejected that particular method for the requested resource
     */
    error405: (state, data) => {
      state.error405 = formatError(data)

      setTimeout(() => {
        state.error405 = null;
      }, config.timeout.alert);
    },

  },
  getters: {},
  actions: {
    setError: ({ commit }, data) => {
      commit('error', data);
    },
    setUnautorized: ({ commit }, data) => {
      commit('error401', data);
    },
    setForbidden: ({ commit }, data) => {
      commit('error403', data);
    },
    setMethodNotAllowed: ({ commit }, data) => {
      commit('error405', data);
    },
  },
}
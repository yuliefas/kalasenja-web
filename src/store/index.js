import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import global from './modules/global'
import auth from './modules/auth'
import product from './modules/product'


Vue.use(Vuex);

const debug = process.env.NODE_ENV || 'production';

/**
 * doc: https://vuex.vuejs.org/guide/modules.html
 */
export default new Vuex.Store({
  debug,
  // strict: debug !== 'production', // https://vuex.vuejs.org/guide/strict.html
  plugins: debug === 'development' ? [createLogger()] : [],
  modules: {
    auth,
    global,
    product
  },
  data() {
    return {
      error500: 'Error',
    }
  },
})

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Paginate from 'vuejs-paginate'
import VueSweetalert2 from 'vue-sweetalert2'
import NProgress from 'nprogress';
import BootstrapVue from 'bootstrap-vue';

Vue.use(Paginate);
Vue.use(VueSweetalert2);
Vue.use(BootstrapVue);

/**
 * doc: https://github.com/rstacruz/nprogress
 * demo: http://ricostacruz.com/nprogress/
 * github: https://github.com/rstacruz/nprogress
 * progress bar or loading
 */
Vue.use(NProgress);

// register global
window.$ = require('jquery');
window.JQuery = require('jquery');

// register global component
import Pagination from './commons/Pagination.vue';

Vue.component('Pagination', Pagination);

/**
 * Init all middleware into main
 * so we can call destructor middlewares
 * containt
 * - router
 * - store
 * reff: https://vuex.vuejs.org/guide/modules.html
 */
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

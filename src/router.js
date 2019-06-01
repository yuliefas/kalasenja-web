import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './components/routes'
// import NProgress from 'nprogress';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
});

const guard = (to, from, next) => {
  const { meta } = to;

  if (meta.user == 'admin') {
    if (meta.requiredAuth) {
      if (!localStorage.getItem('user-token')) {
        localStorage.clear();
        return next({ name: 'auth-login' })
      }
      return next();
    }
    if (to.name == 'auth-login') {
      if (localStorage.getItem('user-token')) {
        return next({ name: 'admin-module' })
      }
    }
  }

  return next();
};

/**
 *
 * Global Guards
 * reff: https://router.vuejs.org/guide/advanced/navigation-guards.html#global-guards
 */
router.beforeEach(guard);

/**
 * reff: https://scotch.io/tutorials/add-loading-indicators-to-your-vuejs-application
 */
router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    // NProgress.start();
  }
  next();
});

router.afterEach(() => {
  // NProgress.done();
});

export default router;

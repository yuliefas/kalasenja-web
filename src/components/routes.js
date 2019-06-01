import AuthLogin from './login'
import AdminHome from './admin-module/home'

const breadcrumbs = [
  { title: 'Home', name: 'home' }
];

const admin = {
  user: 'admin',
  requiredAuth: true,
  breadcrumbs,
};

const adminModule = [
  { meta: { ...admin }, path: '/', redirect: { name: 'admin-module' } },
  {
    name: 'auth-login', path: '/login', component: AuthLogin, meta: {
      ...admin, requiredAuth: false
    }
  },
  {
    name: 'admin-module',
    path: '/admin-module/home',
    component: AdminHome,
    meta: {
      ...admin,
      requiredAuth: true
    }
  }]

export default []
  .concat(adminModule);


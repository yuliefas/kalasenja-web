import config from './../config';

const { auth, me, category, product } = config.api;

import Api from './api';
import AuthApi from './auth.api';

export const instanceAuthApi = new AuthApi(auth);
export const instanceMeApi = new Api(me);
export const instanceCategoryApi = new Api(category);
export const instanceProductApi = new Api(product);
import axios from 'axios'
import config from './../../config'
import NProgress from 'nprogress';

let countingRequest = 0;

/**
 * reff: https://scotch.io/tutorials/add-loading-indicators-to-your-vuejs-application
 * create a new axios instance
 */
const http = axios.create({
  baseURL: config.api.baseURL,
  timeout: config.api.timeout,
});


/**
 * before a request is made start the nprogress
 */
http.interceptors.request.use(config => {
  countingRequest += 1;
  NProgress.start()
  return config;
});

/**
 * before a response is returned stop nprogress
 */
http.interceptors.response.use(response => {
  if (response) {
    countingRequest -= 1;
    NProgress.inc();
    if (!countingRequest) {
      NProgress.done();
    }
  }
  return response;
}, function (error) {
  countingRequest = 0;
  NProgress.done();
  // Do something with request error
  return Promise.reject(error);
});

export default http;

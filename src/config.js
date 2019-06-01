const baseURL = process.env.VUE_APP_BASE_URL;
const apiBaseURL = process.env.VUE_APP_API_BASE_URL;

export default {
  baseURL: baseURL || 'http://127.0.0.1:8080',
  timeout: {
    alert: 5 * 1000, // 5 seconds
  },
  api: {
    baseURL: apiBaseURL,
    auth: {
      login: '/api/v1/auth',
    },
    me: {
      index: '/api/v1/me'
    },
    category: {
      index: '/api/v1/category',
      detail: '/api/v1/category/:id',
    },
    product: {
      index: '/api/v1/category',
      detail: '/api/v1/category/:id',
    },
  },
}
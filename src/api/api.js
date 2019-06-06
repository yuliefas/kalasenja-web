// import NProgress from 'nprogress'; 
import store from './../store'
import http from './driver/axios'
import NProgress from 'nprogress';

const errorFn = (error) => {
  return store.dispatch('global/setError', error);
}

class Api {
  constructor(url = null) {
    this.url = url;
    this.http = http;
  }

  success(resp, succesCB) {
    if (resp.status == 200) {
      return succesCB(resp.data);
    }
    if (resp.status == 202) {
      return succesCB(resp.data);
    }
    if (resp.status == 201) {
      return succesCB(resp.data);
    }
  }

  catchError(error, validationCB = errorFn) {
    NProgress.done()
    if (error.response) {
      /**
       * error.response = {data: {…}, status: 401, statusText: "Unauthorized", headers: {…}, config: {…}, …}
       * error.response.data = {status: "error", message: "User not found"}
       */
      if (error.response.status == 401) {
        // token expired, invalid token
        return store.dispatch('global/setUnautorized', error);
      }
      if (error.response.status == 403) {
        return store.dispatch('global/setForbidden', error);
      }
      if (error.response.status == 405) {
        return store.dispatch('global/setMethodNotAllowed', error);
      }
      if (error.response.status == 422) {
        return validationCB(error.response.data);
      }
      if (error.response.status == 500) {
        return store.dispatch('global/setError', error);
      }
    }

    // if (!error.status) {
    //   // network error
    //   return store.dispatch('global/setError', {
    //     status: 'Vue Error',
    //     message: `${error.message} : Check your internet connection!`,
    //   });
    // }

    return store.dispatch('global/setError', error);
  }

  async GET(url, rest, succesCB) {
    return this.http
      .get(url, {
        headers: {
          'Authorization': localStorage.getItem('user-token'),
        },
        ...rest, 
      })
      .then((resp) => this.success(resp, succesCB))
      .catch((error) => this.catchError(error));
  }

  async DELETE(url, rest, succesCB) {
    return this.http
      .delete(url, {
        headers: {
          'Authorization': localStorage.getItem('user-token'),
        },
        ...rest,
      })
      .then((resp) => this.success(resp, succesCB))
      .catch((error) => this.catchError(error));
  }

  async POST(url, body, rest, succesCB, validationCB) {
    return this.http
      .post(url, body, {
        headers: {
          'Authorization': localStorage.getItem('user-token'),
        },
        ...rest,
      })
      .then((resp) => {
        return this.success(resp, succesCB);
      })
      .catch((error) => this.catchError(error, validationCB));
  }

  async PUT(url, body, rest, succesCB, validationCB) {
    return this.http
      .put(url, body, {
        headers: {
          'Authorization': localStorage.getItem('user-token'),
        },
        ...rest,
      })
      .then((resp) => this.success(resp, succesCB))
      .catch((error) => this.catchError(error, validationCB));
  }

  /**
   *
   *
   * @param {*} { id, ...options }
   * @param {*} succesCB
   * @memberof Api
   * 
   * how to use:
   * instanceApi.detail({ id, params: object })
   */
  detail({ id, ...options }, succesCB) {
    if (!id) {
      return store.dispatch('global/setError', {
        status: 'Error',
        message: 'InstanceApi:detail method',
        response: {
          data: {
            message: 'Id cant be blank'
          }
        }
      });
    }
    this.GET(this.url.detail.replace(':id', id), options, succesCB)
  }

  /**
   *
   *
   * @param {*} { ...options }
   * @param {*} succesCB
   * @memberof Api
   * 
   * how to use:
   * instanceApi.list({ params: object })
   */
  list({ ...options }, succesCB) {
    this.GET(this.url.root, options, succesCB)
  }

  /**
   *
   *
   * @param {*} { id, ...options }
   * @param {*} succesCB
   * @memberof Api
   * 
   * how to use:
   * instanceApi.delete({ id, params: object })
   */
  delete({ id, ...options }, succesCB) {
    if (!id) {
      return store.dispatch('global/setError', {
        status: 'Error',
        message: 'InstanceApi:delete method',
        response: {
          data: {
            message: 'Id cant be blank'
          }
        }
      });
    }
    this.DELETE(this.url.detail.replace(':id', id), options, succesCB)
  }

  create({ body, ...options }, succesCB, validationCB) {
    this.POST(this.url.root, body, options, succesCB, validationCB)
  }

  update({ id, body, ...options }, succesCB, validationCB) {
    if (!id) {
      return store.dispatch('global/setError', {
        status: 'Error',
        message: 'InstanceApi:update method',
        response: {
          data: {
            message: 'Id cant be blank'
          }
        }
      });
    }
    this.PUT(this.url.detail.replace(':id', id), body, options, succesCB, validationCB)
  }
}

export default Api;
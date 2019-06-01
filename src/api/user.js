/* eslint-disable no-console */
import Api from './api';

class UserApi extends Api {
  constructor(url) {
    super(url)
    this.url = url;
  }

  changePassword({ body, ...options }, succesCB, validationCB) {
    this.PUT(this.url.changePassword, body, options, succesCB, validationCB)
  }

}

export default UserApi;
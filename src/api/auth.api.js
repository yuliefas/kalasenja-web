import Api from './api';

class AuthApi extends Api {
  constructor(url) {
    super(url)
    this.url = url;
  }

  login({ body, ...rest }, succesCB, validationCB) {
    this.POST(this.url.login, body, rest, succesCB, validationCB)
  }
}

export default AuthApi;
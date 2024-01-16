export default class localStorageService {
  static getAccessToken() {
    return localStorage.getItem('token');
  };

  static setAccessToken(token) {
    return localStorage.setItem('token', token);
  };

  static removeToken() {
    return localStorage.removeItem('token')
  }
};


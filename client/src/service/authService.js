import { $api } from "../http";

export default class AuthService {
  static async registration(name, email, password) {
    try {
      return $api.post('/user/registration', {name, email, password})
    } catch(error) {
      console.log(error);
    }
  }

  static async login(name, password) {
    try {
      return $api.post('/user/login', {name, password})
    } catch(error) {
      console.log(error)
    }
  }
}
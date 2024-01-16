import {makeAutoObservable} from 'mobx'
import AuthService from '../service/authService'
import localStorageService from '../service/localStorageService'

export default class UserStore {
  _user = {}
  _isAuth = false

  constructor() {
    makeAutoObservable(this)
  }

  setAuth(bool) {
    this._isAuth = bool
  }

  setUser(user) {
    this._user = user
  }

  async login(name, password) {
    try {
      const response = await AuthService.login(name, password)
      const {data: {user, token}} = response

      localStorageService.setAccessToken(token.accessToken)
      this.setAuth(true)
      this.setUser(user)
    } catch(error) {
      console.log(error)
    }
  }

  async registration(name, email, password) {
    try {
      const response = await AuthService.registration(name, email, password)
      const {data: {user, token}} = response;

      localStorageService.setAccessToken(token.accessToken)
      this.setAuth(true)
      this.setUser(user)
    } catch(error) {
      console.log(error)
    }
  }

  async logout() {
    try {
      localStorageService.removeToken()
      this.setAuth(false)
      this.setUser({})
    } catch(error) {
      
    }
  }
}
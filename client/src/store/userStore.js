import {makeAutoObservable} from 'mobx'
import AuthService from '../service/authService'
import localStorageService from '../service/localStorageService'


export default class UserStore {
  _errorMess = ''
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

  setErrorMess(mess) {
    this._errorMess = mess
  }

  get isAuth() {
    return this._isAuth
  }

  get user() {
    return this._user
  }

  get errorMess() {
    return this._errorMess
  }

  async login(name, password) {
    try {
      const response = await AuthService.login(name, password)
      const {data: {user, token}} = response
      localStorageService.setAccessToken(token.accessToken)
      this.setAuth(true)
      this.setUser(user)
      return response
      
    } catch(error) {
      console.log(error)
      this.setErrorMess(error.response.data.message)
    }
  }

  async registration(name, email, password) {
    try {
      const response = await AuthService.registration(name, email, password)
      const {data: {user, token}} = response;
      localStorageService.setAccessToken(token.accessToken)
      this.setAuth(true)
      this.setUser(user)
      return response
    } catch(error) {
      console.log(error)
      this.setErrorMess(error.response.data.message)
    }
  }

  async logout() {
    try {
      localStorageService.removeToken()
      this.setAuth(false)
      this.setUser({})
    } catch(error) {
      console.log(error)
    }
  }

  async authCheck() {
    try { 
      const response = await AuthService.check()
      console.log(response)
      const {data: {user, token}} = response;
      localStorageService.setAccessToken(token.accessToken)
      this.setAuth(true)
      this.setUser(user)
      return response
    } catch(error) {
      console.log(error)
    }
  }
}
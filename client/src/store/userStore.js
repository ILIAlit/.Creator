import {makeAutoObservable} from 'mobx'
import AuthService from '../service/authService'
import tokenService from '../service/tokenService'


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

  get isAuth() {
    return this._isAuth
  }

  get user() {
    return this._user
  }

  async login(name, password) {
    try {
      const response = await AuthService.login(name, password)
      if(response) {
        const {data: {user, token}} = response
        tokenService.setAccessToken(token.accessToken)
        this.setAuth(true)
        this.setUser(user)
      }
      return response
    } catch({response: {data}}) {
      return {error: data.message}
    }
  }

  async registration(name, email, password) {
    try {
      const response = await AuthService.registration(name, email, password)
      const {data: {user, token}} = response;
      tokenService.setAccessToken(token.accessToken)
      this.setAuth(true)
      this.setUser(user)
      return response
    } catch({response: {data}}) {
      return {error: data.message}
    }
  }

  async logout() {
    try {
      tokenService.removeToken()
      this.setAuth(false)
      this.setUser({})
    } catch({response: {data}}) {
      return {error: data.message}
    }
  }

  async authCheck() {
    try { 
      const response = await AuthService.check()
      const {data: {user, token}} = response;
      tokenService.setAccessToken(token.accessToken)
      this.setAuth(true)
      this.setUser(user)
      return response
    } catch({response: {data}}) {
      return {error: data.message}
    }
  }
}
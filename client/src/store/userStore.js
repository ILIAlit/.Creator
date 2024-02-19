import { makeAutoObservable } from 'mobx'
import AuthService from '../service/authService'
import tokenService from '../service/tokenService'
import LoadingStore from './loadingStore'

export default class UserStore {
	_user = {}
	_isAuth = false
	loading

	constructor() {
		makeAutoObservable(this)
		this.loading = new LoadingStore()
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
		this.loading.setIsLoading(true)
		try {
			const response = await AuthService.login(name, password)
			if (response) {
				const {
					data: { user, token },
				} = response
				tokenService.setAccessToken(token.accessToken)
				this.setAuth(true)
				this.setUser(user)
			}
			return response
		} catch ({ response: { data } }) {
			return { error: data.message }
		} finally {
			this.loading.setIsLoading(false)
		}
	}

	async registration(name, email, password) {
		this.loading.setIsLoading(true)
		try {
			const response = await AuthService.registration(name, email, password)
			const {
				data: { user, token },
			} = response
			tokenService.setAccessToken(token.accessToken)
			this.setAuth(true)
			this.setUser(user)
			return response
		} catch ({ response: { data } }) {
			return { error: data.message }
		} finally {
			this.loading.setIsLoading(false)
		}
	}

	async logout() {
		this.loading.setIsLoading(true)
		try {
			tokenService.removeToken()
			this.setAuth(false)
			this.setUser({})
		} catch ({ response: { data } }) {
			return { error: data.message }
		} finally {
			this.loading.setIsLoading(false)
		}
	}

	async authCheck() {
		this.loading.setIsLoading(true)
		try {
			const response = await AuthService.check()
			const {
				data: { user, token },
			} = response
			tokenService.setAccessToken(token.accessToken)
			this.setAuth(true)
			this.setUser(user)
			return response
		} catch ({ response: { data } }) {
			return { error: data.message }
		} finally {
			this.loading.setIsLoading(false)
		}
	}
}

import { makeAutoObservable } from 'mobx'
import ProfileService from '../service/profileService'
import LoadingStore from './loadingStore'

export default class ProfileStore {
	_profile = {}
	_isProfile = false
	loading

	constructor() {
		makeAutoObservable(this)
		this.loading = new LoadingStore()
	}

	setProfile(profile) {
		this._profile = profile
	}

	setIsProfile(bool) {
		this._isProfile = bool
	}

	get profile() {
		return this._profile
	}

	get isProfile() {
		return this._isProfile
	}

	async updateProfile(profileData) {
		this.loading.setIsLoading(true)
		try {
			const response = await ProfileService.updateProfile(profileData)
			return response
		} catch ({ response: { data } }) {
			return { error: data.message }
		} finally {
			this.loading.setIsLoading(false)
		}
	}

	async getProfile() {
		this.loading.setIsLoading(true)
		try {
			const response = await ProfileService.getProfile()
			if (response) {
				const {
					data: { userProfile },
				} = response
				this.setProfile(userProfile)
				this.setIsProfile(true)
			}
			return response
		} catch ({ response: { data } }) {
			return { error: data.message }
		} finally {
			this.loading.setIsLoading(false)
		}
	}
}

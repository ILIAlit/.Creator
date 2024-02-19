import { makeAutoObservable } from 'mobx'
import FavoriteService from '../service/favoriteService'
import LoadingStore from './loadingStore'

export default class FavoriteStore {
	loading

	constructor() {
		makeAutoObservable(this)
		this.loading = new LoadingStore()
	}

	async checkIsSave(publicationId) {
		this.loading.setIsLoading(true)
		try {
			const response = await FavoriteService.checkIsSave(publicationId)
			const { data } = response
			return data.isSave
		} catch ({ response: { data } }) {
			return false
		} finally {
			this.loading.setIsLoading(false)
		}
	}

	async createFavorite(publicationId) {
		this.loading.setIsLoading(true)
		try {
			const response = await FavoriteService.createFavorite(publicationId)
			return response
		} catch ({ response: { data } }) {
			return { error: data.message }
		} finally {
			this.loading.setIsLoading(false)
		}
	}

	async deleteFavorite(publicationId) {
		this.loading.setIsLoading(true)
		try {
			const response = await FavoriteService.deleteFavorite(publicationId)
			return response
		} catch ({ response: { data } }) {
			return { error: data.message }
		} finally {
			this.loading.setIsLoading(false)
		}
	}
}

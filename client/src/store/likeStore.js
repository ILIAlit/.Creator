import { makeAutoObservable } from 'mobx'
import LikeService from '../service/likeService'
import LoadingStore from './loadingStore'

export default class LikeStore {
	loading

	constructor() {
		makeAutoObservable(this)
		this.loading = new LoadingStore()
	}

	async checkIsLike(publicationId) {
		this.loading.setIsLoading(true)
		try {
			const response = await LikeService.checkIsLike(publicationId)
			const { data } = response
			return data.isLike
		} catch {
			return false
		} finally {
			this.loading.setIsLoading(false)
		}
	}

	async createLike(publicationId) {
		this.loading.setIsLoading(true)
		try {
			const response = await LikeService.createLike(publicationId)
			return response
		} catch ({ response: { data } }) {
			return { error: data.message }
		} finally {
			this.loading.setIsLoading(false)
		}
	}

	async deleteLike(publicationId) {
		this.loading.setIsLoading(true)
		try {
			const response = await LikeService.deleteLike(publicationId)
			console.log('delete', response)
			return response
		} catch ({ response: { data } }) {
			return { error: data.message }
		} finally {
			this.loading.setIsLoading(false)
		}
	}
}

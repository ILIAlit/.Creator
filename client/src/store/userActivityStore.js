import { makeAutoObservable } from 'mobx'
import FavoriteService from '../service/favoriteService'
import LikeService from '../service/likeService'
import PublicationService from '../service/publicationService'
import { getPageCount } from '../utils/getPageCount'
import LoadingStore from './loadingStore'

export default class UserActivityStore {
	_totalPages = 0
	_limit = 5
	loading

	constructor() {
		makeAutoObservable(this)
		this.loading = new LoadingStore()
	}

	setTotalPages(count) {
		this._totalPages = count
	}

	get totalPages() {
		return this._totalPages
	}

	get limit() {
		return this._limit
	}

	async getUserPublications(page) {
		this.loading.setIsLoading(true)
		try {
			const response = await PublicationService.getUserPublications(
				this.limit,
				page
			)
			const totalCount = response.data.count
			this.setTotalPages(getPageCount(totalCount, this.limit))
			return response
		} catch ({ response: { data } }) {
			return { error: data.massage }
		} finally {
			this.loading.setIsLoading(false)
		}
	}

	async getUserFavorites(page) {
		this.loading.setIsLoading(true)
		try {
			const response = await FavoriteService.getUserFavorites(this.limit, page)
			const totalCount = response.data.count
			this.setTotalPages(getPageCount(totalCount, this.limit))
			return response
		} catch ({ response: { data } }) {
			return { error: data.message }
		} finally {
			this.loading.setIsLoading(false)
		}
	}

	async getUserLikes(page) {
		this.loading.setIsLoading(true)
		try {
			const response = await LikeService.getUserLikes(this.limit, page)
			const totalCount = response.data.count
			this.setTotalPages(getPageCount(totalCount, this.limit))
			return response
		} catch ({ response: { data } }) {
			return { error: data.message }
		} finally {
			this.loading.setIsLoading(false)
		}
	}
}

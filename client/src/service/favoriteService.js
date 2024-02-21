import { $authApi } from '../http'

export default class FavoriteService {
	static async checkIsSave(publicationId) {
		try {
			return $authApi.get('publication/checkIsSave', {
				params: { publicationId },
			})
		} catch (error) {
			console.log(error)
		}
	}
	static async createFavorite(publicationId) {
		try {
			return $authApi.post('favorite/', { publicationId })
		} catch (error) {
			console.log(error)
		}
	}

	static async deleteFavorite(publicationId) {
		try {
			return $authApi.delete('favorite/', { params: { publicationId } })
		} catch (error) {
			console.log(error)
		}
	}

	static async getUserFavorites(limit, page) {
		try {
			return $authApi.get('favorite/getUserFavorites', {
				params: { limit, page },
			})
		} catch (error) {
			console.log(error)
		}
	}
}

import { $authApi } from '../http'

export default class LikeService {
	static async checkIsLike(publicationId) {
		try {
			return $authApi.get('publication/checkIsLike', {
				params: { publicationId },
			})
		} catch (error) {
			console.log(error)
		}
	}

	static async createLike(publicationId) {
		try {
			return $authApi.post('like/', { publicationId })
		} catch (error) {
			console.log(error)
		}
	}

	static async deleteLike(publicationId) {
		try {
			return $authApi.delete('like/', { params: { publicationId } })
		} catch (error) {
			console.log(error)
		}
	}

	static async getUserLikes(limit, page) {
		try {
			return $authApi.get('like/getUserLikes', {params: {limit, page} })
		} catch (error) {
			console.log(error)
		}
	}
}

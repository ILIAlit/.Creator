const favoriteRepository = require('../data/repositories/favoriteRepository')
const PaginationModule = require('../modules/PaginationModule')
const ApiError = require('../error/ApiError')

class FavoriteService {
	async createFavorite(user, publicationId) {
		const userId = user.id
		const favorite = await favoriteRepository.createFavorite(
			userId,
			publicationId
		)
		if (!favorite) {
			throw ApiError.badRequest('Ошибка добавления!')
		}
		return favorite
	}

	async deleteFavorite(user, publicationId) {
		const userId = user.id
		const favorite = await favoriteRepository.deleteFavorite(
			userId,
			publicationId
		)
		if (!favorite) {
			throw ApiError.badRequest('Ошибка удаления!')
		}
		return favorite
	}

	async getFavorites(user, limit, page) {
		const userId = user.id
		const { limit: limitVerify, offset } = new PaginationModule(limit, page)
		const favorites = await favoriteRepository.getFavorites(
			userId,
			(limit = limitVerify),
			offset
		)
		return favorites
	}
}

module.exports = new FavoriteService()

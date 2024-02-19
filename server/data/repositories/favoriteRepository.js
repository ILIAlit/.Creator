const Favorites = require('../models/favoritesModel')
const Publication = require('../models/publicationModel')

class FavoriteRepository {
	async createFavorite(userId, publicationId) {
		const favorite = await Favorites.create({ userId, publicationId })
		return favorite
	}

	async deleteFavorite(userId, publicationId) {
		return await Favorites.destroy({ where: { userId, publicationId } })
	}

	async getFavorites(userId, limit, offset) {
		const favorite = await Favorites.findAndCountAll({
			where: { userId },
			include: [{ model: Publication }],
			limit,
			offset,
		})
		return favorite
	}

	async getOne(userId, publicationId) {
		const favorite = await Favorites.findOne({
			where: { userId, publicationId },
		})
		return favorite
	}
}

module.exports = new FavoriteRepository()

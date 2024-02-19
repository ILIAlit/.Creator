const Favorites = require('../models/favoritesModel')
const Publication = require('../models/publicationModel')
const User = require('../models/userModel')

class FavoriteRepository {
	async createFavorite(userId, publicationId) {
		const favorite = await Favorites.create({ userId, publicationId })
		return favorite
	}

	async deleteFavorite(userId, publicationId) {
		return await Favorites.destroy({ where: { userId, publicationId } })
	}

	async getUserFavorites(userId, limit, offset) {
		const favorite = await Publication.findAndCountAll({
			include: [
				{ model: Favorites, where: { userId } },
				{ model: User, attributes: ['name'] },
			],
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

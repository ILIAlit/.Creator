const favoriteService = require('../service/favoriteService')

class FavoriteController {
	async createFavorite(req, res, next) {
		try {
			const user = req.user
			const { publicationId } = req.body
			const favorite = await favoriteService.createFavorite(user, publicationId)
			res.json(favorite)
		} catch (error) {
			next(error)
		}
	}

	async deleteFavorite(req, res, next) {
		try {
			const user = req.user
			const { publicationId } = req.query
			const favorite = await favoriteService.deleteFavorite(user, publicationId)
			res.json(favorite)
		} catch (error) {
			next(error)
		}
	}

	async getFavorites(req, res, next) {
		try {
			const user = req.user
			const { limit, page } = req.query
			const favorites = await favoriteService.getFavorites(user, limit, page)
			res.json(favorites)
		} catch (error) {
			next(error)
		}
	}
}

module.exports = new FavoriteController()

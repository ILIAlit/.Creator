const likeService = require('../service/likeService')

class LikeController {
	async createLike(req, res, next) {
		try {
			const user = req.user
			const { publicationId } = req.body
			const like = await likeService.createLike(user, publicationId)
			return res.json(like)
		} catch (error) {
			next(error)
		}
	}

	async deleteLike(req, res, next) {
		try {
			const user = req.user
			const { publicationId } = req.query
			const like = await likeService.deleteLike(user, publicationId)
			return res.json(like)
		} catch (error) {
			next(error)
		}
	}

	async getUserLikes(req, res, next) {
		try {
			const user = req.user
			const { limit, page } = req.query
			const likes = await likeService.getUserLikes(user, limit, page)
			return res.json(likes)
		} catch (error) {
			next(error)
		}
	}
}

module.exports = new LikeController()

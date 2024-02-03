const tagService = require('../service/tagService');

class TagController {
	async getPopularTag(req, res, next) {
		try {
			const { limit } = req.query;
			const tags = await tagService.getPopularTag(limit);
			return res.json(tags);
		} catch (error) {
			next(error);
		}
	}
}

module.exports = new TagController();

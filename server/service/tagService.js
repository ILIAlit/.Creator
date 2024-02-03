const tagRepository = require('../data/repositories/tagRepository');

class TagService {
	async getPopularTag(limit = 5) {
		return await tagRepository.getPopularTags(limit);
	}
}

module.exports = new TagService();

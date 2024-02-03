const Tag = require('../models/tagModel');
const sequelize = require('../db');

class TagRepository {
	async createTag(category) {
		const tag = await Tag.create({ category, publicationCount: 0 });
		return tag;
	}

	async getPopularTags(limit) {
		const tags = await Tag.findAll({limit, order: [['publicationCount', 'DESC']] });
		return tags;
	}

	async getOneTag(category) {
		const tag = await Tag.findOne({ where: { category } });
		return tag;
	}

	async incrementTagCount(tag) {
		await tag.increment('publicationCount');
		await tag.save();
	}
}

module.exports = new TagRepository();

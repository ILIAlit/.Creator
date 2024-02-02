const Tag = require('../models/tagModel');

class TagRepository {
	async createTag(category) {
		const tag = await Tag.create({ category, publicationCount: 0 });
		return tag;
	}

	async getTags() {
		const tags = await Tag.findAll();
		return tags;
	}

	async getOneTag(category) {
		const tag = await Tag.findOne({ where: { category } });
		return tag;
	}

	async incrementTagCount(tag) {
		try {
			await tag.increment('publicationCount');
			await tag.save();
			console.log('Счетчик успешно обновлен.');
		} catch (error) {
			console.error('Ошибка при обновлении счетчика:', error);
		}
	}
}

module.exports = new TagRepository();

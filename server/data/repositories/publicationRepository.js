const { model } = require('../db');
const Publication = require('../models/publicationModel');
const Tag = require('../models/tagModel');

class PublicationRepository {
	async createPublication(publData) {
		const publication = await Publication.create(publData);
		return publication;
	}

	async getUserPublication(user) {}

	async getPublications(limit, offset) {
		const publications = await Publication.findAndCountAll({ limit, offset });
		return publications;
	}

	async getPublicationsByTag(tagId, limit, offset) {
		const publications = await Tag.findAndCountAll({
			where: { id: tagId },
			include: [{ model: Publication }],
			limit,
			offset,
		});
		return publications;
	}

	async getOnePublication() {}

	async addPublicationTag(tag, publication) {
		await publication.addTag(tag);
	}
}

module.exports = new PublicationRepository();

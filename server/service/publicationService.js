const publicationRepository = require('../data/repositories/publicationRepository');
const tagRepository = require('../data/repositories/tagRepository');
const userRepository = require('../data/repositories/userRepository');
const imageUploadService = require('./imageUploadService');

class PublicationService {
	async createPublication(
		userData,
		publImage,
		title,
		description,
		link,
		tags
	) {
		const user = await userRepository.findOne(userData.name);
		const image = await imageUploadService.uploadCloudImage(publImage);
		const publication = await publicationRepository.createPublication({
			userId: user.id,
			image,
			title,
			description,
			link,
			likeCount: 0,
		});
		tags = JSON.parse(tags);
		tags.map(async (itemTag) => {
			let tag = await tagRepository.getOneTag(itemTag);
			if (!tag) {
				tag = await tagRepository.createTag(itemTag);
			}
			await publicationRepository.addPublicationTag(tag, publication);
			await tagRepository.incrementTagCount(tag);
		});
		return publication;
	}

	async getPublications(tagId, limit, page) {
		limit = limit || 9;
		page = page || 1;
		let offset = page * limit - limit;
		let publications;
		if (tagId) {
			publications = await publicationRepository.getPublicationsByTag(
				tagId,
				limit,
				offset
			);
		} else {
			publications = await publicationRepository.getPublications(
				limit,
				offset
			);
		}
		return publications;
	}

	async getOnePublication() {
		try {
			return res.json('publ getOne');
		} catch (error) {
			next(error);
		}
	}
}

module.exports = new PublicationService();

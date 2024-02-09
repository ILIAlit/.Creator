const publicationRepository = require('../data/repositories/publicationRepository');

class PublicationSorter {
	constructor() {}

	async sort(tagId, orderBy, limit, offset) {
		if (tagId && orderBy === 'new') {
			return await publicationRepository.getNewPublicationsByTag(
				tagId,
				limit,
				offset
			);
		}
		if (tagId) {
			return await publicationRepository.getPublicationsByTag(
				tagId,
				limit,
				offset
			);
		}
		if (orderBy) {
			return await publicationRepository.getNewPublications(limit, offset);
		}
		return await publicationRepository.getPublications(limit, offset);
	}
}

module.exports = new PublicationSorter();

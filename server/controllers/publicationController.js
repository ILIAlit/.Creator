const publicationService = require('../service/publicationService');

class PublicationController {
	async createPublication(req, res, next) {
		try {
			const { image: publImage } = req.files;
			const userData = req.user;
			const { title, description, link, tags } = req.body;
			const publication = await publicationService.createPublication(
				userData,
				publImage,
				title,
				description,
				link,
				tags
			);
			return res.json(publication);
		} catch (error) {
			next(error);
		}
	}

	async getPublications(req, res, next) {
		try {
			const { tagId, limit, page } = req.query;
			const publications = await publicationService.getPublications(tagId, limit, page);
			return res.json(publications);
		} catch (error) {
			next(error);
		}
	}

	async getOnePublication(req, res, next) {
		try {
			return res.json('publ getOne');
		} catch (error) {
			next(error);
		}
	}
}

module.exports = new PublicationController();

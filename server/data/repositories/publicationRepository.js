const Publication = require("../models/publicationModel")


class PublicationRepository {
  async createPublication(publData) {
    const publication = await Publication.create(publData)
    return publication
  }

  async getUserPublication(user) {

  }

  async getPublications() {
    
  }

  async getOnePublication() {

  }

  async addPublicationTag(tag, publication) {
    await publication.addTag(tag)
  }
}

module.exports = new PublicationRepository()
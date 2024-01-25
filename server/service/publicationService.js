const publicationRepository = require("../data/repositories/publicationRepository")
const tagRepository = require("../data/repositories/tagRepository")
const userRepository = require("../data/repositories/userRepository")
const imageUploadService = require("./imageUploadService")


class PublicationService {
  async createPublication(userData, publImage, title, description, link, tags) {
    const user = await userRepository.findOne(userData.name)
    const image = await imageUploadService.uploadCloudImage(publImage)
    const publication = await publicationRepository.createPublication({userId: user.id, image, title, description, link})
      tags = JSON.parse(tags)
      tags.map(async (itemTag) => {
        let tag = await tagRepository.getOneTag(itemTag)
        if(!tag) {
          tag = await tagRepository.createTag(itemTag)
        }
        await publicationRepository.addPublicationTag(tag, publication)
      })
      return publication
  }

  async getPublication() {
    try {
      return res.json('publ get')
    } catch(error) {
      next(error)
    }
  }

  async getOnePublication() {
    try {
      return res.json('publ getOne')
    } catch(error) {
      next(error)
    }
  }
}

module.exports = new PublicationService()
const Tag = require("../models/tagModel")



class TagRepository {
  async createTag(category) {
    const tag = await Tag.create({category})
    return tag
  }

  async getTags() {
    const tags = await Tag.findAll()
    return tags
  }

  async getOneTag(category) {
    const tag = await Tag.findOne({where: {category}})
    return tag
  }
}

module.exports = new TagRepository()
const { Profile } = require("../models/models")


class ProfileRepository {
  async get(user) {
    const profile = await user.getProfile()
    return profile
  }

  async create(profileData) {
    const profile = await Profile.create(profileData)
    return profile
  }
}

module.exports = new ProfileRepository()
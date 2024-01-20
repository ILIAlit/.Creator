const Profile = require("../data/repositories/profileRepository")
const User = require("../data/repositories/userRepository")
const ApiError = require("../error/ApiError")



class ProfileService {
  async getProfile({name}) {
    const user = await User.findOne(name)
    const userProfile = await Profile.get(user)
    if(!userProfile) {
      throw ApiError.badRequest('Профиль не найден!')
    }
    return {
      userProfile
    }
  }

  async createProfile({name}, {instagramLink, telegramLink, status}) {
    const avatar = "Аватар!!!"
    const user = await User.findOne(name)
    const isProfile = await Profile.get(user)
    if(isProfile) {
      throw ApiError.badRequest('Профиль существует!')
    }
    const userProfile = await Profile.create({instagramLink, avatar, telegramLink, status, userId: user.id})
    return {
      userProfile
    } 
  }

  async getProfileAvatar(user) {
    const profile = await Profile.get(user)
    if(!profile) {
      return null
    }
    const profileAvatar = profile['avatar']
    if(!profileAvatar) {
      return null
    }
    return profileAvatar
  }
}

module.exports = new ProfileService()
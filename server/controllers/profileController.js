const profileService = require("../service/profileService");


class ProfileController {
  async getProfile(req, res, next) {
    try {
      const {name} = req.user
      const profile = await profileService.getProfile(name)
      return res.json(profile);
    } catch(error) {
      next(error);
    };
  };
  async createProfile(req, res, next) {
    try {
      const {instagramLink, telegramLink, status} = req.body
      const {name} = req.user
      const {avatar:avatarFile} = req.files
      const profile = await profileService.createProfile(name, instagramLink, telegramLink, status, avatarFile)
      return res.json(profile);
    } catch(error) {
      next(error);
    };
  };
};

module.exports = new ProfileController();
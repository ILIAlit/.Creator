const profileService = require("../service/profileService");


class ProfileController {
  async getProfile(req, res, next) {
    try {
      const userReq = req.user
      const profile = await profileService.getProfile(userReq)
      return res.json(profile);
    } catch(error) {
      next(error);
    };
  };
  async createProfile(req, res, next) {
    try {
      const userReq = req.user
      const profileReq = req.body
      const profile = await profileService.createProfile(userReq, profileReq)
      return res.json(profile);
    } catch(error) {
      next(error);
    };
  };
};

module.exports = new ProfileController();
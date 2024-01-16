

class ProfileController {
  async getProfile(req, res, next) {
    try {
      return res.json("get profile");
    } catch(error) {
      next(error);
    };
  };
  async createProfile(req, res, next) {
    try {
      return res.json("post profile");
    } catch(error) {
      next(error);
    };
  };
};

module.exports = new ProfileController();
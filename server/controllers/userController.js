const ApiError = require("../error/ApiError");
const userService = require("../service/userService");

class UserController {
  async registration(req, res, next) {
    try {
      const {name, email, password} = req.body;
      const userData = await userService.registration(name, email, password);
      return res.json(userData);
    } catch(error) {
      next(error);
    };
  };

  async login(req, res, next) {
    try {
      const {name, password} = req.body;
      const userData = await userService.login(name, password);
      return res.json(userData);
    } catch(error) {
      next(error);
    }
  };
  async check(req, res, next) {
    try {
      return res.json(res.query);
    } catch(error) {
      next(error);
    }
  }
}

module.exports = new UserController();
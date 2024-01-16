const { User } = require("../models/models");
const bcrypt = require('bcrypt');
const generateToken = require('./tokenService');
const UserDto = require("../dtos/userDto");
const tokenService = require("./tokenService");
const ApiError = require("../error/ApiError");


class UserService {
  async registration(name, email, password) {
    const candidate = await User.findOne({where: {name}});
    if(candidate) {
      throw ApiError.badRequest(`Пользователь с именем ${name} существует`);
    };
    const hashPassword = await bcrypt.hash(password, 3);
    const user = await User.create({name, email, password: hashPassword});
    const userDto = new UserDto(user);
    const token = tokenService.generateToken({...userDto});
    
    return {
      token,
      user: userDto,
    }
  };

  async login(name, password) {
    const user = await User.findOne({where: {name}});
    if(!user) {
      throw ApiError.badRequest(`Пользователь с именем ${name} не существует`);
    };
    const isPassEquals = await bcrypt.compare(password, user.password);
    if(!isPassEquals) {
      throw ApiError.badRequest('Неверный пароль');
    };
    const userDto = new UserDto(user);
    const token = tokenService.generateToken({...userDto});
    
    return {
      token,
      user: userDto,
    };
  };
}

module.exports = new UserService();
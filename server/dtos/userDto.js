module.exports = class UserDto {
  name;
  avatar;

  constructor(user, avatar) {
    this.avatar = avatar;
    this.name = user.name;
  };
}
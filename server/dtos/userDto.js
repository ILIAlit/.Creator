module.exports = class UserDto {
  name;
  avatar;

  constructor({avatar, name}) {
    this.avatar = avatar;
    this.name = name;
  };
}
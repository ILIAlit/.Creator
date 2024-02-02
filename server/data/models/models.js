const Favorites = require('./favoritesModel');
const Profile = require('./profileModel');
const PublicationFavorites = require('./publicationFavoritesModel');
const Publication = require('./publicationModel');
const PublicationTag = require('./publicationTagModel');
const Tag = require('./tagModel');
const User = require('./userModel');

User.hasOne(Profile);
Profile.belongsTo(User);

User.hasMany(Publication);
Publication.belongsTo(User);

Publication.belongsToMany(Tag, { through: PublicationTag });
Tag.belongsToMany(Publication, { through: PublicationTag });

User.hasMany(Favorites);
Favorites.belongsTo(User);

Publication.belongsToMany(Favorites, { through: PublicationFavorites });
Favorites.belongsToMany(Publication, { through: PublicationFavorites });

module.exports = {
	User,
	Publication,
	Profile,
	Tag,
	PublicationTag,
	Favorites,
};

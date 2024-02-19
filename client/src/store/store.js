import AlertStore from './alertStore'
import FavoriteStore from './favoriteStore'
import LikeStore from './likeStore'
import ProfileStore from './profileStore'
import PublicationStore from './publicationStore'
import TagStore from './tagStore'
import UserStore from './userStore'

export const store = {
	userStore: new UserStore(),
	profileStore: new ProfileStore(),
	publicationStore: new PublicationStore(),
	tagStore: new TagStore(),
	likeStore: new LikeStore(),
	favoriteStore: new FavoriteStore(),
	alertStore: new AlertStore(),
}

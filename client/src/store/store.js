import AlertStore from './alertStore';
import ProfileStore from './profileStore';
import PublicationStore from './publicationStore';
import UserStore from './userStore';

export const store = {
	userStore: new UserStore(),
	profileStore: new ProfileStore(),
	publicationStore: new PublicationStore(),
	alertStore: new AlertStore(),
};

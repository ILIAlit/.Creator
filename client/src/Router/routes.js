import {
	CREATE_PUBLICATION_ROUTE,
	HOME_ROUTE,
	LOGIN_ROUTE,
	PROFiLE_ROUTE,
	REGISTRATION_ROUTE,
} from '../utils/consts';
import CreatePublication from '../pages/CreatePublication/CreatePublication';
import Registration from '../pages/Registration/Registration';
import Profile from '../pages/Profile/Profile';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';

export const authRoutes = [
	{
		path: PROFiLE_ROUTE,
		Component: <Profile />,
	},
	{
		path: CREATE_PUBLICATION_ROUTE,
		Component: <CreatePublication />,
	},
];

export const publicRoutes = [
	{
		path: HOME_ROUTE,
		Component: <Home />,
	},
	{
		path: REGISTRATION_ROUTE,
		Component: <Registration />,
	},
	{
		path: LOGIN_ROUTE,
		Component: <Login />,
	},
];

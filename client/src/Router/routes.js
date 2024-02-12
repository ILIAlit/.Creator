import CreatePublication from '../pages/CreatePublication/CreatePublication'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import PreviewPublication from '../pages/PreviewPublication/PreviewPublication'
import Profile from '../pages/Profile/Profile'
import Registration from '../pages/Registration/Registration'
import {
	CREATE_PUBLICATION_ROUTE,
	HOME_ROUTE,
	LOGIN_ROUTE,
	PREVIEW_PUBLICATION_ROUTE,
	PROFiLE_ROUTE,
	REGISTRATION_ROUTE,
} from '../utils/consts'

export const authRoutes = [
	{
		path: PROFiLE_ROUTE,
		Component: <Profile />,
	},
	{
		path: CREATE_PUBLICATION_ROUTE,
		Component: <CreatePublication />,
	},
]

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
	{
		path: PREVIEW_PUBLICATION_ROUTE + '/:id',
		Component: <PreviewPublication />,
	},
]

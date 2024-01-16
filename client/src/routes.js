import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile";
import Registration from './pages/Registration/Registration'
import { HOME_ROUTE, LOGIN_ROUTE, PROFiLE_ROUTE, REGISTRATION_ROUTE} from "./utils/consts";


export const authRoutes = [
  {
    path: PROFiLE_ROUTE,
    Component: <Profile />
  }
];

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    Component: <Home />
  },
  {
    path: REGISTRATION_ROUTE,
    Component: <Registration />
  },
  {
    path: LOGIN_ROUTE,
    Component: <Login />
  }
];
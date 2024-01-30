import Header from "../Header/Header";
import AlertMessage from "../UI/AlertMessage";
import {observer} from 'mobx-react-lite'
import { useAuthCheck } from "../../hooks/useAuthCheck";
import { useContext } from "react";
import { Context } from "../../context";
import Loader from "../UI/Loader";


const Layout = ({children}) => {
  
  const {userStore: {loading, isAuth, user, logout}} = useContext(Context)
  useAuthCheck()


  if(loading.isLoading) {
    return (
      <Loader />
    )
  }

  return (
    <div>
      <Header isAuth={isAuth} user={user} logout={logout} />
        {children}
      <AlertMessage />
    </div>
  );
}

export default observer(Layout);
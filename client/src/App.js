import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import {observer} from 'mobx-react-lite'
import { useContext, useEffect } from "react";
import { Context } from "./index";

function App() {

  const {userStore} = useContext(Context)

  useEffect(() => {
    userStore.authCheck()
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
}

export default observer(App);

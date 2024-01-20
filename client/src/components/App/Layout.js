import Header from "../Header";
import AlertMessage from "../AlertMessage";
import {observer} from 'mobx-react-lite'
import { useAuthCheck } from "../../hooks/useAuthCheck";


const Layout = ({children}) => {

  useAuthCheck()

  return (
    <div>
      <Header />
        {children}
      <AlertMessage />
    </div>
  );
}

export default observer(Layout);
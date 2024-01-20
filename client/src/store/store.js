import AlertStore from "./alertStore";
import ProfileStore from "./profileStore";
import UserStore from "./userStore";


export const store = {
  userStore: new UserStore(),
  profileStore: new ProfileStore(),
  alertStore: new AlertStore()
}



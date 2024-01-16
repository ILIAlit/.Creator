import AlertStore from "./alertStore";
import UserStore from "./userStore";

export const Store = {
  userStore: new UserStore(),
  alertStore: new AlertStore(),
}
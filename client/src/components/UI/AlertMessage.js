import { Snackbar, Alert } from "@mui/material";
import {observer} from 'mobx-react-lite'
import { useContext } from "react";
import { Context } from "../../context";

const AlertMassage = () => {

  const {alertStore} = useContext(Context)

  return (
    <Snackbar
      open = {alertStore.isOpen}>
      <Alert  onClose = {() => alertStore.alertHide()} severity = {alertStore.type}>{alertStore.message}</Alert>
    </Snackbar>
  );
}

export default observer(AlertMassage);
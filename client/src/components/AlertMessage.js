import { Snackbar, Alert } from "@mui/material";
import { useContext } from "react";
import { Context } from "../index";
import {observer} from 'mobx-react-lite'

const AlertMassage = ({duration, severity, text}) => {
  const {alertStore} = useContext(Context)


  return (
    <Snackbar
      open = {alertStore.isOpen}
      autoHideDuration= {duration}
      onClose={() => alertStore.setIsOpen(false)}>
      <Alert onClose = {() => alertStore.setIsOpen(false)} severity = {severity}>{text}</Alert>
    </Snackbar>
  );
}

export default observer(AlertMassage);
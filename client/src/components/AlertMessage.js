import { Snackbar, Alert } from "@mui/material";
import {observer} from 'mobx-react-lite'

const AlertMassage = ({duration, severity, text, isOpen, onClose}) => {


  return (
    <Snackbar
      open = {isOpen}
      autoHideDuration= {duration}
      onClose={() => onClose()}>
      <Alert onClose = {() => onClose()} severity = {severity}>{text}</Alert>
    </Snackbar>
  );
}

export default observer(AlertMassage);
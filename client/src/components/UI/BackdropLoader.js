import { Backdrop } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';


const BackdropLoader = ({isOpen}) => {
  return (
    <Backdrop 
      open={isOpen}
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default BackdropLoader;
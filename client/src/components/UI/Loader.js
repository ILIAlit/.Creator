import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';

const defaultTheme = createTheme();

const Loader = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth = "sx" sx={{m: 7, display: 'flex', justifyContent: 'center',}}>
        <CssBaseline />
        <CircularProgress />
      </Container>
    </ThemeProvider>
  );
}

export default Loader;
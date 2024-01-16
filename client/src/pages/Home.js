import { Box, Container, CssBaseline, Grid, ThemeProvider, Typography, createTheme } from '@mui/material';


const defaultTheme = createTheme();


const Home = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box
      sx={{
        pt: 8,
        pb: 6,
      }}>
        <Container component="main"  maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom>
            Библиотека
          </Typography>
        </Container>
      </Box>
      <Container sx={{py: 8}} maxWidth="xl">
        {/* <Grid container spacing={2}>
          {cards.map((card, index) => (
            <Grid item key={card} xs={12} sm={6} md={4} >
              <Publication img={images[index]}/>
            </Grid>
          ))}
        </Grid> */}
      </Container>
    </ThemeProvider>
  );
}

export default Home;

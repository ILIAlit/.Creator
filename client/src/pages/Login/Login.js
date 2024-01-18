import { ThemeProvider } from "@emotion/react";
import { Box, Container, CssBaseline, createTheme, Typography, Grid, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationShema } from "./validation";
import { useContext, useState } from "react";
import {Context}  from '../../context/index';
import { HOME_ROUTE, REGISTRATION_ROUTE } from "../../utils/consts";
import AlertMessage from "../../components/AlertMessage";
import { useNavigate, Link } from 'react-router-dom'
import Input from "../../components/Input";

const defaultTheme = createTheme();

const Login = () => {
  const navigate = useNavigate();
  const {userStore} = useContext(Context)
  const [alertOpen, setAlertOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  console.log(userStore.error)

  const {control, handleSubmit } = useForm({
    resolver: yupResolver(validationShema),
  })

  const onSubmit = async ({name, password}) => {
    setLoading(true)
    userStore.login(name, password)
      .then((res) => {
        if(!res) {
          setAlertOpen(true)
        } else {
          navigate(HOME_ROUTE)
        }
      })
      .finally(() => setLoading(false))
  };

  const alertClose = () => {
    setAlertOpen(false)
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              mb: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Typography component="h1" variant="h3" sx={{mb: 3}}>Creator.</Typography>
            <Typography component="h3" variant="h6">Вход</Typography>
            <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{mt: 3}}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Input 
                    id ="name" 
                    control={control}
                    name="name" 
                    label="Имя" 
                    variant="outlined" 
                    type="text"   
                  />
                </Grid>
                <Grid item xs={12}>
                <Input 
                  id ="password" 
                  control={control} 
                  name="password" 
                  label="Пароль" 
                  variant="outlined" 
                  type="text"  />
                </Grid>
              </Grid>
              <LoadingButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 5, mb: 3, fontSize: '16px'  }}
                loading={loading}
                loadingIndicator="Загрузка…">
                Войти
              </LoadingButton>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to={REGISTRATION_ROUTE} variant="body2">
                    У тебя нет аккаунта? Пройди регистрацию!
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
      </Container>
      <AlertMessage 
        isOpen={alertOpen} 
        onClose={alertClose} 
        duration = {2000} 
        severity = 'error' 
        text = {userStore.error.errorMess} />
    </ThemeProvider>
  );
}

export default Login;
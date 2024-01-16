import { ThemeProvider } from "@emotion/react";
import { Box, Container, CssBaseline, createTheme, Typography, Grid, TextField, Link } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationShema } from "./validation";
import { useContext, useState } from "react";
import {Context}  from '../../index';
import { HOME_ROUTE, REGISTRATION_ROUTE } from "../../utils/consts";
import AlertMessage from "../../components/AlertMessage";
import { useNavigate } from 'react-router-dom'

const defaultTheme = createTheme();

const Login = () => {
  const navigate = useNavigate();
  const {userStore, alertStore} = useContext(Context)
  const [loading, setLoading] = useState(false)

  const {control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationShema),
  })

  const onSubmit = async ({name, password}) => {
    setLoading(true)
    userStore.login(name, password)
      .then((res) => {
        if(!res) {
          alertStore.setIsOpen(true)
        } else {
          navigate(HOME_ROUTE)
        }
      })
      .finally(() => setLoading(false))
  };

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
                  <Controller 
                    name="name"
                    control={control}
                    render={({field}) => (
                      <TextField
                        value={field.value}
                        onChange={(event) => {field.onChange(event)}}
                        helperText = {errors.name?.message}
                        error = {!!errors.name?.message}
                        fullWidth
                        label="Имя"
                        autoFocus/>
                    )}/>
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="password"
                    control={control}
                    render={({field}) => (
                      <TextField
                        value={field.value}
                        onChange={(event) => {field.onChange(event)}}
                        helperText = {errors.password?.message}
                        error = {!!errors.password?.message}
                        fullWidth
                        label="Пароль"
                        type="password"/>
                    )}/>
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
                  <Link href={REGISTRATION_ROUTE} variant="body2">
                    У тебя нет аккаунта? Пройди регистрацию!
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
      </Container>
      <AlertMessage duration = {20000} severity = 'error' text = {userStore.errorMess} />
    </ThemeProvider>
  );
}

export default Login;
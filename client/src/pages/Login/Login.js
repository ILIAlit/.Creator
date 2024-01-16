import { ThemeProvider } from "@emotion/react";
import { Box, Container, CssBaseline, createTheme, Typography, Grid, TextField, Link } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationShema } from "./validation";
import { useContext, useState } from "react";
import {Context}  from '../../index';

const defaultTheme = createTheme();

const Login = () => {
  const {userStore} = useContext(Context)
  const [loading, setLoading] = useState(false)

  const {control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationShema),
  })

  const onSubmit = async ({name, password}) => {
    try {
      setLoading(true)
      userStore.login(name, password).finally(() => setLoading(false))
    } catch(error) {
      console.log(error)
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
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
                  <Link href="/register" variant="body2">
                    У тебя нет аккаунта? Пройди регистрацию!
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
      </Container>
      {/* <AlertMassage duration = {20000} severity = 'error' text = 'Ошибка авторизации!' /> */}
    </ThemeProvider>
  );
}

export default Login;
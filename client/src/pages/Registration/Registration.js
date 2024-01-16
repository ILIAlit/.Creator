import { Container, CssBaseline, createTheme, Box, Typography, Grid, TextField, Link } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import LoadingButton from '@mui/lab/LoadingButton';
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationShema } from "./validation";
import { useContext, useState } from "react";
import { Context } from "../../index";


const defaultTheme = createTheme();

const Registration = () => {

  const [loading, setLoading] = useState(false)

  const {userStore} = useContext(Context);
  

  const {
    control,
    formState: {
      errors
    },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(validationShema),
  });

  const onSubmit = async ({name, email, password}) => {
    try {
      setLoading(true)
      userStore.registration(name, email, password).finally(() => {
        setLoading(false)
      });
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
          <Typography component="h3" variant="h6">Регистрация</Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{mt: 3, mb: 10}}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Controller
                  control={control}
                  name="name"
                  render={({field}) => (
                    <TextField
                      error = { !!errors.name?.message }
                      helperText = {errors.name?.message}
                      fullWidth
                      label="Имя"
                      onChange={(event) => {field.onChange(event)}}
                      value={field.value}
                      />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="email"
                  control={control} 
                  render={({field}) => (
                    <TextField
                      error = {!!errors.email?.message}
                      helperText = {errors.email?.message}
                      fullWidth
                      label="Почта"
                      onChange={(event) => {field.onChange(event)}}
                      value={field.value}
                      />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  control={control}
                  name="password" 
                  render={({field}) => (
                    <TextField
                      error = {!!errors.password?.message}
                      helperText = {errors.password?.message}
                      fullWidth
                      label="Пароль"
                      type="password"
                      value={field.value}
                      onChange={(event) => {field.onChange(event)}}/>
                  )}
                  />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  control={control}
                  name="confirmpassword" 
                  render={({field}) => (
                    <TextField
                      error={!!errors.confirmpassword?.message}
                      helperText={errors.confirmpassword?.message}
                      fullWidth
                      label="Повторите пароль"
                      type="password"
                      value={field.value}
                      onChange={(event) => {field.onChange(event)}}/>
                  )}
                />
              </Grid>
            </Grid>
            <LoadingButton
              type="submit"
              fullWidth
              loading={loading}
              loadingIndicator="Загрузка…"
              variant="contained"
              sx={{ mt: 5, mb: 3, fontSize: '16px'  }}>
                Создать
            </LoadingButton>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  У тебя есть аккаунт? Перейди для входа
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      
    </ThemeProvider>
  );
}

export default Registration;
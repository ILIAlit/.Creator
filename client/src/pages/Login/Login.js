import { ThemeProvider } from "@emotion/react";
import { Box, Container, CssBaseline, createTheme, Typography, Grid } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationShema } from "./validation";
import { useContext, useState } from "react";
import {Context}  from '../../context/index';
import { HOME_ROUTE, REGISTRATION_ROUTE } from "../../utils/consts";
import { useNavigate, Link } from 'react-router-dom'
import Input from "../../components/UI/Input";

const defaultTheme = createTheme();

const Login = () => {
  const navigate = useNavigate();
  const {userStore, alertStore} = useContext(Context)
  const [loading, setLoading] = useState(false)


  const {control, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(validationShema),
  })

  const onSubmit = async ({name, password}) => {
    setLoading(true)
    userStore.login(name, password)
      .then((res) => {
        if(res.error) {
          alertStore.alertOpen(res.error, 'error')
        } else {
          navigate(HOME_ROUTE)
          alertStore.alertOpen('Успешная авторизация', 'success')
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
                  <Input 
                    id ="name" 
                    control={control}
                    name="name" 
                    label="Имя" 
                    variant="outlined" 
                    type="text"
                    error={!!errors.name?.message}
                    helperText={errors.name?.message}
                  />
                </Grid>
                <Grid item xs={12}>
                <Input 
                  id ="password" 
                  control={control} 
                  name="password" 
                  label="Пароль" 
                  variant="outlined" 
                  type="password" 
                  error={!!errors.password?.message}
                  helperText={errors.password?.message} 
                />
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
    </ThemeProvider>
  );
}

export default Login;
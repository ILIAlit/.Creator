import { Container, CssBaseline, createTheme, Box, Typography, Grid } from "@mui/material";
import { Link } from 'react-router-dom'
import { ThemeProvider } from "@emotion/react";
import LoadingButton from '@mui/lab/LoadingButton';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationShema } from "./validation";
import { useContext } from "react";
import { Context } from "../../context/index";
import { HOME_ROUTE, LOGIN_ROUTE } from "../../utils/consts";
import { useNavigate } from 'react-router-dom'
import Input from "../../components/UI/Input";
import {observer} from 'mobx-react-lite'


const defaultTheme = createTheme();

const Registration = () => {

  const navigate = useNavigate()
  const {userStore, alertStore} = useContext(Context);
  const {loading} = userStore

  console.log(userStore)
  

  const {
    control,
    formState: {
      errors
    },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(validationShema),
  });

  const onSubmit = ({name, email, password}) => {
    userStore.registration(name, email, password)
      .then((res) => {
        if(res.error) {
          alertStore.alertOpen(res.error, 'error')
        } else {
          navigate(HOME_ROUTE)
          alertStore.alertOpen('Успешная регистрация', 'success')
        }
      })
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
                  id ="email" 
                  control={control}
                  name="email" 
                  label="Почта" 
                  variant="outlined" 
                  type="text"
                  error={!!errors.email?.message}
                  helperText={errors.email?.message}
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
              <Grid item xs={12}>
                <Input 
                  id ="confirmpassword" 
                  control={control}
                  name="confirmpassword" 
                  label="Повторите пароль" 
                  variant="outlined" 
                  type="password"
                  error={!!errors.confirmpassword?.message}
                  helperText={errors.confirmpassword?.message}
                />
              </Grid>
            </Grid>
            <LoadingButton
              type="submit"
              fullWidth
              loading={loading.isLoading}
              loadingIndicator="Загрузка…"
              variant="contained"
              sx={{ mt: 5, mb: 3, fontSize: '16px'  }}>
                Создать
            </LoadingButton>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to={LOGIN_ROUTE} variant="body2">
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

export default observer(Registration);
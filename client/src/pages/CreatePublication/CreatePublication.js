import { ThemeProvider } from "@emotion/react";
import { Avatar, Box, Button, ButtonBase, Container, CssBaseline, Grid, Paper, TextField, Typography, createTheme } from "@mui/material";
import Input from "../../components/UI/Input";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import ImageForm from "../../components/UI/ImageForm";
import ChipSelect from "../../components/UI/ChipSelect";

const defaultTheme = createTheme()


const CreatePublication = () => {


  const {control, handleSubmit, register} = useForm()

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component='main' maxWidth='md' sx={{p:5}}>
        <CssBaseline />
        <Typography 
          component="h1"
          variant="h4"
          color="textPrimary"
          gutterBottom
        >Создание публикации</Typography>
        <Paper elevation={5} sx={{p:3, mt:3, pb:6}}>
          <Grid sx={{justifyContent:"center"}} component='form' container spacing={5}>
            <Grid sx={{display:'flex', alignItems:'center', justifyContent:'center',}} item>
              <ImageForm variant='square' register={register} width='300px' height='300px' />
            </Grid>
            <Grid sx={{justifyContent:"center"}} xs={12}  item sm container>
              <Grid item direction='column'>
                <TextField placeholder="Название" fullWidth sx={{mb:3}}  />
                <TextField multiline placeholder="Описание" fullWidth sx={{mb:2}} />
                <ChipSelect />
              </Grid>
              <Button sx={{width: '250px', height: '50px', mt: 5}} fullWidth variant='contained'>Сохранить</Button>
            </Grid>

          </Grid>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default CreatePublication;
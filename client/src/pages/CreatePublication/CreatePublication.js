import { ThemeProvider } from "@emotion/react";
import { Button, Container, CssBaseline, Grid, Paper, Typography, createTheme } from "@mui/material";
import Input from "../../components/UI/Input";
import { useForm } from "react-hook-form";
import ImageForm from "../../components/UI/ImageForm";
import ChipSelect from "../../components/UI/TagSelect";
import { yupResolver } from "@hookform/resolvers/yup"
import { schema } from "./validation";
import InputMultiLine from "../../components/UI/InputMultiLine";
import { useContext, useState } from "react";
import { Context } from '../../context/index'

const defaultTheme = createTheme()


const CreatePublication = () => {

  const [publTag, setPublTag] = useState([]);
  const {publicationStore} = useContext(Context)

  const {
    control, 
    handleSubmit, 
    register, 
    formState: {errors}
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    data.tags = publTag
    const formData = new FormData()
    formData.append('title', data.title)
    formData.append('description', data.description)
    formData.append('image', data.image[0])
    formData.append('link', data.link)
    formData.append('tags', JSON.stringify(publTag))
    publicationStore.createPublication(formData)
  }

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
          <Grid onSubmit={handleSubmit(onSubmit)} sx={{justifyContent:"center"}} component='form' container spacing={5}>
            <Grid sx={{display:'flex', alignItems:'center', justifyContent:'center',}} item>
              <ImageForm name='image' variant='square' register={register} width='300px' height='300px' />
            </Grid>
            <Grid sx={{justifyContent:"center"}} xs={12}  item sm container>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Input 
                    id='title'
                    type='text'
                    label='Название'
                    name='title'
                    error={!!errors.title?.message}
                    helperText={errors.title?.message}
                    control={control} />
                </Grid>
                <Grid item xs={12}>
                  <InputMultiLine 
                    id='description'
                    type='text'
                    label='Описание'
                    control={control}
                    name='description'
                    error={!!errors.description?.message}
                    helperText={errors.description?.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputMultiLine 
                    id='link'
                    type='text'
                    label='Ссылка'
                    control={control}
                    name='link'
                    error={!!errors.description?.message}
                    helperText={errors.description?.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <ChipSelect publTag={publTag} setPublTag={setPublTag} />
                </Grid>
              </Grid>
              <Button type='submit' sx={{width: '250px', height: '50px', mt: 5}} fullWidth variant='contained'>Сохранить</Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default CreatePublication;
import { Instagram, Telegram } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SaveIcon from '@mui/icons-material/Save';
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../UI/Input";
import { Context } from "../../context/index"
import ImageForm from "../UI/ImageForm";



const FormProfile = ({onSave}) => {

  const { profileStore, alertStore } = useContext(Context)
  const {control, handleSubmit, register} = useForm()
  const [loading, setLoading] = useState(false);


  const onSubmit = async (data) => {
    try {
      const formData = new FormData()
      formData.append('instagramLink', data.instagramLink)
      formData.append('telegramLink', data.telegramLink)
      formData.append('status', data.status)
      formData.append('avatar', data.avatar[0])
      profileStore.createProfile(formData)
        .then((res) => {
          if(res.error) {
            alertStore.alertOpen(res.error, 'error')
          } else {
            alertStore.alertOpen('Профиль создан', 'success')
          }
        })
        .finally(() => onSave())
    } catch(error) {
      
    }
  };



  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <ImageForm register={register} name='avatar' variant='circle' width='160px' height='160px' />
      <Box maxWidth="xs" sx={{mt:2}}>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', mb:2 }}>
          <Input control={control} name="status" label="Статус" variant="outlined" id ="status" type="text"  />
        </Box>
        <Box sx={{display: 'flex', gap: 2}}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <Instagram sx={{ color: 'action.active', mr: 1, my: 1.3 }} />
            <Input control={control} name="instagramLink" label="Инстаграм" variant="standard" id ="instagram" type="text"  />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <Telegram sx={{ color: 'action.active', mr: 1, my: 1.3 }} />
            <Input control={control} name="telegramLink" label="Телеграм" variant="standard" id ="telegram" type="text"  />
          </Box>
        </Box>
        <Box sx={{display:'flex',gap:2}}>
          <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 5, mb: 3, fontSize: '16px'  }}
              loadingPosition="start"
              startIcon={<SaveIcon/>}
              loading={loading}>
              Сохранить
          </LoadingButton>
          <Button
            onClick={() => onSave()}
            fullWidth
            sx={{ mt: 5, mb: 3, fontSize: '16px'  }}
          >Отмена
          </Button>
        </Box>
      </Box>
</Box>
  );
}

export default FormProfile;





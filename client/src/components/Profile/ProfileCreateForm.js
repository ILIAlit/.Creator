import { Instagram, Telegram } from "@mui/icons-material";
import { Box } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SaveIcon from '@mui/icons-material/Save';
import { useState } from "react";
import { useForm } from "react-hook-form";
import AvatarForm from "./AvatarForm";
import Input from "../Input";



const FormProfile = ({onSave}) => {

  const {control, handleSubmit, register} = useForm()
  const [loading, setLoading] = useState(false);


  const onSubmit = (data) => {
    try {
      console.log(data)
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
      <AvatarForm register={register}/>
      <Box maxWidth="xs">
        <Box sx={{display: 'flex', gap: 2}}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <Instagram sx={{ color: 'action.active', mr: 1, my: 1.3 }} />
            <Input control={control} name="instagram" label="Инстаграм" variant="standard" id ="instagram" type="text"  />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <Telegram sx={{ color: 'action.active', mr: 1, my: 1.3 }} />
            <Input control={control} name="telegram" label="Телеграм" variant="standard" id ="telegram" type="text"  />
          </Box>
        </Box>
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
      </Box>
</Box>
  );
}

export default FormProfile;





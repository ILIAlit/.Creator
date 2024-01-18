import { PhotoCamera } from "@mui/icons-material";
import { Avatar, IconButton, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";


const AvatarForm = ({register}) => {

  const [avatar, setAvatar] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState(null);

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("Файл слишком большой. Выберите файл размером не более 5 МБ.");
      } else if (!file.type.startsWith("image/")) {
        alert("Файл не является изображением. Выберите файл изображения.");
      } else {
        setAvatar(file);
      }
    }
  };

  const removeCover = () => {
    setAvatar(null);
    setAvatarUrl(null);
  };

  useEffect(() => {
    if (avatar) {
      const url = URL.createObjectURL(avatar);
      setAvatarUrl(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [avatar]);



  return (
    <Tooltip title = {!avatarUrl ? "Выберите изображение" : "Удалить"} >
      <Avatar
        sx={{ width: 120, height: 120 }}
        src={avatarUrl}
        size="large"
        variant="circle"
        onClick = {removeCover}>
        <IconButton
          component="label"
          color="primary">
          <PhotoCamera />
          <input 
            {...register('avatar')}
            type="file"
            accept="image/*"
            hidden
            onChange={handleAvatarChange}
          />
        </IconButton>
      </Avatar>
    </Tooltip>
  );
}

export default AvatarForm;
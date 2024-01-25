import { PhotoCamera } from "@mui/icons-material";
import { Avatar, IconButton, Tooltip } from "@mui/material";
import { useState } from "react";


const ImageForm = ({name ,register, variant, width, height}) => {

  const [userAvatar, setUserAvatar] = useState(null);


  const handleAvatarChange = (event) => {
    setUserAvatar(URL.createObjectURL(event.target.files[0]));
  };

  const removeCover = () => {
    setUserAvatar(null);
  };


  return (
    <Tooltip title = {!userAvatar ? "Выберите изображение" : "Удалить"} >
      <Avatar
        sx={{ width: width, height: height }}
        src={userAvatar}
        size="large"
        variant={variant}
        onClick = {removeCover}>
        <IconButton
          component="label"
          onChange={handleAvatarChange}
          color="primary">
          <PhotoCamera />
          <input 
            {...register(name)}
            type="file"
            accept="image/*"
            hidden
          />
        </IconButton>
      </Avatar>
    </Tooltip>
  );
}

export default ImageForm;
import { Box, Button, Container, CssBaseline, ThemeProvider, Typography, createTheme } from "@mui/material";
import { useContext, useState } from "react";
import { Context } from "../context";
import { observer } from 'mobx-react-lite'
import ProfileCreateForm from "../components/Profile/ProfileCreateForm";
import ProfilePreview from "../components/Profile/ProfilePreview";

const defaultTheme = createTheme();

const Profile = () => {

  const {userStore: {user}} = useContext(Context)
  const {name} = user

  const [previewVisible, setPreviewVisible] = useState(true);
  const [isProfile, setIsProfile] = useState(false);
  const [loading, setLoading] = useState(false);

  const onClosePreview = () => {
    setPreviewVisible(false)
  }

  const createProfile = () => {
    setIsProfile(true)
    setPreviewVisible(false)
  }

  const onCloseSave = () => {
    setPreviewVisible(true)
  }


  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth = "sx">
        <CssBaseline />
        <Box
          sx={{
            p:5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Typography component="h1" variant="h3" sx={{mb: 3}}>Привет, {name}</Typography>
          {!isProfile && 
            <Box>
              <Button
                onClick={() => createProfile()}
                variant="contained"
                sx={{ mt: 5, mb: 3, fontSize: '16px'  }}>
                Создать профиль!
              </Button>
            </Box>}
          {isProfile && 
            <Box>
              {previewVisible ? 
                <ProfilePreview 
                  telegramLink={true} 
                  instagramLink={true} 
                  onClick={onClosePreview}
                /> 
                : 
                <ProfileCreateForm onSave = {onCloseSave} />
              }  
            </Box>
          }
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default observer(Profile);
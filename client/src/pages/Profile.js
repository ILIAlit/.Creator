import { Box, Button, Container, CssBaseline, ThemeProvider, Typography, createTheme } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Context } from "../context";
import { observer } from 'mobx-react-lite'
import ProfileCreateForm from "../components/Profile/ProfileCreateForm";
import ProfilePreview from "../components/Profile/ProfilePreview";
import Loader from "../components/Loader";

const defaultTheme = createTheme();

const Profile = () => {

  const {profileStore} = useContext(Context)
  const {profile, isProfile} = profileStore
  const {avatar, instagramLink, telegramLink, status} = profile

  const {userStore: {user}} = useContext(Context)
  const {name} = user


  const [previewVisible, setPreviewVisible] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    profileStore.getProfile()
      .then((res) => console.log(res))
      .finally(() => setLoading(false))
  }, [])

  const onClosePreview = () => {
    setPreviewVisible(false)
  }

  const createProfile = () => {
    profileStore.setIsProfile(true)
    setPreviewVisible(false)
  }

  const onCloseSave = () => {
    setPreviewVisible(true)
  }


  if(loading) {
    return (
      <Loader />
    )
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container component="main" maxWidth = "sx">
        <Box
          sx={{
            p:5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Typography component="h1" variant="h3" sx={{mb: 3}}>Привет, {name}</Typography>
          {!isProfile ? 
            <Box>
              <Button
                onClick={() => createProfile()}
                variant="contained"
                sx={{ mt: 5, mb: 3, fontSize: '16px'  }}>
                Создать профиль!
              </Button>
            </Box> :
            <Box>
              {previewVisible ? 
                <ProfilePreview
                  name={name}
                  avatar={avatar}
                  status = {status} 
                  telegramLink={telegramLink} 
                  instagramLink={instagramLink} 
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
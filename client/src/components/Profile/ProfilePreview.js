import { Instagram, Telegram } from "@mui/icons-material";
import { Avatar, Box, Button, Link, Typography } from "@mui/material";



const ProfilePreview = ({onClick, telegramLink, instagramLink, status, avatar, name}) => {
  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      component="form">
      <Avatar
        sx={{ width: 120, height: 120 }}
        src={avatar}
        size="large"
        variant="circle">
      {name[0]}
      </Avatar>
      <Box maxWidth="xs" sx={{m:5}}>
        <Typography variant='body2' gutterBottom>{status}</Typography>
        <Box sx={{display: 'flex', gap: 5}}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', alignItems: 'center', }}>
            <Instagram sx={{ color: 'action.active', mr: 1, my: 1.3 }} />
            <Link href={instagramLink}>Инстаграм</Link>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', alignItems: 'center', }}>
            <Telegram sx={{ color: 'action.active', mr: 1, my: 1.3 }} />
            <Link href={telegramLink}>Телеграм</Link>
          </Box>
        </Box>
        <Button
          onClick={() => onClick()}
          fullWidth
          variant="contained"
          sx={{ mt: 5, mb: 3, fontSize: '16px'  }}>
          Изменить
        </Button>
      </Box>
    </Box>
  );
}

export default ProfilePreview;


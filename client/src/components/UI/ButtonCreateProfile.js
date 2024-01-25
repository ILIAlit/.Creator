import React from 'react'
import { Box, Button } from "@mui/material";

export default function ButtonCreateProfile({createProfile}) {
  return (
    <Box>
      <Button
        onClick={() => createProfile()}
        variant="contained"
        sx={{ mt: 5, mb: 3, fontSize: '16px'  }}>
        Создать профиль!
      </Button>
    </Box>
  )
}

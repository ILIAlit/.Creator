import React from 'react'
import LoadingButton from '@mui/lab/LoadingButton';


export default function LoadButton({isLoad, ButtonText}) {
  return (
    <LoadingButton
      type="submit"
      fullWidth
      loading={isLoad}
      loadingIndicator="Загрузка…"
      variant="contained"
      sx={{ mt: 5, mb: 3, fontSize: '16px'  }}
    >
      {ButtonText}
    </LoadingButton>
  )
}


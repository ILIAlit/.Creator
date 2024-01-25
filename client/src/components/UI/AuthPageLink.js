import { Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function AuthPageLink({route, linkText}) {
  return (
    <Grid container justifyContent="flex-end">
      <Grid item>
        <Link to={route} variant="body2">
          {linkText}
        </Link>
      </Grid>
    </Grid>
  )
}

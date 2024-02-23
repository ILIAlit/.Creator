import ErrorIcon from '@mui/icons-material/Error'
import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

export default function Error(error) {
	return (
		<Box sx={{ display: 'flex', justifyContent: 'center' }}>
			<Paper sx={{ p: 4, maxWidth: '200px', m: 10 }}>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						gap: 2,
					}}
				>
					<ErrorIcon sx={{ fontSize: '50px' }} color='error' />
					<Typography variant='h5'>Ошибка!</Typography>
				</Box>
			</Paper>
		</Box>
	)
}

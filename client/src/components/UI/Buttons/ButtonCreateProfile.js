import { Box, Button } from '@mui/material'
import React from 'react'

export default function ButtonCreateProfile({ createProfile }) {
	return (
		<Box>
			<Button
				onClick={() => createProfile()}
				variant='contained'
				sx={{ fontSize: '16px' }}
			>
				Создать профиль!
			</Button>
		</Box>
	)
}

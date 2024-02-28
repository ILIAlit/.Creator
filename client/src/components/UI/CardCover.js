import { Box, Typography } from '@mui/material'
import { default as React } from 'react'

export default function CardCover({ title }) {
	return (
		<Box className='publication-cover'>
			<Box className='publication-title'>
				<Typography gutterBottom variant='h4' component='h5'>
					{title}
				</Typography>
			</Box>
		</Box>
	)
}

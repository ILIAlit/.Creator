import { Box, Typography } from '@mui/material'
import { default as React } from 'react'
import ButtonLike from './Buttons/ButtonLike'
import ButtonSave from './Buttons/ButtonSave'

export default function CardCover({ isLike, publicationId, title, setIsLike }) {
	return (
		<Box className='publication-cover'>
			<Box className='publication-navigate-buttons'>
				<ButtonSave />
				<ButtonLike
					setIsLike={setIsLike}
					publicationId={publicationId}
					isLike={isLike}
				/>
			</Box>
			<Box className='publication-title'>
				<Typography gutterBottom variant='h4' component='h5'>
					{title}
				</Typography>
			</Box>
		</Box>
	)
}
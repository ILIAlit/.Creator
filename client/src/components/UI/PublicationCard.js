import { Box, ButtonBase, Card, CardMedia, Paper } from '@mui/material'
import React, { forwardRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { PREVIEW_PUBLICATION_ROUTE } from '../../utils/consts'
import CardCover from './CardCover'
import MyCardContent from './MyCardContent'

export default forwardRef(function PublicationCard(
	{ id, title, src, author, likeCount },
	ref
) {
	const navigate = useNavigate()

	const cardClick = () => {
		navigate(PREVIEW_PUBLICATION_ROUTE + '/' + id)
	}

	return (
		<Paper variant='outlined'>
			<ButtonBase onClick={cardClick}>
				<Card ref={ref}>
					<Box sx={{ position: 'relative' }}>
						<CardMedia component='img' alt={title} height='340' image={src} />
						<CardCover title={title} />
					</Box>
					<MyCardContent author={author} likeCount={likeCount} />
				</Card>
			</ButtonBase>
		</Paper>
	)
})

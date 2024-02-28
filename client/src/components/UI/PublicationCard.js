import { Box, Card, CardActionArea, CardMedia, Paper } from '@mui/material'
import React, { forwardRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCheckIsLikePublication } from '../../hooks/useCheckIsLikePublication'
import { useCheckIsSavePublication } from '../../hooks/useCheckIsSavePublication'
import { PREVIEW_PUBLICATION_ROUTE } from '../../utils/consts'
import MyCardContent from './MyCardContent'
import CardCover from './CardCover'

export default forwardRef(function PublicationCard(
	{ id, title, src, author, likeCount },
	ref
) {
	const { isLike, setIsLikeValue } = useCheckIsLikePublication(id)
	const { isSave, setIsSaveValue } = useCheckIsSavePublication(id)

	const navigate = useNavigate()

	const cardClick = () => {
		navigate(PREVIEW_PUBLICATION_ROUTE + '/' + id)
	}

	return (
		<Paper variant='outlined'>
			<Card ref={ref}>
				<Box sx={{ position: 'relative' }}>
					<CardActionArea onClick={cardClick}>
						<CardMedia component='img' alt={title} height='340' image={src} />
						<CardCover title={title} />
					</CardActionArea>
				</Box>
				<Box sx={{ p: 3 }}>
					<MyCardContent author={author} likeCount={likeCount} />
				</Box>
			</Card>
		</Paper>
	)
})

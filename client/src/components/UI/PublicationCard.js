import { Box, Card, CardActionArea, CardMedia, Paper } from '@mui/material'
import React, { forwardRef, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PREVIEW_PUBLICATION_ROUTE } from '../../utils/consts'
import { Context } from './../../context/index'
import CardCover from './CardCover'
import MyCardContent from './MyCardContent'

export default forwardRef(function PublicationCard(
	{ id, title, src, author, likeCount },
	ref
) {
	const [isLike, setIsLike] = useState(false)

	const { likeStore, alertStore } = useContext(Context)
	const navigate = useNavigate()

	const cardClick = () => {
		navigate(PREVIEW_PUBLICATION_ROUTE + '/' + id)
	}

	async function checkIsLike(publicationId) {
		const isLikeResponse = await likeStore.checkIsLike(publicationId)
		setIsLike(isLikeResponse)
	}

	useEffect(() => {
		checkIsLike(id)
	}, [])

	return (
		<Paper variant='outlined'>
			<CardActionArea onClick={cardClick}>
				<Card ref={ref}>
					<Box sx={{ position: 'relative' }}>
						<CardMedia component='img' alt={title} height='340' image={src} />
						<CardCover
							setIsLike={setIsLike}
							publicationId={id}
							isLike={isLike}
							title={title}
						/>
					</Box>
					<MyCardContent author={author} likeCount={likeCount} />
				</Card>
			</CardActionArea>
		</Paper>
	)
})

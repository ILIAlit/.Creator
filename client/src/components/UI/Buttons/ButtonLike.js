import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Fab } from '@mui/material'
import React, { useContext } from 'react'
import { Context } from '../../../context'

export default function ButtonLike({
	size,
	isLike,
	setIsLike,
	publicationId,
	...props
}) {
	const { likeStore, alertStore } = useContext(Context)

	const createLike = event => {
		event.stopPropagation()
		likeStore.createLike(publicationId).then(res => {
			if (res.error) {
				setIsLike(false)
				alertStore.alertOpen(res.error, 'error')
			} else {
				setIsLike(!isLike)
			}
		})
	}

	console.log(isLike)

	const deleteLike = event => {
		event.stopPropagation()
		likeStore.deleteLike(publicationId).then(res => {
			if (res.error) {
				setIsLike(false)
				alertStore.alertOpen(res.error, 'error')
			} else {
				setIsLike(!isLike)
			}
		})
	}

	return (
		<Fab {...props}>
			{isLike ? (
				<FavoriteIcon sx={{ fontSize: size }} onClick={deleteLike} />
			) : (
				<FavoriteBorderIcon sx={{ fontSize: size }} onClick={createLike} />
			)}
		</Fab>
	)
}

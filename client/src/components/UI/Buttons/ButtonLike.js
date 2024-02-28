import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Box, Fab } from '@mui/material'
import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '../../../context'
import Loader from '../Loader'

export default observer(function ButtonLike({
	size,
	isLike,
	setIsLike,
	publicationId,
	...props
}) {
	const { likeStore, alertStore } = useContext(Context)
	const { loading } = likeStore

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
			<Box sx={{ display: 'flex' }}>
				{loading.isLoading ? (
					<Loader size={25} />
				) : isLike ? (
					<FavoriteIcon sx={{ fontSize: size }} onClick={deleteLike} />
				) : (
					<FavoriteBorderIcon sx={{ fontSize: size }} onClick={createLike} />
				)}
			</Box>
		</Fab>
	)
})

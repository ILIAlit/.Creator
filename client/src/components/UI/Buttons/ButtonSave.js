import BookmarkIcon from '@mui/icons-material/Bookmark'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import { Box, Fab } from '@mui/material'
import React, { useContext } from 'react'
import { Context } from '../../../context'
import Loader from './../Loader'

export default function ButtonSave({
	setIsSave,
	isSave,
	publicationId,
	size,
	...props
}) {
	const { favoriteStore, alertStore } = useContext(Context)
	const { loading } = favoriteStore

	const createSave = event => {
		event.stopPropagation()
		favoriteStore.createFavorite(publicationId).then(res => {
			if (res.error) {
				setIsSave(false)
				alertStore.alertOpen(res.error, 'error')
			} else {
				setIsSave(!isSave)
			}
		})
	}

	const deleteSave = event => {
		event.stopPropagation()
		favoriteStore.deleteFavorite(publicationId).then(res => {
			if (res.error) {
				setIsSave(false)
				alertStore.alertOpen(res.error, 'error')
			} else {
				setIsSave(!isSave)
			}
		})
	}

	return (
		<Fab {...props}>
			<Box sx={{ display: 'flex' }}>
				{loading.isLoading ? (
					<Loader size={25} />
				) : isSave ? (
					<BookmarkIcon onClick={deleteSave} />
				) : (
					<BookmarkBorderIcon onClick={createSave} />
				)}
			</Box>
		</Fab>
	)
}

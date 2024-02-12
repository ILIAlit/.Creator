import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

import { Fab } from '@mui/material'
import React from 'react'

export default function ButtonLike({ size, ...props }) {
	const likeIconClick = event => {
		event.stopPropagation()
		console.log(`ButtonLike`)
	}

	return (
		<Fab onClick={likeIconClick} {...props}>
			<FavoriteBorderIcon sx={{ fontSize: size }} />
		</Fab>
	)
}

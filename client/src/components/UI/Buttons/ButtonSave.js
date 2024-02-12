import SaveIcon from '@mui/icons-material/Save'
import { Fab } from '@mui/material'
import React from 'react'

export default function ButtonSave({ size, ...props }) {
	const saveIconClick = event => {
		event.stopPropagation()
		console.log(`ButtonSave`)
	}

	return (
		<Fab onClick={saveIconClick} {...props}>
			<SaveIcon sx={{ fontSize: size }} />
		</Fab>
	)
}

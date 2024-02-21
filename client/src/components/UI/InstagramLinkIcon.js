import { Instagram } from '@mui/icons-material'
import { Box, Link } from '@mui/material'
import React from 'react'

export default function InstagramLinkIcon({link}) {
	return (
		<Box>
			<Link href={link}>
				<Instagram
					sx={{
						color: 'action.active',
						mr: 0,
						my: 1.3,
						fontSize: 30,
					}}
				/>
			</Link>
		</Box>
	)
}

import { Telegram } from '@mui/icons-material'
import { Box, Link } from '@mui/material'
import React from 'react'

export default function TelegramLinkIcon({link}) {
	return (
		<Box>
			<Link href={link}>
				<Telegram
					sx={{
						color: 'action.active',
						mr: 1,
						my: 1.3,
						fontSize: 30,
					}}
				/>
			</Link>
		</Box>
	)
}

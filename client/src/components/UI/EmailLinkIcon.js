import EmailIcon from '@mui/icons-material/Email'
import { Box, Link, Tooltip } from '@mui/material'
import React from 'react'

export default function EmailLinkIcon({ link }) {
	return (
		<Box>
			<Link href={`mailto: ${link}`}>
				<Tooltip title={link}>
					<EmailIcon
						sx={{ color: 'action.active', mr: 0, my: 1.3, fontSize: 30 }}
					/>
				</Tooltip>
			</Link>
		</Box>
	)
}

import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { HOME_ROUTE } from '../../utils/consts'

export default function Logo({variant, ...props}) {
	return (
		<Link style={{ textDecoration: 'none', color: 'white' }} to={HOME_ROUTE}>
			<Typography
				variant={variant}
				noWrap
				{...props}
			>
				Creator.
			</Typography>
		</Link>
	)
}

import {
	Box,
	CardActions,
	CardContent,
	CssBaseline,
	Grid,
	Typography,
} from '@mui/material'
import { default as React } from 'react'
import LikeIcon from './LikeIcon'

export default function MyCardContent({ author, likeCount }) {
	return (
		<CardContent sx={{ p: 0 }}>
			<CssBaseline />
			<Grid
				container
				sx={{
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
					<Grid item>
						<Typography variant='h4' sx={{ fontSize: '19px' }}>
							{author}
						</Typography>
					</Grid>
				</Box>
				<Grid item>
					<CardActions>
						<LikeIcon count={likeCount} />
					</CardActions>
				</Grid>
			</Grid>
		</CardContent>
	)
}

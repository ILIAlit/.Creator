import { Box, CardActions, CardContent, Grid, Typography } from '@mui/material';
import { default as React } from 'react';
import LikeIcon from './LikeIcon';

export default function MyCardContent({ author, likeCount }) {
	return (
		<CardContent>
			<Grid
				container
				sx={{
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
					<Grid item>
						<Typography sx={{ fontSize: '18px' }}>{author}</Typography>
					</Grid>
				</Box>
				<Grid item>
					<CardActions>
						<LikeIcon count={likeCount} />
					</CardActions>
				</Grid>
			</Grid>
		</CardContent>
	);
}

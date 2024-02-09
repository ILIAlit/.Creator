import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box, Typography } from '@mui/material';
import React from 'react';

export default function LikeIcon({count}) {
	return (
		<Box sx={{ display: 'flex', gap: 1 }}>
			<FavoriteIcon />
			<Typography>{count}</Typography>
		</Box>
	);
}

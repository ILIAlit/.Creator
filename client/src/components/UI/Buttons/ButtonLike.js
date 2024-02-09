import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Fab } from '@mui/material';
import React from 'react';

export default function ButtonLike() {
	return (
		<>
			<Fab>
				<FavoriteBorderIcon sx={{ fontSize: 30 }} />
			</Fab>
		</>
	);
}

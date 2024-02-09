import { Box, Card, CardMedia, Paper } from '@mui/material';
import React, { forwardRef } from 'react';
import CardCover from './CardCover';
import MyCardContent from './MyCardContent';

export default forwardRef(function PublicationCard(
	{ title, src, author, likeCount },
	ref
) {
	return (
		<Paper variant="outlined">
			<Card ref={ref}>
				<Box sx={{ position: 'relative' }}>
					<CardMedia
						component="img"
						alt={title}
						height="340"
						image={src}
					/>
					<CardCover title={title} />
				</Box>
				<MyCardContent author={author} likeCount={likeCount} />
			</Card>
		</Paper>
	);
});

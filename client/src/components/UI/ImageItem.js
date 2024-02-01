import { Box, ImageListItem, ImageListItemBar } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import { forwardRef } from 'react';

const ImageItem = forwardRef(({ image, title, author }, ref) => {
	return (
		<ImageListItem ref={ref} key={image} sx={{ minHeight: '300px' }}>
			<img
				srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
				src={`${image}?w=248&fit=crop&auto=format`}
				alt={title}
				loading="lazy"
			/>
			<ImageListItemBar
				sx={{ p: 1, pr: 3 }}
				title={title}
				subtitle={author}
				actionIcon={
					<Box sx={{ display: 'flex', gap: 1 }}>
						<FavoriteBorderIcon sx={{ color: 'white', fontSize: 25 }} />
						<BookmarkAddOutlinedIcon
							sx={{ color: 'white', fontSize: 25 }}
						/>
					</Box>
				}
			/>
		</ImageListItem>
	);
});

export default ImageItem;

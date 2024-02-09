import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import { Box, ImageListItem, ImageListItemBar } from '@mui/material';
import { forwardRef, useState } from 'react';
import LikeButton from './LikeButton';

const ImageItem = forwardRef(({ src, title, author }, ref) => {
	const [loaded, setLoaded] = useState(false);

	const handleImageLoad = () => {
		setLoaded(true);
	};

	return (
		<ImageListItem
			ref={ref}
			key={src}
			sx={{ minHeight: '300px', maxHeight: '500px' }}
		>
			{
				<img
					srcSet={src}
					src={src}
					alt={title}
					onLoad={handleImageLoad}
					style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.5s' }}
				/>
			}
			<ImageListItemBar
				sx={{ p: 1, pr: 3 }}
				title={title}
				subtitle={author}
				actionIcon={
					<Box sx={{ display: 'flex', gap: 1 }}>
						<LikeButton />
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

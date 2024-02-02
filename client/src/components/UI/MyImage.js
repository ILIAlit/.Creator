import { useEffect, useState } from 'react';
import { Blurhash } from 'react-blurhash';

const MyImage = ({ alt, src }) => {
	const [imageLoaded, setImageLoaded] = useState(false);

	useEffect(() => {
		const img = new Image();
		img.onLoad = () => {
			setImageLoaded(true);
		};
		img.src = src;
	}, [src]);

	return (
			<img srcSet={src} src={src} alt={alt} />
	);
};

export default MyImage;

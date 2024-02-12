import { ImageList } from '@mui/material';
import React from 'react';
import ErrorBoundary from '../../error/ErrorBoundary';
import '../../style/publication-style.css';
import PublicationCard from './PublicationCard';

const ErrorMsg = (error) => {
	return (
		<div>
			{/* Вы можете использовать свои стили и код для обработки ошибок */}
			<p>Something went wrong!</p>
			<p>{error.message}</p>
		</div>
	);
};

export default function MyPublicationsList({ publications, lastElement }) {
	return (
		<ImageList variant="quilted" cols={3} gap={9}>
			<ErrorBoundary ErrorComponent={ErrorMsg}>
				{publications.map(
					({ likeCount, id, title, image, user }, index) => {
						if (index + 1 === publications.length) {
							return (
								<PublicationCard
								    id={id}
									likeCount={likeCount}
									ref={lastElement}
									key={id}
									title={title}
									src={image}
									author={user.name}
								/>
							);
						}
						return (
							<PublicationCard
								likeCount={likeCount}
								ref={lastElement}
								key={id}
								title={title}
								src={image}
								author={user.name}
							/>
						);
					}
				)}
			</ErrorBoundary>
		</ImageList>
	);
}

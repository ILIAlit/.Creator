import { ImageList } from '@mui/material'
import React from 'react'
import ErrorBoundary from '../../error/ErrorBoundary'
import '../../style/publication-style.css'
import Loader from './Loader'
import PublicationCard from './PublicationCard'
import Error from '../Error/Error'

export default function MyPublicationsList({
	publications,
	lastElement,
	isLoading,
}) {
	if (isLoading) return <Loader />

	return (
		<ImageList variant='quilted' cols={3} gap={9}>
			<ErrorBoundary ErrorComponent={Error}>
				{publications.map(({ likeCount, id, title, image, user }, index) => {
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
						)
					}
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
					)
				})}
			</ErrorBoundary>
		</ImageList>
	)
}

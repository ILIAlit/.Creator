import { ImageList, useMediaQuery } from '@mui/material'
import React from 'react'
import ErrorBoundary from '../../error/ErrorBoundary'
import '../../style/publication-style.css'
import Error from '../Error/Error'
import Loader from './Loader'
import PublicationCard from './PublicationCard'

export default function MyPublicationsList({
	publications,
	lastElement,
	isLoading,
}) {
	const matchesExtraSmall = useMediaQuery(theme => theme.breakpoints.down('xs'))
	const matchesSmall = useMediaQuery(theme => theme.breakpoints.down('sm'))
	const matchesMedium = useMediaQuery(theme => theme.breakpoints.down('md'))
	if (isLoading) return <Loader />

	let cols
	if (matchesExtraSmall) {
		cols = 1
	} else if (matchesSmall) {
		cols = 1
	} else if (matchesMedium) {
		cols = 2
	} else {
		cols = 3
	}

	return (
		<ImageList variant='quilted' cols={cols} gap={9}>
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

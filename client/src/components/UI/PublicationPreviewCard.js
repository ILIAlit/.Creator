import { Box, Card, Grid, Typography } from '@mui/material'
import { React } from 'react'
import ButtonLike from '../../components/UI/Buttons/ButtonLike'
import ButtonSave from '../../components/UI/Buttons/ButtonSave'
import MyCardContent from '../../components/UI/MyCardContent'
import { useCheckIsLikePublication } from '../../hooks/useCheckIsLikePublication'
import { useCheckIsSavePublication } from '../../hooks/useCheckIsSavePublication'

export default function PublicationPreviewCard({
	publicationId,
	image,
	title,
	description,
	likeCount,
}) {
	const { isLike, setIsLikeValue } = useCheckIsLikePublication(publicationId)
	const { isSave, setIsSaveValue } = useCheckIsSavePublication(publicationId)

	return (
		<Box sx={{ pl: 10, pr: 10, m: 4 }}>
			<Grid
				elevation={6}
				container
				component={Card}
				sx={{
					borderRadius: '20px',
					height: '100vh',
				}}
			>
				<Grid
					item
					xs={false}
					sm={4}
					md={7}
					sx={{
						backgroundImage: `url(${image})`,
						backgroundRepeat: 'no-repeat',
						backgroundColor: t =>
							t.palette.mode === 'light'
								? t.palette.grey[50]
								: t.palette.grey[900],
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				/>
				<Grid item xs={12} sm={8} md={5} sx={{ p: 4 }}>
					<Box>
						<Typography gutterBottom component='h3' variant='h2'>
							{title}
						</Typography>
					</Box>
					<Box sx={{ width: '100%', mb: 4 }}>
						<Typography variant='body1' gutterBottom>
							{description}
						</Typography>
					</Box>
					<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
						<Box sx={{ display: 'flex', gap: 2, mb: 6 }}>
							<ButtonSave
								setIsSave={setIsSaveValue}
								publicationId={publicationId}
								isSave={isSave}
							/>
							<ButtonLike
								setIsLike={setIsLikeValue}
								publicationId={publicationId}
								isLike={isLike}
							/>
						</Box>
						<Box>
							<MyCardContent author='ILIA' likeCount={likeCount} />
						</Box>
					</Box>
					<Box></Box>
				</Grid>
			</Grid>
		</Box>
	)
}

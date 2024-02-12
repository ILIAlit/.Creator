import {
	Box,
	Card,
	CssBaseline,
	Grid,
	ThemeProvider,
	Typography,
	createTheme,
} from '@mui/material';
import React from 'react';
import ButtonLike from '../../components/UI/Buttons/ButtonLike';
import ButtonSave from '../../components/UI/Buttons/ButtonSave';
import MyCardContent from '../../components/UI/MyCardContent';

const defaultTheme = createTheme();

export default function PreviewPublication() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<CssBaseline />
			<Box sx={{ pl: 10, pr: 10, m: 4 }}>
				<Grid
					elevation={6}
					container
					component={Card}
					sx={{
						borderRadius: '20px',
						height: '100vh',
						// justifyContent: 'space-between',
					}}
				>
					<Grid
						item
						xs={false}
						sm={4}
						md={7}
						sx={{
							backgroundImage:
								'url(https://source.unsplash.com/random?wallpapers)',
							backgroundRepeat: 'no-repeat',
							backgroundColor: (t) =>
								t.palette.mode === 'light'
									? t.palette.grey[50]
									: t.palette.grey[900],
							backgroundSize: 'cover',
							backgroundPosition: 'center',
						}}
					/>
					<Grid item xs={12} sm={8} md={5} sx={{ p: 4 }}>
						<Box>
							<Typography gutterBottom component="h3" variant="h2">
								TITLE
							</Typography>
						</Box>
						<Box sx={{ width: '100%', mb: 4 }}>
							<Typography variant="body1" gutterBottom>
								body2. Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Quos blanditiis tenetur unde suscipit,
								quam beatae rerum inventore consectetur, neque
								doloribus, cupiditate numquam dignissimos laborum fugiat
								deleniti? Eum quasi quidem quibusdam.
							</Typography>
						</Box>
						<Box
							sx={{ display: 'flex', justifyContent: 'space-between' }}
						>
							<Box sx={{ display: 'flex', gap: 2, mb: 6 }}>
								<ButtonLike />
								<ButtonSave />
							</Box>
							<Box>
								<MyCardContent author="ILIA" likeCount={123} />
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</ThemeProvider>
	);
}

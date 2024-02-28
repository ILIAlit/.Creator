import { ThemeProvider } from '@emotion/react'
import {
	Container,
	CssBaseline,
	Paper,
	Typography,
	createTheme,
} from '@mui/material'
import CreatePublicationForm from '../../components/CreatePublicationForm/CreatePublicationForm'

const defaultTheme = createTheme()

const CreatePublication = () => {
	return (
		<ThemeProvider theme={defaultTheme}>
			<Container component='main' maxWidth='md' sx={{ pb: 3 }}>
				<CssBaseline />
				<Typography
					component='h1'
					variant='h4'
					color='textPrimary'
					gutterBottom
				>
					Создание публикации
				</Typography>
				<Paper elevation={5} sx={{ p: 3, mt: 3, pb: 6 }}>
					<CreatePublicationForm />
				</Paper>
			</Container>
		</ThemeProvider>
	)
}

export default CreatePublication

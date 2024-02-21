import { ThemeProvider } from '@emotion/react'
import {
	Box,
	Container,
	CssBaseline,
	Typography,
	createTheme,
} from '@mui/material'
import { observer } from 'mobx-react-lite'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'

const defaultTheme = createTheme()

const Registration = () => {
	return (
		<ThemeProvider theme={defaultTheme}>
			<Container component='main' maxWidth='xs'>
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Typography component='h1' variant='h3' sx={{ mb: 3 }}>
						Creator.
					</Typography>
					<Typography component='h3' variant='h6'>
						Регистрация
					</Typography>
					<RegistrationForm />
				</Box>
			</Container>
		</ThemeProvider>
	)
}

export default observer(Registration)

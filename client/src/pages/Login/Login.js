import { ThemeProvider } from '@emotion/react'
import {
	Box,
	Container,
	CssBaseline,
	Typography,
	createTheme,
} from '@mui/material'
import { observer } from 'mobx-react-lite'
import LoginForm from '../../components/LoginForm/LoginForm'
const defaultTheme = createTheme()

const Login = () => {
	return (
		<ThemeProvider theme={defaultTheme}>
			<Container component='main' maxWidth='xs'>
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						mb: 10,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Typography component='h1' variant='h3' sx={{ mb: 3 }}>
						Creator.
					</Typography>
					<Typography component='h3' variant='h6'>
						Вход
					</Typography>
					<LoginForm />
				</Box>
			</Container>
		</ThemeProvider>
	)
}

export default observer(Login)

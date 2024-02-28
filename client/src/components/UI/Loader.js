import {
	Container,
	CssBaseline,
	ThemeProvider,
	createTheme,
} from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'

const defaultTheme = createTheme()

const Loader = ({ size }) => {
	return (
		<ThemeProvider theme={defaultTheme}>
			<Container
				component='main'
				maxWidth='sx'
				sx={{ mt: 5, display: 'flex', justifyContent: 'center' }}
			>
				<CssBaseline />
				<CircularProgress size={size} />
			</Container>
		</ThemeProvider>
	)
}

export default Loader

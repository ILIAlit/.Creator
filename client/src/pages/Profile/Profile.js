import {
	Box,
	Container,
	CssBaseline,
	ThemeProvider,
	Typography,
	createTheme,
} from '@mui/material'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import Error from '../../components/Error/Error'
import UserProfileInfo from '../../components/UI/UserProfileInfo'
import UserActivityBar from '../../components/UserActivityBar/UserActivityBar'
import { Context } from '../../context'
import ErrorBoundary from '../../error/ErrorBoundary'
import '../../style/profile.css'

const defaultTheme = createTheme()

const Profile = () => {
	const {
		userStore: { user },
	} = useContext(Context)
	const { name } = user

	return (
		<ThemeProvider theme={defaultTheme}>
			<CssBaseline />
			<ErrorBoundary ErrorComponent={Error}>
				<Container sx={{ mb: 10 }} component='main' maxWidth='sx'>
					<Box className='profile__user-name-block'>
						<Typography component='h1' variant='h3' sx={{ mb: 3 }}>
							Привет, {name}
						</Typography>
					</Box>
					<UserProfileInfo name={name} />
					<Box sx={{ pl: 10, pr: 10, mt: 5 }}>
						<UserActivityBar />
					</Box>
				</Container>
			</ErrorBoundary>
		</ThemeProvider>
	)
}

export default observer(Profile)

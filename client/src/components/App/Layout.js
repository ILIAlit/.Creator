import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Context } from '../../context'
import ErrorBoundary from '../../error/ErrorBoundary'
import { useAuthCheck } from '../../hooks/useAuthCheck'
import Header from '../Header/Header'
import AlertMessage from '../UI/AlertMessage'
import Loader from '../UI/Loader'
import Error from '../Error/Error'
import { CssBaseline } from '@mui/material'

const Layout = ({ children }) => {
	const {
		userStore: { loading, isAuth, user, logout },
	} = useContext(Context)
	useAuthCheck()

	if (loading.isLoading) {
		return <Loader />
	}

	return (
		<div style={{ paddingTop: '56px' }}>
			<CssBaseline />
			<Header isAuth={isAuth} user={user} logout={logout} />
			<ErrorBoundary ErrorComponent={Error}>{children}</ErrorBoundary>
			<AlertMessage />
		</div>
	)
}

export default observer(Layout)

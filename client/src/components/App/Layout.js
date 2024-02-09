import Header from '../Header/Header';
import AlertMessage from '../UI/AlertMessage';
import { observer } from 'mobx-react-lite';
import { useAuthCheck } from '../../hooks/useAuthCheck';
import { useContext } from 'react';
import { Context } from '../../context';
import Loader from '../UI/Loader';
import ErrorBoundary from '../../error/ErrorBoundary';

const ErrorMsg = (error) => {
	return (
		<div>
			{/* Вы можете использовать свои стили и код для обработки ошибок */}
			<p>Something went wrong!</p>
			<p>{error.message}</p>
		</div>
	);
};

const Layout = ({ children }) => {
	const {
		userStore: { loading, isAuth, user, logout },
	} = useContext(Context);
	useAuthCheck();

	if (loading.isLoading) {
		return <Loader />;
	}

	return (
		<div style={{ paddingTop: '100px' }}>
			<Header isAuth={isAuth} user={user} logout={logout} />
			<ErrorBoundary ErrorComponent={ErrorMsg}>{children}</ErrorBoundary>
			<AlertMessage />
		</div>
	);
};

export default observer(Layout);

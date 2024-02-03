import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../router/routes';
import { HOME_ROUTE } from '../utils/consts';
import { Context } from '../context';
import { observer } from 'mobx-react-lite';

const AppRouter = () => {
	const { userStore } = useContext(Context);
	const { isAuth } = userStore;

	return (
		<Routes>
			{isAuth &&
				authRoutes.map(({ path, Component }) => (
					<Route path={path} element={Component} key={path} />
				))}
			{publicRoutes.map(({ path, Component }) => (
				<Route path={path} element={Component} key={path} />
			))}
			<Route path="*" element={<Navigate to={HOME_ROUTE} />} />
		</Routes>
	);
};

export default observer(AppRouter);

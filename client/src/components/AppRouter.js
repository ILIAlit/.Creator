import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { HOME_ROUTE } from '../utils/consts';

const AppRouter = () => {
  const isAuth = true
  return (
    <Routes>
      {isAuth && (
        authRoutes.map(({path, Component}) => <Route path={path} element={Component} key={path} />)
      )}
      {publicRoutes.map(({path, Component}) => <Route path={path} element={Component} key={path} />)}
      <Route path='*' element={<Navigate to={HOME_ROUTE} />} />
    </Routes>
  );
}

export default AppRouter;
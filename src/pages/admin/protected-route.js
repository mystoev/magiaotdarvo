import React from 'react';
import { Outlet } from 'react-router-dom';

import { Styles } from '../styles';
import { PageHeader } from '../../components';
import Login from './login';
import { useToken } from '../../hooks';

const ProtectedRoute = () => {
  const [token, setToken] = useToken();

  return token ? (
    <>
      <Styles />
      <PageHeader title={'Админ портал'} linkTo={'/admin'} />
      <Outlet />
    </>
  ) : (
    <Login setToken={setToken} />
  );
};

export default ProtectedRoute;

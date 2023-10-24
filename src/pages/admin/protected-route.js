import React from 'react';
import { Outlet } from 'react-router-dom';

import { PageHeader } from '../../components';
import Login from './login';
import { useToken } from '../../hooks/use-login';

const ProtectedRoute = () => {
  const [token, setToken] = useToken();

  return token ? (
    <>
      <PageHeader title={'Админ портал'} linkTo={'/admin'} />
      <Outlet />
    </>
  ) : (
    <Login setToken={setToken} />
  );
};

export default ProtectedRoute;

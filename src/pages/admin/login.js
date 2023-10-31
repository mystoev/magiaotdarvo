import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Header, DefaultButton } from '../../components';
import { login } from '../../hooks/use-login';

const AdminLogin = styled.div`
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  input {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
`;

const Login = ({ setToken }) => {
  const [state, setState] = useState({
    user: '',
    password: '',
    error: ''
  });

  const handleLogin = async () => {
    const result = await login(state.user, state.password);
    if (result) {
      setToken(result);
    } else {
      setState({ ...state, error: 'Грешно име/парола!' });
    }
  };

  return (
    <>
      <Header links={[{ to: '/', text: 'Начало' }]} />
      <AdminLogin>
        <h1>Вход</h1>
        <fieldset>
          <label>Потребител</label>
          <input
            type="text"
            alt="user-field"
            value={state.user}
            onChange={(e) => setState({ ...state, user: e.target.value })}
          />
        </fieldset>
        <fieldset>
          <label>Парола</label>
          <input
            type="password"
            alt="user-pass"
            value={state.password}
            onChange={(e) => setState({ ...state, password: e.target.value })}
          />
        </fieldset>
        <DefaultButton onClick={handleLogin}>Влез</DefaultButton>
        {state.error && <h2>{state.error}</h2>}
      </AdminLogin>
    </>
  );
};

Login.propTypes = {
  setToken: PropTypes.func
};

export default Login;

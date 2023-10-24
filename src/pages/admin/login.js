import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Header } from '../../components';
import { login } from '../../hooks/use-login';
import './login.less';

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
      <div className="admin-login">
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
        <button className="button-default" onClick={handleLogin}>
          Влез
        </button>
        {state.error && <h2>{state.error}</h2>}
      </div>
    </>
  );
};

Login.propTypes = {
  setToken: PropTypes.func
};

export default Login;

import { useState } from 'react';
import axios from 'axios';

const LOGIN_FILE = 'login.php';

export const login = async (user, password) => {
  try {
    const { data } = await axios.post(LOGIN_FILE, { user, password });
    if (data) {
      localStorage.setItem('token', data);
      return data;
    }
  } catch {
    return null;
  }
};

export const useToken = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  return [token, setToken];
};

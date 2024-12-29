import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth/';

const register = (name, username, email, password) => {
  return axios.post(API_URL + 'register', {
    name,
    username,
    email,
    password
  });
};

const login = (username, password) => {
  return axios.post(API_URL + 'login', {
    username,
    password
  });
};

const logout = () => {
  localStorage.removeItem('user');
};

export default {
  register,
  login,
  logout
};

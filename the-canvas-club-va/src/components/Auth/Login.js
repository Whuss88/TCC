import React, { useState } from 'react';
import AuthService from '../../services/AuthService';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    AuthService.login(username, password).then(() => {
      // Redirect to user account page or display a message
    });
  };

  return (
    <form onSubmit={handleLogin} className="login-form">
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;

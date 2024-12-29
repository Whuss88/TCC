import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/auth/login', { username, password })
      .then(response => {
        // Store the token (optional)
        localStorage.setItem('token', response.data.token);
        // Navigate to the user profile page
        navigate('/profile');
      })
      .catch(error => {
        console.error('There was an error logging in!', error);
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

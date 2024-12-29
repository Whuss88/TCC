import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const registrationResponse = await axios.post('http://localhost:5000/api/auth/register', { name, username, email, password });
      
      // Log in the new user after registration
      const loginResponse = await axios.post('http://localhost:5000/api/auth/login', { username, password });
      
      // Store the token
      localStorage.setItem('token', loginResponse.data.token);
      
      // Navigate to the user profile page
      navigate('/profile');
    } catch (error) {
      console.error('There was an error registering the user!', error);
    }
  };

  return (
    <form onSubmit={handleRegister} className="register-form">
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;

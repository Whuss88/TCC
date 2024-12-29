import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EditProfile.css';

const EditProfile = () => {
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    address: '',
    password: '',
    confirmPassword: ''
  });

  useEffect(() => {
    axios.get('/api/user')
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the user data!', error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put('/api/user', user)
      .then(response => {
        alert('Profile updated successfully!');
      })
      .catch(error => {
        console.error('There was an error updating the profile!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Profile</h2>
      <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Name" />
      <input type="text" name="username" value={user.username} onChange={handleChange} placeholder="Username" />
      <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Email" />
      <input type="text" name="address" value={user.address} onChange={handleChange} placeholder="Address" />
      <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="New Password" />
      <input type="password" name="confirmPassword" value={user.confirmPassword} onChange={handleChange} placeholder="Confirm New Password" />
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default EditProfile;

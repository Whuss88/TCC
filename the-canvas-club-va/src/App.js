import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'; // Ensure correct path and capitalization
import HomePage from './components/Home/HomePage'; // Ensure correct path and capitalization
import Login from './components/Auth/Login';// Ensure correct path and capitalization
import Register from './components/Auth/Register'; // Ensure correct path and capitalization
import ProductList from './components/Products/ProductList'; // Ensure correct path and capitalization
import ProductDetails from './components/Products/ProductDetails'; // Ensure correct path and capitalization
import UserProfile from './components/User/UserProfile'; // Ensure correct path and capitalization
import EditProfile from './components/User/EditProfile'; // Ensure correct path and capitalization
import Cart from './components/Cart/Cart'; // Ensure correct path and capitalization

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../Cart/CartContext';
import './Navbar.css';

const Navbar = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <h1>The Canvas Club Va</h1>
      <div className="links">
        <Link to="/">Home</Link>
        {token ? (
          <>
            <Link to="/profile">Profile</Link>
            <Link to="/cart">Cart <span className="cart-count">{cart.length}</span></Link>
            <button onClick={handleLogout} className="logout-button">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

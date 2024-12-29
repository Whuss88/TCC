import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Cart/CartContext';
import './Navbar.css';

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="navbar">
      <h1>The Canvas Club Va</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/products">Products</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/cart">Cart <span className="cart-count">{cart.length}</span></Link>
      </div>
    </nav>
  );
};

export default Navbar;

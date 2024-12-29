import React, { useState } from 'react';
import CartItem from './CartItem';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    // Sample cart items
    { id: 1, name: 'Top', price: 29.99 },
    { id: 2, name: 'Bottom', price: 49.99 },
  ]);

  const handleRemove = (id) => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedItems);
  };

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} onRemove={handleRemove} />
          ))}
        </div>
      )}
      <div>
        <h3>Total: ${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default Cart;

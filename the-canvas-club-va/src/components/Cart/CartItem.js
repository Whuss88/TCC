import React from 'react';
import './Cart.css';

const CartItem = ({ item, onRemoveOne }) => {
  return (
    <div className="cart-item">
      <h4>{item.name}</h4>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => onRemoveOne(item.id)}>Remove One</button>
    </div>
  );
};

export default CartItem;

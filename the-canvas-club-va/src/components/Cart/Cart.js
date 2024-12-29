import React from 'react';
import { useCart } from './CartContext';
import CartItem from './CartItem';
import './Cart.css';

const Cart = () => {
  const { cart, dispatch } = useCart();

  const handleRemoveOne = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
  };

  if (cart.length === 0) {
    return <div>Your cart is empty.</div>;
  }

  return (
    <div>
      <h2>Cart</h2>
      <div>
        {cart.map(item => (
          <CartItem key={item.id} item={item} onRemoveOne={handleRemoveOne} />
        ))}
      </div>
      <div>
        <h3>Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default Cart;

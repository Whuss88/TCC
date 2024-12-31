import React from 'react';
import { useCart } from './CartContext';
import CartItem from './CartItem';
import './Cart.css';

const Cart = () => {
  const { cart, dispatch, cartLength } = useCart();

  const handleRemoveOne = (id) => {
    console.log('Dispatching REMOVE_FROM_CART for id:', id); // Debugging line
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
  };
  

  return (
    <div>
      <h2>Cart</h2>
      {cartLength === 0 ? (
        <div>Your cart is empty.</div>
      ) : (
        <>
          <div>
            {cart.map(item => (
              <CartItem key={item.id} item={item} onRemoveOne={handleRemoveOne} />
            ))}
          </div>
          <div>
            <h3>Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

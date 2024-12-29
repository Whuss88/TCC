import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './components/Cart/CartContext'; // Import the CartProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);

reportWebVitals();

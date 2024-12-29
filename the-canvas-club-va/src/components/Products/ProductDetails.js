import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../Cart/CartContext';
import './ProductDetails.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { dispatch } = useCart();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the product details!', error);
      });
  }, [id]);

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;

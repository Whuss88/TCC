import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')  // Update with the correct backend port
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);
  
  const filteredProducts = filter === 'all' ? products : products.filter(product => product.category === filter);

  return (
    <div>
      <h2>Products</h2>
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('tops')}>Tops</button>
        <button onClick={() => setFilter('bottoms')}>Bottoms</button>
        <button onClick={() => setFilter('shoes')}>Shoes</button>
        <button onClick={() => setFilter('accessories')}>Accessories</button>
      </div>
      <div className="product-list">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

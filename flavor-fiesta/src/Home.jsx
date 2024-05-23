import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCardContainer from './component/ProductCardContainer/ProductCardContainer';
import './Home.css';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch('http://localhost:3001/products')
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.error('Error fetching products:', error));
    }, []);

  return (
    <div className="home">
      <h1 className="section-title">Mas Vendidos</h1>
      <ProductCardContainer products={products} />
    </div>
  );
};

export default Home;

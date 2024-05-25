import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CategoriesSection from '../src/component/Categories/CategoriesSection';
import ProductCardContainer from './component/ProductCardContainer/ProductCardContainer';
import bannerHome from '../src/component/Categories/bannerhome.jpg'; // Importa la imagen

import './Home.css';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch('http://localhost:8080/productos/')
        .then(response => response.json())
        .then(data => setProducts(data.data))
        .catch(error => console.error('Error fetching products:', error));
    }, []);

    console.log(products)

  return (
    <div className="home">


      <div>
      <img src={bannerHome} alt="BannerHome" className="banner-home" />
      <h2 className="categories-title">Categorías</h2>
      <CategoriesSection />
      </div>

      <h1 className="section-title">Mas Vendidos</h1>
      <ProductCardContainer products={products} />
    </div>
  );
};

export default Home;

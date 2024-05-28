import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductCardContainer.css';

const ProductCardContainer = ({ products }) => {
  return (
    <div className="product-card-container">
      {products.map(product => (
        <ProductCard
          key={product.id}
<<<<<<< HEAD
          id={product.id}
          image={product.imagenes[0].url}
          title={product.nombre}
          price={product.precio}
          subtitle={product.categoria}
=======
          image={product.image}
          title={product.title}
          price={product.price}
          subtitle={product.subtitle}
>>>>>>> d25541c91259bda6a0d3a303bb88518f0199ebc3
        />
      ))}
    </div>
  );
};

export default ProductCardContainer;

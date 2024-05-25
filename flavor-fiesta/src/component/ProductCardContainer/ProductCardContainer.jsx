import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductCardContainer.css';

const ProductCardContainer = ({ products }) => {
  return (
    <div className="product-card-container">
      {products.map(product => (
        <ProductCard
          key={product.id}
          image={product.nombre}
          title={product.categoria}
          price={product.codigo}
          subtitle={product.categoria}
        />
      ))}
    </div>
  );
};

export default ProductCardContainer;

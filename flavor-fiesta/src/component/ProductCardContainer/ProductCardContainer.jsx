import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductCardContainer.css';

const ProductCardContainer = ({ products }) => {
  return (
    <div className="product-card-container">
      {products.map(product => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductCardContainer;

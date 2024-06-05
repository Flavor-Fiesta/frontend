import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductDetail.css';
import Carousel from '../Carousel/Carousel';
import { CartContext } from '../CartContext/CartContext';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addItemToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/productos/${productId}`);
        setProduct(response.data.data);
      } catch (error) {
        console.error('Error fetching the product data', error);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    console.log(product.cantidad)
    product.cantidad = quantity
    addItemToCart(product, quantity);
    console.log(`Agregar al carrito: ${product.nombre} x ${quantity}`);
  };

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="product-detail">
      <div className="product-image">
        <img src={product.imagenes[0].url} alt={product.nombre} />
        <Carousel images={product.imagenes} />
      </div>
      <div className="product-info">
        <h1>{product.nombre}</h1>
        <p>Categoría: {product.categoria}</p>
        <p>Precio: ${product.precio}</p>
        <div className="add-to-cart">
          <input
            type="number"
            value={quantity}
            min="1"
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
          <button onClick={handleAddToCart}>Agregar al Carrito</button>
        </div>
        <p>{product.descripcion}</p>
      </div>
    </div>
  );
};

export default ProductDetail;

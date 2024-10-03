// ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css'; // Asegúrate de que tu archivo CSS esté importado

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h2 className="product-name">{product.title}</h2>
      <p className="product-price">${product.price}</p>
      <textarea 
        className="description" 
        value={product.description} 
        readOnly 
        rows={3} // Número de líneas visibles
      />
      <div className="button-group">
        <Link to={`/product/${product.id}`} className="button-details">Ver Detalles</Link>
        <Link onClick={onAddToCart} className="button-add">Agregar al Carrito</Link>
      </div>
    </div>
  );
};

export default ProductCard;

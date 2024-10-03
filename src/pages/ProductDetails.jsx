import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom'; 
import { CartContext } from '../context/CartContext';
import '../styles/ProductDetails.css'

const ProductDetails = () => {
    const { id } = useParams();
    const [ product, setProduct ] = useState(null); 
    const { addToCart } = useContext(CartContext);
    
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
          .then((res) => res.json())
          .then((json) => setProduct(json))
          .catch((err) => console.error(err));
      }, [id]);

      if (!product) return <div>Cargando...</div>
  return (
    <div className="product-details">
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>${product.price}</p>
        <p>{product.description}</p>
        <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
      
    </div>
  );
};

export default ProductDetails

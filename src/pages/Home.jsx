import React, { useEffect, useState, useContext } from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/Home.css';
import { CartContext } from '../context/CartContext';

const Home = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-title">Bienvenido</h1>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={() => addToCart(product)} />
          ))
        ) : (
          <p className="no-products">No se encontraron productos</p>
        )}
      </div>
    </div>
  );
};

export default Home;

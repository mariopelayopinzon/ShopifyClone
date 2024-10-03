// src/components/Cart.jsx
import React, { useContext, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Cart.css';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate(); 

  // Redirigir al usuario a Home si el carrito está vacío
  useEffect(() => {
    if (cart.length === 0) {
      alert('El carrito está vacío, serás redirigido a la página de inicio.');
      navigate('/'); // Redirige a Home
    }
  }, [cart, navigate]);

  // Calcular el total del carrito
  const totalAmount = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('El carrito está vacío.');
      return;
    }

    // Simular el procesamiento de la compra
    const purchaseDetails = {
      products: cart,
      totalAmount: totalAmount,
      date: new Date().toISOString(),
    };

    // Guardar los detalles de la compra en localStorage
    localStorage.setItem('lastPurchase', JSON.stringify(purchaseDetails));

    // Aquí puedes mostrar una página de agradecimiento o un resumen
    alert('Compra realizada con éxito! Detalles guardados en el almacenamiento local.');

    // Limpiar el carrito después de la compra exitosa
    clearCart();

    // Redirigir a la página de resumen de compra
    navigate('/purchase-summary'); // Redirige a la página de resumen de compra
  };

  return (
    <div className="cart-container">
      <h2>Carrito</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((product) => (
              <li key={product.id} className="cart-item">
                <div className="cart-item-info">
                  <img src={product.image} alt={product.title} />
                  <div>
                    <h3>{product.title}</h3>
                    <p>Precio: ${product.price}</p>
                    <p>Cantidad: {product.quantity}</p>
                  </div>
                </div>
                <button className="remove-button" onClick={() => removeFromCart(product.id)}>
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <h3>Total: ${totalAmount.toFixed(2)}</h3>
            <button className="checkout-button" onClick={handleCheckout}>
              Comprar
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

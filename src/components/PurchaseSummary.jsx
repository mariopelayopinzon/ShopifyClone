import React, { useEffect, useState } from 'react'
import '../styles/PurchaseSummary.css'

const PurchaseSummary = () => {
    const [purchaseDetails, setPurchaseDetails ] = useState(null); 

    useEffect(() => {
        const savedPurchase = localStorage.getItem('lastPurchase');
        if (savedPurchase) { 
            setPurchaseDetails(JSON.parse(savedPurchase));

        }
    }, []); 

 return (
    <div className="purchase-summary">
      {purchaseDetails ? (
        <>
          <h2>Resumen de Compra</h2>
          <h3>Total: ${purchaseDetails.totalAmount.toFixed(2)}</h3>
          <p>Fecha: {new Date(purchaseDetails.date).toLocaleString()}</p>
          <h4>Productos:</h4>
          <ul>
            {purchaseDetails.products.map((product) => (
              <li key={product.id}>
                {product.title} - Precio: ${product.price} - Cantidad: {product.quantity}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>No hay detalles de compra disponibles.</p>
      )}
    </div>
  );
};

export default PurchaseSummary;
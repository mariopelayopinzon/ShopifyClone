import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import CartProvider from './context/CartContext.jsx';
import Navbar from './components/Navbar';
import './styles/App.css';
import Cart from './components/Cart.jsx';
import PurchaseSummary from './components/PurchaseSummary.jsx';
import Login from './components/Login.jsx';
import { AuthProvider } from './context/AuthContext.jsx';

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Navbar /> {/* Navbar aquí */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/purchase-summary" element={<PurchaseSummary />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;

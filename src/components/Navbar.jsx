// src/components/Navbar.jsx
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext'; // Importa el contexto de autenticación
import '../styles/Navbar.css'; // Asegúrate de importar el CSS

const Navbar = () => {
    const { cart } = useContext(CartContext); 
    const { user, logout } = useContext(AuthContext); // Obtén el usuario y la función de cierre de sesión
    const [search, setSearch] = useState('');

    const handleSearch = () => {

    }
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/cart">Cart ({cart.length})</Link>
            <input type="text"
            value={search}
            onChange={(e) => setSeatch(e.target.value)}
            placeholder="Buscar"
            onKeyPress={(e) =>{
                if (e.key === 'Enter') {
                    handleSearch();
                }
            }} />
            <button onClick={handleSearch}>Buscar</button>
            {user ? (
                <>
                    <span>Hola, {user.username}</span> {/* Muestra el nombre del usuario */}
                    <button onClick={logout}>Cerrar Sesión</button> {/* Botón para cerrar sesión */}
                </>
            ) : (
                <Link to="/login">Iniciar Sesión</Link> // Enlace a la página de inicio de sesión
            )}
        </nav>
    );
};

export default Navbar;

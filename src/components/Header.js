import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-primary text-white p-3">
            <div className="container d-flex justify-content-between align-items-center">
                <Link to="/" className="text-white text-decoration-none">
                    <h1>My E-Commerce</h1>
                </Link>
                <nav>
                    <Link to="/cart" className="text-white me-3">Cart</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;

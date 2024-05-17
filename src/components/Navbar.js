import React from 'react';
import './Navbar.css'
export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <ul className="navbar__list">
                    <li className="navbar__item"><a className="navbar__link" href="/">Home</a></li>
                    <li className="navbar__item"><a className="navbar__link" href="/Inventory">Inventory</a></li>
                    <li className="navbar__item"><a className="navbar__link" href="/AddStock">Add Stock</a></li>
                    <li className="navbar__item"><a className="navbar__link" href="/ShoppingCart">ShoppingCart</a></li>
                    <li className="navbar__item"><a className="navbar__link" href="/Login">Login</a></li>
                    <li className="navbar__item"><a className="navbar__link" href="/SignUp">Register</a></li>
                </ul>
            </div>
        </nav>

    );
};
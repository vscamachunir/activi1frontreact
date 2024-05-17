import React from 'react';

export const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <div className="navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Inventory">Inventory</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/AddStock">Add Stock</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/ShoppingCart">ShoppingCart</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Login">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/SignUp">Register</a>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
    );
};
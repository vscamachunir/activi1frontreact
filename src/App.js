import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Inventory } from './components/Inventory';
import { Login } from './components/Login';
import { SignUp } from './components/SignUp';
import { PageNotFound } from './components/PageNotFound';
import {Footer} from "./components/Footer";
import {ProductForm} from "./components/ProductForm";
import { ShoppingCart } from "./components/ShoppingCart";

export const App = () => {
  return (
      <Router>
          <div className="container">
              <div className="navbar">
                  <Navbar/>
              </div>
              <div className="content">
                  <Routes>
                      <Route exact path="/" element={<Home/>}/>
                      <Route path="/inventory" element={<Inventory/>}/>
                      <Route path="/addstock" element={<ProductForm/>}/>
                      <Route path="/shoppingcart" element={<ShoppingCart/>}/>
                      <Route path="/login" element={<Login/>}/>
                      <Route path="/signup" element={<SignUp/>}/>
                      <Route path="*" element={<PageNotFound/>}/>
                  </Routes>
              </div>
              <div className="footer">
                  <Footer/>
              </div>
          </div>
      </Router>
  );
};

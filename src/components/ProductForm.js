import React, { useState } from 'react';
import './ProductForm.css'; // Importing CSS file

export const ProductForm = () => {
    const [product, setProduct] = useState({
        name: '',
        price: '',
        quantity: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Product entered:', product);
        setProduct({
            name: '',
            price: '',
            quantity: '',
        });
    };

    return (
        <form className="product-form">
            <div className="product-form__group">
                <label htmlFor="name" className="product-form__label">Name:</label>
                <input
                    type="text"
                    className="product-form__input"
                    id="name"
                    name="name"
                    value={product.name}
                    onChange={handleChange}
                    placeholder="Enter product name"
                />
            </div>
            <div className="product-form__group">
                <label htmlFor="price" className="product-form__label">Price:</label>
                <input
                    type="number"
                    className="product-form__input"
                    id="price"
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                    placeholder="Enter product price"
                />
            </div>
            <div className="product-form__group">
                <label htmlFor="quantity" className="product-form__label">Quantity:</label>
                <input
                    type="number"
                    className="product-form__input"
                    id="quantity"
                    name="quantity"
                    value={product.quantity}
                    onChange={handleChange}
                    placeholder="Enter product quantity"
                />
            </div>
            <button type="submit" className="product-form__button" onClick={handleSubmit}>Add Product</button>
        </form>
    );
};
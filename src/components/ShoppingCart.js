import React, { useState } from 'react';
import './ShoppingCart.css'; // Importamos los estilos CSS

export const ShoppingCart = () => {
    // Estado para almacenar los productos en el carrito
    const [cartItems, setCartItems] = useState([
        { id: 1, count: 20, name: 'Producto 1', price: 10 },
        { id: 2, count: 40, name: 'Producto 2', price: 20 },
        { id: 3, count: 70, name: 'Producto 3', price: 30 },
        { id: 4, count: 20, name: 'Producto 4', price: 40 },
        { id: 5, count: 10, name: 'Producto 5', price: 50 },
        { id: 6, count: 34, name: 'Producto 6', price: 60 },
    ]);

    // Función para eliminar un producto del carrito
    const removeFromCart = (itemId) => {
        setCartItems(cartItems.filter(item => item.id !== itemId));
    };

    return (
        <div className="cart">
            {cartItems.map(item => (
                <div key={item.id} className="cart__item">
                    <div className="cart__item-info">
                        <h3 className="cart__item-name">{item.name}</h3>
                        <p className="cart__item-price">${item.price.toFixed(2)}</p>
                        <div className="cart__item-count">Cantidad: {item.count}</div>
                    </div>
                    <button className="cart__item-remove" onClick={() => removeFromCart(item.id)}>Eliminar</button>
                </div>
            ))}
        </div>
    );
};

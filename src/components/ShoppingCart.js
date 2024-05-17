import React, { useState } from 'react';
import './ShoppingCart.css'; // Importamos los estilos CSS

export const ShoppingCart = () => {
    // Estado para almacenar los productos en el carrito
    const [cartItems, setCartItems] = useState([
        { id: 1, count: 20, name: 'Product 1', price: 10 },
        { id: 2, count: 40, name: 'Product 2', price: 20 },
        { id: 3, count: 70, name: 'Product 3', price: 30 },
        { id: 4, count: 20, name: 'Product 4', price: 40 },
        { id: 5, count: 10, name: 'Product 5', price: 50 },
        { id: 6, count: 34, name: 'Product 6', price: 60 },
    ]);

    // Función para eliminar un producto del carrito
    const removeFromCart = (itemId) => {
        setCartItems(cartItems.filter(item => item.id !== itemId));
    };

    // Función para enviar los datos al proveedor (con datos ficticios)
    const sendToProvider = () => {
        // Datos ficticios para enviar al proveedor
        const dataToSend = {
            items: cartItems.map(item => ({
                id: item.id,
                name: item.name,
                price: item.price,
                count: item.count
            })),
            total: cartItems.reduce((total, item) => total + (item.price * item.count), 0)
        };

        // Simulación de envío al proveedor
        console.log('Sending cart items to provider:', dataToSend);

        // Lógica adicional para enviar los datos al proveedor (puedes usar fetch u otra librería de solicitud HTTP)
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
            <button className="cart__send-to-provider" onClick={sendToProvider}>Enviar al Proveedor</button>
        </div>
    );
};

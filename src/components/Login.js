import React, { useState } from 'react';
import './Login.css'; // Importar el archivo CSS

export const Login = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({
            ...credentials,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Credentials entered:', credentials);
        // Aquí podrías hacer la lógica para autenticar al usuario
    };

    return (
        <div className="login">
            <form className="login__form">
                <h2 className="login__title">Login</h2>
                <div className="login__group">
                    <label htmlFor="username" className="login__label">Username:</label>
                    <input
                        type="text"
                        className="login__input"
                        id="username"
                        name="username"
                        value={credentials.username}
                        onChange={handleChange}
                        placeholder="Enter your username"
                    />
                </div>
                <div className="login__group">
                    <label htmlFor="password" className="login__label">Password:</label>
                    <input
                        type="password"
                        className="login__input"
                        id="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                    />
                </div>
                <button type="submit" className="login__button" onClick={handleSubmit}>Login</button>
            </form>
        </div>
    );
};

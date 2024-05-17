import React, { useState } from 'react';
import './SignUp.css'; // Importar el archivo CSS

export const SignUp = () => {
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('User data entered:', userData);
        // Aquí podrías hacer la lógica para registrar al usuario
    };

    return (
        <div className="signup">
            <form className="signup__form">
                <h2 className="signup__title">Sign Up</h2>
                <div className="signup__group">
                    <label htmlFor="firstName" className="signup__label">First Name:</label>
                    <input
                        type="text"
                        className="signup__input"
                        id="firstName"
                        name="firstName"
                        value={userData.firstName}
                        onChange={handleChange}
                        placeholder="Enter your first name"
                    />
                </div>
                <div className="signup__group">
                    <label htmlFor="lastName" className="signup__label">Last Name:</label>
                    <input
                        type="text"
                        className="signup__input"
                        id="lastName"
                        name="lastName"
                        value={userData.lastName}
                        onChange={handleChange}
                        placeholder="Enter your last name"
                    />
                </div>
                <div className="signup__group">
                    <label htmlFor="email" className="signup__label">Email:</label>
                    <input
                        type="email"
                        className="signup__input"
                        id="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                    />
                </div>
                <div className="signup__group">
                    <label htmlFor="password" className="signup__label">Password:</label>
                    <input
                        type="password"
                        className="signup__input"
                        id="password"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                    />
                </div>
                <button type="submit" className="signup__button" onClick={handleSubmit}>Sign Up</button>
            </form>
        </div>
    );
};
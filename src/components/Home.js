import React from 'react';
import './Home.css'

export const Home = () => {
    return (
        <div className="home">
            <div className="home__content">
                <h1 className="home__title">Welcome to the best inventory!!!</h1>
                <img src="https://img.freepik.com/vector-gratis/cinta-transportadora-ilustracion-concepto-almacen_114360-15026.jpg?w=740&t=st=1715919681~exp=1715920281~hmac=351c2915c36eacdc3dab072edfdb67f4668f3b516e036a6a398f161e5b2280cc" alt="Inventory" className="home__image"/>
            </div>
        </div>
    );
};

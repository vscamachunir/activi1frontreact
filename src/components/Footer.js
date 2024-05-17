import React from 'react';
import './Footer.css'; // Importar el archivo CSS

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__contact">
                    <h3 className="footer__heading">Contact Us</h3>
                    <p>Email: contact@testinventory.com</p>
                    <p>Phone: +57 3652656894</p>
                    <p>Address: cll 3 cirvunvalar bogota</p>
                </div>
                <div className="footer__social">
                    <h3 className="footer__heading">Follow Us</h3>
                    <div className="footer__links">
                        <a href="https://facebook.com" className="footer__link" target="_blank" rel="noopener noreferrer">
                            Facebook
                        </a>
                        <a href="https://twitter.com" className="footer__link" target="_blank" rel="noopener noreferrer">
                            Twitter
                        </a>
                        <a href="https://instagram.com" className="footer__link" target="_blank" rel="noopener noreferrer">
                            Instagram
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

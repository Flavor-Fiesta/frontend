import React from 'react';
import ContactForm from './ContactForm';
import './Contact.css';
import logo from '../../assets/logo.png';
import drink from '../../assets/drink.jpg';
import tel from '../../assets/tel.png';
import sobre from '../../assets/sobre.png';
import casa from '../../assets/casa.png';

const Contact = () => {
    return (
        <div className="container">
            <div className="form-section">
                <img src={logo} alt="Flavor Fiesta" className="logo" />
                <ContactForm />
                <div className="contact-info">
                    <p><img src={tel} alt="Phone icon" /> 602 4588887</p>
                    <p><img src={sobre} alt="Email icon" /> info@flavorfiesta.com</p>
                    <p><img src={casa} alt="Love icon" /> HECHO CON AMOR EN COLOMBIA</p>
                </div>
            </div>
            <div className="image-section">
                <img src={drink} alt="Bebida Flavor Fiesta" />
            </div>
        </div>
    );
};

export default Contact;

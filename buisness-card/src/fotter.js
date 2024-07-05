import React from "react";
import './cardealer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
    return (
        <nav className="allfotter">
            <nav className="socialmedias">
                <h1>Follow Us</h1>
                <a href="http://www.instagram.com/bebaw.t" className="social-icon"><i className="fab fa-instagram"></i></a>
                <a href="http://t.me/abi" className="social-icon"><i className="fab fa-telegram-plane"></i></a>
                <a href="http://www.x.com/bbaba" className="social-icon"><i className="fab fa-twitter"></i></a>
            </nav>
            <nav className="locations">
                <h1>Location</h1>
                <a className="contact-item map-link" href="https://www.google.com/maps?q=belay ab moters" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-map-marker-alt"></i>
                </a>
            </nav>
            <nav className="phonenumber">
                <h1>Contact Us</h1>
                <a className="contact-item" href="tel:+251967125836">0967125826</a>
                <a className="contact-item" href="tel:+251707328392">0707328392</a>
            </nav>
        </nav>
    );
}

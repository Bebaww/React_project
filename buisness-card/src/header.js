import React from 'react';
import './cardealer.css';
import logo from './logo3.jpg';

export default function Header() {
    return (
        <header className='headers'>
            <nav className='logonav'>
                <img className='carlogo' src={logo} alt="Car Logo"/>
            </nav>
            <nav className='companyname'>
                <h1>BELAY AB MOTORS</h1>
            </nav>
        </header>
    );
}

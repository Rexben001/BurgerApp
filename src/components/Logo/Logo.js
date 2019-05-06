import React from 'react';
import './Logo.css'; 
import burgerLogo from '../../assets/images/logo.png';

const logo = (props) => (
    <div className="Logo">
        <img scr={burgerLogo}  alt='My burger'/>
    </div>
);

export default logo;
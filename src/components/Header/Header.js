import React from 'react';
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='header-container'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className='header-menu'>
                <Link>Topics</Link>
                <Link to="/statics">Statics</Link>
                <Link to="/blog">Blog</Link>
            </div>
        </div>
    );
};

export default Header;
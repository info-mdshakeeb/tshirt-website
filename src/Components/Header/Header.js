import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <NavLink className={({ isActve }) => isActve ? 'color' : undefined} to='/home'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
        </nav>
    );
};

export default Header;
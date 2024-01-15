// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './navbar_style.css';

import {AnimateKeyframes } from 'react-simple-animate';


const Navbar = ({ onNavItemClick}) => {
 

  return (
    <nav className="navbar-container">
      <ul className='navbar'>

      <AnimateKeyframes
                play
                duration={1}
                keyframes={[
                  "opacity:1",
                  "opacity:0"
                ]}
                iterationCount="1"
              >
       
       
       
       
        
        </AnimateKeyframes>
      </ul>

      <ul className="menu-navbar">
        <li><Link onClick={ onNavItemClick} className='link-menu-navbar' to='/'>Home</Link></li>
        <li><Link onClick={ onNavItemClick} className='link-menu-navbar' to='/about'>About</Link></li>
        <li><Link onClick={ onNavItemClick} className='link-menu-navbar' to='/resume'>Resume</Link></li>
        
        <li><Link onClick={ onNavItemClick} className='link-menu-navbar' to='/contact'>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
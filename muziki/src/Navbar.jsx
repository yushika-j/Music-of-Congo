import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
        <li><NavLink to="/login" activeClassName="active">Login</NavLink></li>
        <li><NavLink to="/explore" activeClassName="active">Explore</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;

// Layout.js
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Layout.css'; 

const Layout = () => {
  return (
    <div className="layout">
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/explore">Explore</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

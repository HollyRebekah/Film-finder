import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav-bar.css';

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="title">
        App name goes here
      </div>
      <ul id="nav-bar-links">
        <Link to="/user-account">User Info</Link>
      </ul>
    </div>
  );
};

export default NavBar;

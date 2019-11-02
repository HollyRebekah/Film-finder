import React from 'react';
import { FaUser } from 'react-icons/fa';
import { MdLocalMovies } from 'react-icons/md';
import { Link } from 'react-router-dom';
import '../styles/nav-bar.css';

const NavBar = (props) => {
  return (
    <div className="nav-bar">
      <div className="title">
        IndeciFlix
      </div>
      <div className="nav-bar-links">
        <Link to="/">
          <MdLocalMovies
            size={28}
          />
        </Link>
        <Link to="/user-account">
          <FaUser
            size={28}
          />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;

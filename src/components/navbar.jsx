import React from 'react';
import { FaUser } from 'react-icons/fa';
import { MdLocalMovies } from 'react-icons/md';
import { Link } from 'react-router-dom';
import '../styles/nav-bar.css';

const NavBar = (props) => {
  return (
    <div className="nav-bar">
      <div className="title">
        NetPick
      </div>
      <div className="links">
        <Link to="/">
          <MdLocalMovies
            size={32}
            color="white"
          />
        </Link>
        <Link to="/user-account">
          <FaUser
            size={30}
            color="white"
          />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;

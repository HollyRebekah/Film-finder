import React from 'react';
import { FaUser} from 'react-icons/fa';
import { MdLocalMovies } from 'react-icons/md';
import { Link } from 'react-router-dom';
import '../styles/nav-bar.css';

const NavBar = (props) => {
  return (
    <div className="nav-bar">
      <div className="title">
        App name goes here
      </div>
      {props.user && (
      <ul className="nav-bar-links">
        <li id="user-account-link">
          <Link to="/user-account">
            <FaUser
              size={28}
            />
          </Link>
        </li>
        <li id="movie-page-link">
          <Link to="/">
            <MdLocalMovies
              size={28}
            />
          </Link>
        </li>
      </ul>
      ) }
    </div>
  );
};

export default NavBar;

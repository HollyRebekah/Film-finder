import React from 'react';
import '../styles/button.css';

const SearchButton = (props) => {
  return (
    <button className="movie-button" onClick={props.onClick}>Pick me another</button>
  );
};

export default SearchButton;

import React from 'react';
import '../styles/button.css';

const Button = (props) => {
  return <button className="movie-button"onClick={props.onClick}>{props.text}</button>;
};

export default Button;

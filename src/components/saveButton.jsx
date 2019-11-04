import React from 'react';
import '../styles/button.css';

const SaveButton = (props) => {
  return <button className="movie-button"onClick={props.onClick}>I watched this!</button>;
};

export default SaveButton;

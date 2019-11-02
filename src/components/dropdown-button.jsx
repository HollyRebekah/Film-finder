import React from 'react';
import '../styles/dropdown.css';

const DropdownButton = (props) => {
  return (
    <div className="container" id="dropdown">
      <div className="row">
        <h2 className="heading">What type of film do you want to watch?</h2>
        <select
          className="options"
          name="genre"
          onChange={props.onClick}
        >
          <option>Pick a genre...</option>
          <option value="action">Action & Adventure</option>
          <option value="comedy">Comedy</option>
          <option value="crime">Crime</option>
          <option value="drama">Drama</option>
          <option value="kids">Kids</option>
        </select>
      </div>
    </div>
  );
};

export default DropdownButton;

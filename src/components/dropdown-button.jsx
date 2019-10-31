import React from 'react';

const DropdownButton = (props) => {
  return (
    <div className="container">
      <div className="row">
        <h2>What type of film do you want to watch?</h2>
        <select
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

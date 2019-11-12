import React from 'react';
import '../styles/dropdown.css';

const DropdownButton = (props) => {
  return (
    <div className="drop-down">
      <h2 className="heading">What type of film do you want to watch?</h2>
      <div className="genre-select">
        <select
          id="options"
          name="pick-genre"
          onChange={props.onClick}
        >
          <option disabled selected>Pick a genre...</option>
          <option value="action">Action</option>
          <option value="comedy">Comedy</option>
          <option value="crime">Crime</option>
          <option value="documentary">Documentary</option>
          <option value="drama">Drama</option>
          <option value="foreign">Foreign Language</option>
          <option value="horror">Horror</option>
          <option value="indie">Indie</option>
          <option value="kids">Kids</option>
          <option value="scifi">Sci-Fi</option>
          <option value="thriller">Thriller</option>
          <option value="TVcomedy">T.V. Comedy</option>
          <option value="TVdrama">T.V Drama</option>
        </select>
      </div>
    </div>
  );
};

export default DropdownButton;

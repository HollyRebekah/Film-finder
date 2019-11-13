import React from 'react';

const SavedMovie = props => {
  const comment = `Comment: ${props.comment}`;
  return (
    <div className="savedMovie">
      <div>
        <img src={props.image} alt="movie" />
      </div>
      <div> {props.comment.length > 0 ? comment : ''} </div>
    </div>
  );
};

export default SavedMovie;

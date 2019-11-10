import React from 'react';

const MovieInfo = (props) => {
  return (
    <div className="movie-info">
      <img
        src={props.image}
        alt={`movie-poster-for${props.title}`}
      />
      <div className="title">
        <h2>{props.title}</h2>
      </div>
      <div className="synopsis">{props.synopsis}</div>
    </div>

  );
};

export default MovieInfo;
